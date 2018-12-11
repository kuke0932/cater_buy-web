<template>
  <div style="  height:100%;">
    <view-box ref="viewBox">
      <x-header slot="header">新增</x-header>
      <div class="container">
        <group class="bill_header">
          <cell title="采购组织：" :value="purchase"></cell>
          <popup-radio title="客户：" :options="client" v-model="clientCurrent">
            <p slot="popup-header" class="chose">请选择</p>
          </popup-radio>
          <datetime
            v-model="purchaseDate"
            title="采购时间："
            @on-cancel=""
            @on-confirm=""
            @on-hide=""></datetime>
          <!--<img src="../../assets/icons/date.svg" width="30" alt="" style="vertical-align: middle">-->
        </group>
        <div class="operate">
          <div class="select_all">
            <x-button @click.native="checkAll" mini :type="isAllSel == true ? 'default' : 'default'">全选/取消</x-button>
          </div>
          <div class="new_del">
            <flexbox>
              <flexbox-item class="new_del_item">
                <router-link to="/stall/select">
                  新增商品<img src="../../assets/icons/plus01.svg" alt="">
                </router-link>
              </flexbox-item>
              <flexbox-item class="new_del_item">删除商品<img src="../../assets/icons/minus01.svg" alt=""></flexbox-item>
            </flexbox>
          </div>
        </div>
        <div class="infor_list" >
          <div class="infor_item" v-for="(item, index) in listData" v-bind:key="index">
            <flexbox class="details" >
              <flexbox-item :span="1" class="details_left">
                <label><input type="checkbox" class="item_checkbox" :checked="item.checked"></label>
              </flexbox-item>
              <flexbox-item class="details_right">
                <flexbox>
                  <flexbox-item>物料名称：{{item.materialName}}</flexbox-item>
                  <flexbox-item>规格型号：{{item.model}}</flexbox-item>
                </flexbox>
                <flexbox>
                  <flexbox-item>计量单位：{{item.unit}}</flexbox-item>
                  <flexbox-item class="count">数量：
                    <img @click="minusCount(index)" src="../../assets/icons/minus.svg">
                    <input @change="checkCount" class="input_count" v-model="item.count">
                    <img @click="plusCount(index)" src="../../assets/icons/plus.svg"></flexbox-item>
                </flexbox>
                <span>金额：&yen{{item.money}}</span>
              </flexbox-item>
            </flexbox>
          </div>
        </div>
        <flexbox class="btn_box">
          <flexbox-item :span="4" @click.native="reset">
            <div class="reset" >重置</div>
          </flexbox-item>
          <flexbox-item>
            <div class="save">保存</div>
          </flexbox-item>
        </flexbox>
      </div>
    </view-box>
  </div>
</template>

<script>
  import { ViewBox, XHeader, Group, XInput, Cell, Flexbox, FlexboxItem, XButton, Swipeout, SwipeoutItem, SwipeoutButton, PopupRadio, Datetime } from 'vux'
  export default {
    components: {
      XHeader,
      ViewBox,
      Group,
      XInput,
      Cell,
      Flexbox,
      FlexboxItem,
      XButton,
      Swipeout,
      SwipeoutItem,
      SwipeoutButton,
      PopupRadio,
      Datetime
    },
    data () {
      return {
        purchase: '鹿泉一中',
        client: ['陈凤锦', '张三', '赵四'],
        clientCurrent: '陈凤锦',
        purchaseDate: '2018-03-18',
        isAllSel: false,
        listData: [
          {
            type: '1',
            materialName: '大米',
            model: '25kg',
            unit: '袋',
            count: '10',
            money: '1000.00'
          },
          {
            type: '2',
            materialName: '阳春面料',
            model: '25kg',
            unit: '袋',
            count: '5',
            money: '2000.00'
          },
          {
            type: '1',
            materialName: '大米',
            model: '25kg',
            unit: '袋',
            count: '10',
            money: '1000.00'
          },
          {
            type: '2',
            materialName: '阳春面料',
            model: '25kg',
            unit: '袋',
            count: '5',
            money: '2000.00'
          },
          {
            type: '1',
            materialName: '大米',
            model: '25kg',
            unit: '袋',
            count: '10',
            money: '1000.00'
          }
        ]
      }
    },
    created () {
    },
    methods: {
      plusCount: function (index) {
        let goods = this.listData[index]
        goods.count++
      },
      minusCount: function (index) {
        let goods = this.listData[index]
        goods.count--
        if (goods.count < 1) {
          goods.count = 0
        }
      },
      checkCount: function (e) {
        if (e.path[0].value <= 0) {
          e.path[0].value = 0
        }
      },
      onButtonClick (type) {
        alert('on button click ' + type)
      },
      reset () {
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
</script>

<style lang="less" scoped>
  .container{
    .bill_header{
      padding-bottom: 20px;
      border-bottom: 2px solid #ccc;
      background: #fff;
    }
    .operate{
      padding:10px;
      .select_all{
        display: inline-block;
      }
      .new_del{
        display: inline-block;
        float:right;
        .new_del_item{
          border:1px solid #ccc;
          border-radius: 8px;
          padding:2px 5px;
          font-size: 14px;
          background: #fff;
          img{
            width:16px;
            margin-left: 5px;
            margin-top: -2px;
            vertical-align: middle;
          }
        }

      }
    }
    .infor_list{
      .infor_item{
        border-bottom: 1px solid #ccc;
        background-color: #fff;
        .details{
          padding:10px 0;
          font-size: 14px;
          .details_left{
            padding-left: 20px;
            label {
              input {
                width: 18px;
                height: 18px;
              }
            }
          }
          .details_right{
            .count{
              .input_count {
                border: 0;
                width: 20px;
                text-align: center;
                font-size: 1em;
              }
              img{
                width:18px;
                vertical-align: middle;
              }

            }
          }
        }
      }
    }
  }
  .btn_box{
    margin: 40px 0 0 0;
    text-align: center;
    color: #fff;
    .reset{
      background: #999999;
      padding: 5px;
      margin: 0 0 0 30px;
      border-radius: 5px;
    }
    .save{
      background: #FDA128;
      padding: 5px;
      border-radius: 5px;
      margin: 0 30px 0 0;
    }
  }
  .chose{
    text-align: center;
    padding: 8px 0;

    border-bottom: 1px solid #eee;
  }
</style>
