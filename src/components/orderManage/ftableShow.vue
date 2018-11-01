<template>
  <!--表格显示-->
  <div>
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
    <tr v-for="(item,index) of  data" >
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
        <div class="th_inner fstatu"  :title="item.statu">
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
          <i class="iconfont icon-edit" @click="fedit(index)"></i>
          <i class="iconfont icon-shanchu" @click="del(index)"></i>
        </div>
      </td>
    </tr>
    </tbody>

  </table>
  <div class="overlay"  v-show="isshow">
    <div class="con">
      <h2 class="title">新增 | 修改</h2>
      <div class="content">
        <table>
          <tr>
            <td>产品ID:</td>
            <td><input type="text" v-model="selectedlist.id"/></td>
          </tr>
          <tr>
            <td>二维码ID</td>
            <td><input type="text" v-model="selectedlist.QuickMark" ></td>
          </tr>
          <tr>
            <td>订单价格:</td>
            <td>
              <input type="number" v-model="selectedlist.orderPrice"/>
            </td>
          </tr>
          <tr>
            <td>真实价格:</td>
            <td>
              <input type="number" v-model="selectedlist.realPrice" />
            </td>
          </tr>
          <tr>
            <td>订单标题:</td>
            <td>
              <input type="text"  v-model="selectedlist.orderTitle" />
            </td>
          </tr>
          <tr>
            <td>类型:</td>
            <td>
              <input type="text"   v-model="selectedlist.leixing"/>
            </td>
          </tr>
          <tr>
            <td>支付时间:</td>
            <td>
              <input type="text"   v-model="selectedlist.payTime"/>
            </td>
          </tr>
          <tr>
            <td>状态:</td>
            <td>
              <input type="text"   v-model="selectedlist.statu"/>
            </td>
          </tr>
        </table>
        <p>
          <input type="button"  value="重置"/>
          <input type="button" value="保存" @click="fsave"/>
        </p>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
  import data from '../../data/data'
    export default {
        name: "ftableShow",
      data(){
          return{
            data,
            isshow:false,
            selected:-1,
            selectedlist: {},
            slist:[],
          }
      },
      created() {
        this.setSlist(this.data);
      },
      methods:{

        //删除对象
        del:function (index) {
            if(window.confirm("你确定要删除吗"))
          this.data.splice(index, 1)
        },
        //改变显示或隐藏
        changeHide:function() {
          this.isshow = !this.isshow;
        },
        // 点击保存按钮
        fsave:function(arr) {
          // if (this.selected > -1) {
          //   Vue.set(this.data, this.selected, arr);
          //   this.selected = -1;
          // } else {
          //   this.data.push(arr);
          // }
          // this.setSlist(this.data);
          this.changeHide();
        },
        // 增加数据
        add:function () {
          this.selectedlist = {
            id:"",
            QuickMark:'',
            orderPrice:"",
            realPrice:"",
            orderTitle:"",
            payTime:'',
            statu:'',
            leixing:"",
            orderNum:"",
            outNum:"",
            createTime:"",
            zdy:""
          };
          this.isshow = true;
        },
        // 修改数据
        fedit:function(index) {
          this.selected = index;
          this.selectedlist = this.data[index];
          this.changeHide();

        },
        // 获取需要渲染到页面中的数据
        setSlist:function(arr) {
          this.slist = JSON.parse(JSON.stringify(arr));
        },

      },
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
