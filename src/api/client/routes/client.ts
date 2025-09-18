/**
 * client router
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreRouter("api::client.client", {
  config: {
    find: {
      middlewares: ["api::client.client-populate"],
    },
  },
});
