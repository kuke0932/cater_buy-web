<template>
  <div style="height:100%;">
    <view-box ref="viewBox">
      <x-header slot="header">采购列表
      </x-header>
      <div class="container">
        <search
          @result-click="resultClick"
          @on-change="getResult"
          :results="results"
          v-model="value"
          position="absolute"
          auto-scroll-to-top top="46px"
          placeholder="按编号查询"
          @on-focus="onFocus"
          @on-cancel="onCancel"
          @on-submit="onSubmit"
          ref="search"></search>
        <tab>
          <tab-item selected @on-item-click="tabOnItemClick">全部</tab-item>
          <tab-item @on-item-click="tabOnItemClick">待中心确认</tab-item>
          <tab-item @on-item-click="tabOnItemClick">待采购</tab-item>
          <tab-item @on-item-click="tabOnItemClick">待入库</tab-item>
        </tab>
        <div class="select_all">
          <x-button @click.native="checkAll" mini :type="isAllSel == true ? 'default' : 'default'">全选/取消</x-button>
        </div>
        <div class="infor_list">
          <div class="infor_item" v-for="(item, index) in listData" v-bind:key="index"
               v-if="status == 0 || status == item.type">
            <flexbox class="details">
              <flexbox-item :span="1" class="details_left">
                <label><input type="checkbox" class="item_checkbox" :checked="item.checked"></label>
              </flexbox-item>
              <flexbox-item class="details_right">
                <router-link :to="{path:'/stall/details', query: {type: toType}}">
                  <flexbox>
                    <flexbox-item>物料名称：{{item.materialName}}</flexbox-item>
                    <flexbox-item>规格型号：{{item.model}}</flexbox-item>
                  </flexbox>
                  <flexbox>
                    <flexbox-item>计量单位：{{item.unit}}</flexbox-item>
                    <flexbox-item class="count">状态：{{item.type == 1 ? "待中心确认" : item.type == 2 ? '待采购' : '待入库'}}</flexbox-item>
                  </flexbox>
                  <span>物料数量：{{item.counts}}</span>
                </router-link>
              </flexbox-item>
            </flexbox>
          </div>
        </div>
        <flexbox :gutter="0" class="btns">
          <flexbox-item :span="8"></flexbox-item>
          <flexbox-item>
            <button>审核</button>
          </flexbox-item>
          <flexbox-item>
            <router-link to="/stall/details">
              <button>修改</button>
            </router-link>
          </flexbox-item>
        </flexbox>
      </div>
    </view-box>
  </div>
</template>

<script>
  import {
    ViewBox,
    XHeader,
    Search,
    ButtonTab,
    ButtonTabItem,
    Tab,
    TabItem,
    Group,
    Flexbox,
    FlexboxItem,
    XButton
  } from 'vux'

  export default {
    components: {
      XHeader,
      ViewBox,
      Search,
      ButtonTab,
      ButtonTabItem,
      Tab,
      TabItem,
      Group,
      Flexbox,
      FlexboxItem,
      XButton
    },
    data () {
      return {
        toType: 1,
        pageIndex: 1,
        pageSize: 10,
        count: 1,
        allSel: '',
        isAllSel: false,
        results: [],
        value: '',
        selectAll: false,
        listData: [
          {
            type: '1',
            materialName: '大米',
            model: '25kg',
            unit: '袋',
            counts: '10'
          },
          {
            type: '2',
            materialName: '大米',
            model: '25kg',
            unit: '袋',
            counts: '10'
          },
          {
            type: '3',
            materialName: '大米',
            model: '25kg',
            unit: '袋',
            counts: '10'
          },
          {
            type: '1',
            materialName: '大米',
            model: '25kg',
            unit: '袋',
            counts: '10'
          },
          {
            type: '2',
            materialName: '大米',
            model: '25kg',
            unit: '袋',
            counts: '10'
          },
          {
            type: '1',
            materialName: '大米',
            model: '25kg',
            unit: '袋',
            counts: '10'
          },
          {
            type: '3',
            materialName: '大米',
            model: '25kg',
            unit: '袋',
            counts: '10'
          },
          {
            type: '2',
            materialName: '大米',
            model: '25kg',
            unit: '袋',
            counts: '10'
          }
        ],
        inputCount: 0,
        status: 0
      }
    },
    created () {
    },
    methods: {
      resultClick (item) {
        window.alert('you click the result item: ' + JSON.stringify(item))
      },
      getResult (val) {
        console.log('on-change', val)
        this.results = val ? getResult(this.value) : []
      },
      onSubmit () {
        this.$refs.search.setBlur()
        this.$vux.toast.show({
          type: 'text',
          position: 'top',
          text: 'on submit'
        })
      },
      onFocus () {
        console.log('on focus')
      },
      onCancel () {
        console.log('on cancel')
      },
      tabOnItemClick (index) {
        this.status = index
      },
      /* 全选按钮 */
      checkAll () {
        if (this.isAllSel === false) {
          for (let i = 0; i < this.listData.length; i++) {
            this.listData[i].checked = true
          }
          this.isAllSel = true
        } else {
          for (let i = 0; i < this.listData.length; i++) {
            this.listData[i].checked = false
          }
          this.isAllSel = false
        }
      }
    }
  }

  function getResult (val) {
    let rs = []
    for (let i = 0; i < 20; i++) {
      rs.push({
        title: `${val} result: ${i + 1} `,
        other: i
      })
    }
    return rs
  }
</script>

<style lang="less" scoped>
  .container {
    .select_all {
      padding: 10px;
      background-color: #fff;
      border-bottom: 1px solid #ccc;
    }
    .infor_list {
      .infor_item {
        border-bottom: 1px solid #ccc;
        padding-bottom: 5px;
        background-color: #fff;
        .details {
          padding: 10px 0 0 0;
          font-size: 14px;
          .details_left {
            padding-left: 10px;
            text-align: center;
            label {
              input {
                width: 18px;
                height: 18px;
              }
            }
          }
          .details_right {
            .count {
              .input_counts {
                border: 0;
                width: 20px;
                text-align: center;
                font-size: 1em;
              }
              img {
                width: 18px;
                vertical-align: middle;
              }
            }
          }
        }
      }
    }
    .btns {
      text-align: center;
      padding: 10px 0;
      button {
        font-size: 12px;
        padding: 5px 8px;
        border: 0;
        border-radius: 4px;
        box-sizing: border-box;
        background: #04BE02;
        color: #fff;
      }
    }
  }

</style>
