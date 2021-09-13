<script>
import { mapActions, mapGetters } from 'vuex';
import PurchaseOrderList from '../../components/purchase-order-list.vue';

export default {
  name: 'PurchaseOrders',
  data() {
    return {
      routePath: '/purchase-orders',
      title: 'Purchase Orders',
    };
  },
  components: {
    PurchaseOrderList,
  },
  created() {
    this.getPurchaseOrdersAction();
  },
  computed: {
    ...mapGetters('purchaseOrders', { purchaseOrders: 'purchaseOrders' }),
  },
  methods: {
    ...mapActions('purchaseOrders', ['getPurchaseOrdersAction']),
    getPurchaseOrders() {
      this.getPurchaseOrdersAction();
    },
  },
};
</script>

<template>
  <div class="content-container">
    <div class="columns is-multiline is-variable">
      <div class="column is-10" v-if="purchaseOrders">
        <PurchaseOrderList :purchaseOrders="purchaseOrders" />
      </div>
    </div>
  </div>
</template>
