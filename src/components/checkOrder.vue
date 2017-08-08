<template>
  <div class="checkOrder">
    <this-dialog :isShow="isShowCheckDialog"
    @on-close="checkStatus">
      请检查你的支付状态{{orderId}}
      <div class="button" @click="checkStatus">
        支付成功
      </div>
      <div class="button" @click="checkStatus">
        支付失败
      </div>
    </this-dialog>
    <this-dialog :isShow="isShowSuccessDialog" @on-close="toOrderList">
    支付成功！
    </this-dialog>
    <this-dialog :isShow="isShowFailDialog" @on-close="toOrderList">
    支付失败！
    </this-dialog>
  </div>
</template>

<script>
import Dialog from '@/components/base/dialog';
export default {
  components: {
    'this-dialog': Dialog
  },
  props: {
    isShowCheckDialog: {
      type: Boolean,
      default: false
    },
    orderId: {
      type: [String, Number],
      default: 9999
    }
  },
  data () {
    return {
      // isShowCheckDialog: false,
      isShowSuccessDialog: false,
      isShowFailDialog: false
    };
  },
  methods: {
    checkStatus(data) {
      // this.isShowCheckDialog = false;
      this.$http.get('/api/checkOrder')
      .then((res) => {
        this.isShowSuccessDialog = true;
        this.$emit('on-close-check-dialog');
      }, (err) => {
        console.log(err);
        this.isShowFailDialog = true;
        this.$emit('on-close-check-dialog');
      });
    },
    toOrderList() {
      this.$router.push({path: '/detail/analysis'});
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/less" lang="less">
.checkOrder{
  .button{
        width: 58px;
    background: #4fc08d;
    padding: 6px 8px;
    color: #fff;
    cursor: pointer;
  }
}
</style>
