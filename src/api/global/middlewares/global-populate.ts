/**
 * `global-populate` middleware
 */

import type { Core } from "@strapi/strapi";

const GlobalPopulate = {
  Banner: {
    populate: {
      image: {
        fields: ["alternativeText", "url", "name"],
      },
    },
  },

  Header: {
    populate: {
      MainLogo: {
        populate: {
          image: {
            fields: ["alternativeText", "url", "name"],
          },
        },
      },

      NavLink: true,
      Button: true,
    },
  },

  Footer: {
    populate: {
      MainLogo: {
        populate: {
          image: {
            fields: ["alternativeText", "url", "name"],
          },
        },
      },

      Column1: {
        populate: {
          links: true,
        },
      },

      Column2: {
        populate: {
          links: true,
        },
      },
    },
  },

  FormSection: {
    populate: {
      image: {
        fields: ["alternativeText", "url", "name"],
      },
    },
  },
};

export default (config, { strapi }: { strapi: Core.Strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info("In global-populate middleware.");
    ctx.query.populate = GlobalPopulate;
    await next();
  };
};
