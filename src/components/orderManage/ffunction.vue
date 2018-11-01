<template>
  <div class="ftableListsHeader">
    <div class="ftableListsHeaderLeft">
      <a href="" class=" HL frefresh">
        <i class="iconfont icon-f14" title="刷新"></i>
      </a>
      <span class="HL fedit">
              <i class="iconfont icon-edit"></i>
              编辑
          </span>
      <span class="HL fdelete">
              <i class="iconfont icon-shanchu"></i>
              删除
          </span>
    </div>
    <div class="ftableListsHeaderRight">
      <input type="text" placeholder="搜索" class="frsearch">
      <div class="tableListsChoise">
        <i class="iconfont icon-qiehuan" title="切换"></i>
        <!--
      <i class="iconfont icon-jiugongge" title="列"><span></span></i> -->

        <div class="TableCheckBox" @click.stop="fshowAndHide">
          <i class="iconfont icon-jiugongge" title="列"><span></span></i>
          <ul class="checkLists" v-show="isshow">
            <li><input type="checkbox" />订单号</li>
            <li><input type="checkbox" />产品ID</li>
            <li><input type="checkbox" />二维码ID</li>
            <li><input type="checkbox" />订单价格</li>
            <li><input type="checkbox" />真实价格</li>
            <li><input type="checkbox" />订单标题</li>
            <li><input type="checkbox" />外部订单</li>
            <li><input type="checkbox" />自定义</li>
            <li><input type="checkbox" />类型</li>
            <li><input type="checkbox" />真实价格</li>
            <li><input type="checkbox" />订单标题</li>
            <li><input type="checkbox" />外部订单</li>
            <li><input type="checkbox" />自定义</li>
            <li><input type="checkbox" />类型</li>
            <li><input type="checkbox" />真实价格</li>
            <li><input type="checkbox" />订单标题</li>
            <li><input type="checkbox" />外部订单</li>
            <li><input type="checkbox" />自定义</li>
            <li><input type="checkbox" />类型</li>
          </ul>
        </div>
        <div class="FoutTuBiao" @click.stop="fshowAndHide">
          <i class="iconfont icon-daochu" title="导出数据"><span></span></i>
          <ul class="foutLists" v-show="isshow">
            <li>JSON</li>
            <li>XML</li>
            <li>CSV</li>
            <li>TXT</li>
            <li>MS-Word</li>
            <li>MS-Excel</li>
          </ul>
        </div>
      </div>
      <button>
        <i class="iconfont icon-sousuo" title="普通搜索"></i>
      </button>
    </div>
  </div>
</template>

<script>
    export default {
        name: "ffunction",
      data(){
          return{
            isshow:false,

          }
      },
      methods:{
          //显示隐藏
        fshowAndHide(){
          this.isshow=!this.isshow
        }
      }
    }
</script>

<style scoped>

</style>
