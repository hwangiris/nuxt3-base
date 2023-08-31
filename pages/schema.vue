<script setup>
useSchemaOrg([
  // @todo Select Identity: https://unhead-schema-org.harlanzw.com//guide/guides/identity
    defineWebSite({
        name: 'Schema Page',
    }),
    defineOrganization({
        name: 'DigiSalad Limited',
        logo: 'https://tw.digisalad.cool/images/logo-line.png',
        sameAs: [
            "https://www.facebook.com/digisalad.cool/",
            "https://www.instagram.com/digisalad/",
            "https://www.linkedin.com/company/digisalad-limited/"
        ]
    }),
    defineLocalBusiness({
        name: 'DigiSalad Limited',
        address: {
            streetAddress: "148 W 51st St Suit 42 Unit 7",
            addressLocality: "New York",
            addressRegion: "NY",
            postalCode: "10019",
            addressCountry: "US"
        },
        image: 'https://tw.digisalad.cool/images/logo-line.png',
    }),
    defineProduct({
        name: 'test',
        image: '/product.png',
        offers: [
            {
                price: 50
            },
        ],
        aggregateRating: {
            ratingValue: 88,
            bestRating: 100,
            ratingCount: 20,
        },
        review: [
            {
                name: 'Awesome product!',
                author: {
                    name: 'Harlan Wilton',
                },
                reviewRating: {
                    ratingValue: 5,
                },
            },
        ],
    })
])
</script>

<template>
    <h1>Schema</h1>
    <SchemaOrgDebug />
</template>

<style lang="postcss" scoped>
</style>
