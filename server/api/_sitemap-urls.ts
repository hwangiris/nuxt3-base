export default defineEventHandler(async () => {
    const products = await Promise.all([
        {
            url: '/product/product-a',
            updatedAt: new Date(),
        },
        {
            url: '/product/product-b',
            updatedAt: new Date(),
        },
        {
            url: '/product/product-c',
            updatedAt: new Date(),
        },
    ]);
    return products.map((p) => {
        return {
            loc: p.url,
            lastmod: p.updatedAt,
        };
    });
});
