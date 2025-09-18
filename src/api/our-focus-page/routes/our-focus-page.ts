/**
 * our-focus-page router
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreRouter('api::our-focus-page.our-focus-page',{
    config:{
        find:{
            middlewares:["api::our-focus-page.our-focus-page-populate"]
        }
    }
});
