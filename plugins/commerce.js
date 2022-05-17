import CommerceSDK from '@chec/commerce.js';
/*
https://commercejs.com/docs/sdk/getting-started/#installation NOTE:
... your Commerce instance like so: const commerce = new Commerce('{public_api_key}', true);
*/

// const client = new CommerceSDK(process.env.NUXT_ENV_CHEC_PUBLIC_API_KEY)
// // //commerce.products.list().then((product) => console.log(product));
// export default client

// ?
//import { inject } from 'vue'

// import CommerceSDK from "@chec/commerce.js";

const commerce = new CommerceSDK(process.env.NUXT_ENV_CHEC_PUBLIC_API_KEY);

 export default (_, inject) => {
   inject("commerce", commerce);
 };