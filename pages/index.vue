<template>
  <div>
    <!-- <pre>{{ JSON.stringify(merchant, null, 2) }}</pre> -->
    <h1>{{ merchant.business_name }}</h1>
    <h3>
      <n-link to="/categories">Categories</n-link>
    </h3>
    <!-- <pre>{{ JSON.stringify(categories, null, 2) }}</pre> -->
    <category-list :categories="categories"></category-list>
    <h3>
      <n-link to="/products">Products</n-link>
    </h3>
    <!-- <pre>{{ JSON.stringify(products, null, 2) }} </pre> -->
    <product-list :products="products"></product-list>
  </div>
</template>
<script>
  //import commerce from '~/common/commerce';
  // import ProductList from '~/components/ProductList.vue';
  // import CategoryList from '~/components/CategoryList.vue';
  export default {
  //components: { ProductList, CategoryList },
    async asyncData({$commerce}) {
      const merchant = await $commerce.merchants.about()
      const {data: categories} = await $commerce.categories.list()
      const {data: products} = await $commerce.products.list()
      return {
        merchant,
        categories,
        products,
      };
    },
  };
</script>