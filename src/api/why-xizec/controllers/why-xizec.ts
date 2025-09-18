/**
 * why-xizec controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::why-xizec.why-xizec",
  ({ strapi }) => ({
    async find(ctx) {
      const { data, meta } = await super.find(ctx);

      let faqs = await strapi.entityService.findMany("api::faq.faq");

      return {
        data: {
          ...data,
          faqs,
        },
        meta,
      };
    },
  })
);
