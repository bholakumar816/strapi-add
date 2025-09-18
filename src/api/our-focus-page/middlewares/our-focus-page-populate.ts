/**
 * `our-focus-page-populate` middleware
 */

import type { Core } from "@strapi/strapi";

const OurFocusPopulate = {
  blocks: {
    on: {
      "our-focus.our-vision": {
        populate: {
          heading: {
            populate: {
              Button: true,
            },
          },
          image: {
            fields: ["alternativeText", "url", "name"],
          },
        },
      },

      "our-focus.our-steps": {
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

      "our-focus.our-mission": {
        populate: {
          heading: {
            populate: {
              Button: true,
            },
          },
          image1: {
            fields: ["alternativeText", "url", "name"],
          },
          image2: {
            fields: ["alternativeText", "url", "name"],
          },
          HireCard: {
            populate: {
              Button: true,
            },
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

      "our-focus.faq": {
        populate: {
          heading: {
            populate: {
              Button: true,
            },
          },
          image: {
            fields: ["alternativeText", "url", "name"],
          },
        },
      },
    },
  },
};

export default (config, { strapi }: { strapi: Core.Strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info("In our-focus-page-populate middleware.");
    ctx.query.populate = OurFocusPopulate;

    await next();
  };
};
