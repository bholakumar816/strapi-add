import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::our-focus-page.our-focus-page",
  ({ strapi }) => ({
    async find(ctx) {
      // Get the default landing page data
      const { data, meta } = await super.find(ctx);

      // Fetch testimonials collection type
      let testimonials = await strapi.entityService.findMany(
        "api::testimonial.testimonial",
        {
          populate: {
            profile: {
              populate: {
                image: {
                  fields: ["alternativeText", "url", "name"],
                },
              },
            },
          },
        }
      );

      let faqs = await strapi.entityService.findMany("api::faq.faq");

      return {
        data: {
          ...data,
          testimonials,
          faqs
        },
        meta,
      };
    },
  })
);
