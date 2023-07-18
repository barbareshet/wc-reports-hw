const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default

const api = new WooCommerceRestApi({
    url: process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL,
    consumerKey: process.env.WC_STORE_CK,
    consumerSecret: process.env.WC_STORE_CS,
    version: "wc/v3"
});

// console.log(api);
/**
 * Get Products.
 *
 * Endpoint /api/get-products or '/api/get-products?perPage=2'
 *
 * @param req
 * @param res
 * @return {Promise<void>}
 */
export default async function handler(req, res) {

    const responseData = {
        success: false,
        orders: []
    }

    const { perPage } = req?.query ?? {};

    try {
        const { data } = await api.get(
            'orders',
            {
                per_page: perPage || 50
            }
        );

        responseData.success = true;
        responseData.orders = data;

        res.json( responseData );

    } catch ( error ) {
        responseData.error = error.message;
        res.status( 500 ).json( responseData  );
    }
}