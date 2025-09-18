/**
 * `about-page-populate` middleware
 */

import type { Core } from "@strapi/strapi";

const AboutPagePopulate = {
  blocks: {
    on: {
      "landing-page.about-component": {
        populate: {
          heading: {
            populate: {
              Button: true,
            },
          },
          image: {
            fields: ["alternativeText", "url", "name"],
          },
          statistics: true,
        },
      },

      "about-page.history-section": {
        populate: {
          heading: {
            populate: {
              Button: true,
            },
          },
          cards: true,
        },
      },

      "about-page.team-component":{
        populate: {
          heading: {
            populate: {
              Button: true,
            },
          },
          ProfileCard: {
            populate: {
              images: {
                fields: ["alternativeText", "url", "name"],
              },
            },
          },
        },
      },

      "about-page.leader-card": {
        populate: {
          heading: {
            populate: {
              Button: true,
            },
          },

          images: {
            fields: ["alternativeText", "url", "name"],
          },
        },
      },

      "landing-page.client-component": {
        populate: {
          heading: {
            populate: {
              Button: true,
            },
          },
          images: {
            fields: ["alternativeText", "url", "name"],
          },
        },
      },

      "landing-page.testimonial": {
        populate: {
          heading: {
            populate: {
              Button: true,
            },
          },
        },
      },
    },
  },
};

export default (config, { strapi }: { strapi: Core.Strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info("In about-page-populate middleware.");
    ctx.query.populate = AboutPagePopulate;
    await next();
  };
};
