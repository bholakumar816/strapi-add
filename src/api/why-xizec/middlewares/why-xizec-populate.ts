/**
 * `why-xizec-populate` middleware
 */

import type { Core } from "@strapi/strapi";

const WhyXizecPopulate = {
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

      "why-xizec.better-section": {
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

      "why-xizec.industory-component": {
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
    strapi.log.info("In why-xizec-populate middleware.");
    ctx.query.populate = WhyXizecPopulate;
    await next();
  };
};
