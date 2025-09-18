/**
 * why-xizec router
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreRouter('api::why-xizec.why-xizec',{
    config:{
        find:{
            middlewares:["api::why-xizec.why-xizec-populate"]
        }
    }
});
