/**
 * `client-populate` middleware
 */

import type { Core } from "@strapi/strapi";

const ClientPopulate = {
  blocks: {
    on: {
      "common.hire-card": {
        populate: {
          Button: true,
        },
      },

      "landing-page.portfolio": {
        populate: {
          heading: {
            populate: {
              Button: true,
            },
          },
          images: {
            fields: ["alternativeText", "url", "name"],
          },
          Button: true,
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
    strapi.log.info("In client-populate middleware.");
    ctx.query.populate = ClientPopulate;
    await next();
  };
};
