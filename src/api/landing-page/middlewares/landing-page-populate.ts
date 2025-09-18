/**
 * `landing-page-populate` middleware
 */

import type { Core } from "@strapi/strapi";

const LandingPagePopulate = {
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

      "landing-page.why-choose-component": {
        populate: {
          heading: {
            populate: {
              Button: true,
            },
          },
          cards: {
            populate: {
              image: {
                fields: ["alternativeText", "url", "name"],
              },
            },
          },
        },
      },

      "landing-page.services": {
        populate: {
          heading: {
            populate: {
              Button: true,
            },
          },
          image: {
            fields: ["alternativeText", "url", "name"],
          },
          cards: {
            populate: {
              image: {
                fields: ["alternativeText", "url", "name"],
              },
            },
          },
          HireCard: {
            populate: {
              Button: true,
            },
          },
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
    strapi.log.info("In landing-page-populate middleware.");
    ctx.query.populate = LandingPagePopulate;
    await next();
  };
};
