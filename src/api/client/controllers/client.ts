import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::client.client",
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

      return {
        data: {
          ...data,
          testimonials,
        },
        meta,
      };
    },
  })
);
