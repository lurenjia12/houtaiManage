<template>
  <div class="overlay"  v-show="isshow">
    <div class="con">
      <h2 class="title">新增 | 修改</h2>
      <div class="content">
        <table>
          <tr>
            <td>产品ID:</td>
            <td><input type="text" /></td>
          </tr>
          <tr>
            <td>二维码ID</td>
            <td><input type="text" ></td>
          </tr>
          <tr>
            <td>订单价格:</td>
            <td>
              <input type="number" />
            </td>
          </tr>
          <tr>
            <td>真实价格:</td>
            <td>
              <input type="number" />
            </td>
          </tr>
          <tr>
            <td>订单标题:</td>
            <td>
              <input type="text"  value="篮球"/>
            </td>
          </tr>
          <tr>
            <td>类型:</td>
            <td>
              <input type="text"  value="篮球"/>
            </td>
          </tr>
          <tr>
            <td>支付时间:</td>
            <td>
              <input type="text"  value="篮球"/>
            </td>
          </tr>
          <tr>
            <td>状态:</td>
            <td>
              <input type="text"  value="篮球"/>
            </td>
          </tr>
        </table>
        <p>
          <input type="reset"  value="重置"/>
          <input type="button" value="保存"/>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "feditTable",
      data:{
          isshow:false,
      },
      methods:{
        changeHide() {
          this.isshow = !this.isshow;
        },
      },
      props:[]
    }
</script>

<style scoped>
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 6;
    background: rgba(0, 0, 0, 0.7);
  }
  .overlay td:first-child {
    width: 66px;
  }
  .overlay .con {
    position: absolute;
    width: 420px;
    min-height: 300px;
    background: #fff;
    left: 50%;
    top: 50%;
    -webkit-transform: translate3d(-50%, -50%, 0);
    transform: translate3d(-50%, -50%, 0);
    /*margin-top: -150px;*/
    padding: 20px;
  }
</style>
