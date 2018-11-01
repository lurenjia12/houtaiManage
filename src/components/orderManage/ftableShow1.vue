<template>
  <!--表格显示-->
  <table class="table">
    <thead>
    <tr>
      <th class="th_checkbox" style="width: 36px">
        <div class="th_inner th_one" >
          <input type="checkbox" />
        </div>
      </th>
      <th class="th_checkbox">
        <div class="th_inner">
          订单号
        </div>
      </th>
      <th class="th_checkbox">
        <div class="th_inner">
          产品ID
        </div>
      </th>
      <th class="th_checkbox">
        <div class="th_inner">
          订单价格
        </div>
      </th>
      <th class="th_checkbox">
        <div class="th_inner">
          真实价格
        </div>
      </th>
      <th class="th_checkbox">
        <div class="th_inner th_bg">
          外部订单
        </div>
      </th>
      <th class="th_checkbox">
        <div class="th_inner th_bg">
          自定义
        </div>
      </th>
      <th class="th_checkbox">
        <div class="th_inner">
          类型
        </div>
      </th>
      <th class="th_checkbox">
        <div class="th_inner">
          支付时间
        </div>
      </th>
      <th class="th_checkbox">
        <div class="th_inner">
          创建时间
        </div>
      </th>
      <th class="th_checkbox">
        <div class="th_inner">
          状态
        </div>
      </th>
      <th class="th_checkbox">
        <div class="th_inner">
          操作
        </div>
      </th>
      <th class="th_checkbox">
        <div class="th_inner">
          操作
        </div>
      </th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="item in  data" >
      <td class="th_checkbox" style="width: 36px">
        <div class="th_inner th_one" >
          <input type="checkbox" />
        </div>
      </td>
      <td class="th_checkbox">
        <div class="th_inner">
          {{item.orderNum}}
        </div>
      </td>
      <td class="th_checkbox">
        <div class="th_inner">
          {{item.id}}
        </div>
      </td>
      <td class="th_checkbox">
        <div class="th_inner">
          {{item.orderPrice}}
        </div>
      </td>
      <td class="th_checkbox">
        <div class="th_inner">
          {{item.realPrice}}
        </div>
      </td>
      <td class="th_checkbox">
        <div class="th_inner th_bg">
          {{item.outNum}}
        </div>
      </td>
      <td class="th_checkbox">
        <div class="th_inner th_bg">
          {{item.zdy}}
        </div>
      </td>
      <td class="th_checkbox">
        <div class="th_inner">
          {{item.leixing}}
        </div>
      </td>
      <td class="th_checkbox">
        <div class="th_inner">
          {{item.payTime}}
        </div>
      </td>
      <td class="th_checkbox">
        <div class="th_inner">
          {{item.createTime}}
        </div>
      </td>
      <td class="th_checkbox">
        <div class="th_inner fstatu" @click="click" :title="item.statu">
          <i class="iconfont icon-yuan"></i>
          {{item.statu}}
        </div>
      </td>
      <td class="th_checkbox">
        <div class="th_inner">
          <div class="operation1">
            我已收款
          </div>
        </div>
      </td>
      <td class="th_checkbox">
        <div class="th_inner">
          <i class="iconfont icon-edit"></i>
          <i class="iconfont icon-shanchu"></i>
        </div>
      </td>
    </tr>
    </tbody>

  </table>
</template>

<script>
  import data from '../../data/data'
    export default {
        name: "ftableShow",
      data(){
          return{
            data,
          }
      },
      methods:{
          click:function () {
            console.log('haha')
          }
      }

    }
  // console.log(data)
</script>

<style scoped>

</style>
