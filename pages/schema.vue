<script setup>
// const { $formatter_timezone } = useNuxtApp();
// e.g.: $formatter_timezone('2022-01-01');

useSchemaOrg([
    // @todo Select Identity: https://unhead-schema-org.harlanzw.com//guide/guides/identity
    defineWebSite({
        name: '{{ 網站名稱 }}',
        url: 'http://example.com/',
        potentialAction: [
            defineSearchAction({
                target: '/search?q={search_term_string}'
            })
        ]
    }),
    defineOrganization({
        name: '{{ 組織名稱 }}',
        logo: '{{ 組織 Logo 圖片 }}',
        sameAs: [
            "{{ 社群網址 1 }}",
            "{{ 社群網址 2 }}",
            "{{ 社群網址 3 }}",
        ]
    }),
    defineLocalBusiness({
        name: '{{ 商家名稱 }}',
        image: '{{ 商家圖片 }}', // 可用 og:image (1200x630)
        address: {
            streetAddress: '{{ 詳細地址 }}',
            addressLocality: '{{ 縣轄市／區／州城市 }}',
            addressRegion: '{{ 縣／直轄市／州 }}',
            postalCode: '{{ 縣市碼／州碼 }}',
            addressCountry: '{{ 國家 }}'
        },
        openingHoursSpecification: [
            {
                dayOfWeek: '{{ 週〇 }}',
                opens: '{{ 營業時間起（24 小時制） }}',
                closes: '{{ 營業時間訖（24 小時制） }}',
            },
            {
                dayOfWeek: ['{{ 週〇 }}', '{{ 週〇 }}'],
                opens: '{{ 營業時間起（24 小時制） }}',
                closes: '{{ 營業時間訖（24 小時制） }}',
            },
        ]
    }),
    defineBreadcrumb({
        itemListElement: [
            { name: 'Home', item: '/' },
            { name: 'Blog', item: '/blog' },
            { name: 'My Article' },
        ],
    }),
    defineArticle({
        headline: '{{ 文章標題 }}',
        description: '{{ 文章說明 }}',
        image: '{{ 文章圖片 }}',
        url: '{{ 文章連結 }}',
        datePublished: '{{ 發布時間 }}',
        dateModified: '{{ 最後更新時間 }}',
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': '{{ 文章標題 }}'
        },
        isAccessibleForFree: true, // 是否為免費閱讀
        // attaching an author when the identity is an organization（當身份是組織時，請新增作者）
        author: {
            '@type': 'Person',
            name: '{{ 作者姓名 }}',
            url: '{{ 作者連結 }}',
        },
        publisher: {
            '@type': 'Organization',
            name: '{{ 組織名稱 }}',
            logo: {
                '@type': 'ImageObject',
                'url': '{{ Logo 連結 }}',
            },
        },
    }),
    defineProduct({
        name: '{{ 產品名稱 }}',
        description: '{{ 產品介紹 }}',
        image: '{{ 產品圖片 }}', // String, Array
        sku: '{{  }}',
        offers: {
            '@type': 'Offer', // Offer: 有定錨價格商品, AggregateOffer: 一般商品
            url: '{{ 商品連結 }}',
            availability: 'https://schema.org/InStock',
            price: '{{ 金額 }}', // Numeric
            priceCurrency: '{{ 幣值 }}',
            priceValidUntil: '{{ 有效價格期限 }}'
        },
        brand: {
            '@type': 'Brand',
            name: '{{ 品牌名稱 }}'
        }
    }),
    defineWebPage({
        '@type': 'FAQPage',
    }),
    defineQuestion({
        name: '{{ 問題 1 }}',
        acceptedAnswer: '{{ 答案 1 }}',
    }),
    defineQuestion({
        name: '{{ 問題 2 }}',
        acceptedAnswer: '{{ 答案 2 }}',
    }),
])
</script>

<template>
    <h1>Schema</h1>
    <SchemaOrgDebug />
</template>

<style lang="postcss" scoped>
</style>
