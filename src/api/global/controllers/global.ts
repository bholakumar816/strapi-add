/**
 * global controller
 */

// import { factories } from '@strapi/strapi'

// export default factories.createCoreController('api::global.global');
export type StrapiBaseItem = {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string | null;
  locale: string | null;
};

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::global.global", ({ strapi }) => ({
  async find(ctx) {
    // get the default single type response
    const { data, meta } = await super.find(ctx);

    // fetch all contacts
    let contacts = await strapi.db.query("api::contact.contact").findMany({
      populate: {
        image: {
          fields: ["alternativeText", "url", "name"],
        },
      },
    });

    // fetch all social links
    let socialLinks = await strapi.db
      .query("api::social-link.social-link")
      .findMany({
        populate: {
          icon: {
            fields: ["alternativeText", "url", "name"],
          },
        },
      });

    let HeroSection = await strapi.db
      .query("api::hero-section.hero-section")
      .findMany({
        populate: {
          image: {
            fields: ["alternativeText", "url", "name"],
          },
          Button: true,
        },
      });

    // Keep only published entries
    socialLinks = socialLinks.filter(
      (item: StrapiBaseItem) => item.publishedAt !== null
    );
    contacts = contacts.filter(
      (item: StrapiBaseItem) => item.publishedAt !== null
    );
    HeroSection = HeroSection.filter(
      (item: StrapiBaseItem) => item.publishedAt !== null
    );

    // attach them to the response
    return {
      data: {
        ...data,
        CommonData: {
          contacts,
          socialLinks,
          HeroSection,
        },
      },
      meta,
    };
  },
}));
