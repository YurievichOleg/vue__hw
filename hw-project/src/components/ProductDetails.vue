<template>
  <div>
    <div class="product">
      <h3 class="product__name">
        {{ name }}
      </h3>
      <p class="product__price">
        {{ formattedPrice }}
      </p>
      <p v-if="available" class="product__available">Available</p>
      <p v-else class="product__available">Out of stock</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductDetails",
  props: { name: String, price: Number, available: Boolean },

  data() {
    return {
      //   product: { name: "", price: 0, available: true },
    };
  },

  mounted() {},

  methods: {},
  computed: {
    formattedPrice() {
      return `$${this.price}`;
    },
  },
};
</script>

<style lang="css" scoped></style>
