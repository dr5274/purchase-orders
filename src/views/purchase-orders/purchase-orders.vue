<script>
import { mapActions, mapGetters } from 'vuex';
import ListHeader from '@/components/list-header.vue';
import PurchaseOrderList from './purchase-order-list.vue';

export default {
  name: 'PurchaseOrders',
  data() {
    return {
      routePath: '/purchase-orders',
      title: 'Purchase Orders',
    };
  },
  components: {
    ListHeader,
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
    <ListHeader
      :title="title"
      @refresh="getPurchaseOrders"
      :routePath="routePath"
    ></ListHeader>
    <div class="columns is-multiline is-variable">
      <div class="column is-8" v-if="purchaseOrders">
        <PurchaseOrderList :purchaseOrders="purchaseOrders"></PurchaseOrderList>
      </div>
    </div>
  </div>
</template>
