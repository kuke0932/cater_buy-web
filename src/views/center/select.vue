<template>
  <div style="height:100%;">
    <view-box ref="viewBox">
      <x-header slot="header">商品选择
      </x-header>
      <div class="container">
        <search
          @result-click="resultClick"
          @on-change="getResult"
          :results="results"
          v-model="value"
          position="absolute"
          auto-scroll-to-top top="46px"
          placeholder="按编号、名称、规格型号查询"
          @on-focus="onFocus"
          @on-cancel="onCancel"
          @on-submit="onSubmit"
          ref="search"
          style="position:fixed;z-index: 10"></search>
        <flexbox :gutter="0"  class="materials_details">
          <flexbox-item :span="4">
            <div class="left">
              <scroller lock-x height="-140"  @on-scroll="onScroll" ref="scrollerEvent">
                <div class="box1" width="40%">
                  <p @click="clickBoxItem" class="box1_item" v-for="(i, index) in 50">商品类别{{-i}}</p>
                </div>
              </scroller>
            </div>
          </flexbox-item>
          <flexbox-item>
            <div class="right" ref="rightDetails">
              <scroller lock-x height="-140"  @on-scroll="onScroll" ref="scrollerEvent">
                <div class="infor_list">
                  <div class="infor_item" v-for="(item,index) in foodsList" v-bind:key="index">
                    <span>{{item.fname}}</span><span>品牌：{{item.brand}}</span>
                    <p>计量单位：{{item.unit}}</p>
                    <div class="plusIcon" @click="clickFoodItem"><img src="../../assets/icons/plus02.svg" width="16" alt=""></div>
                  </div>
                </div>
              </scroller>
            </div>
          </flexbox-item>
        </flexbox>
      </div>
      <flexbox :gutter="0" class="btn_box" id="btn_box">
        <flexbox-item :span="5" class="box_left">
          <p>已选 {{count}} 种</p>
        </flexbox-item>
        <flexbox-item class="box_center">
          <p>上一步</p>
        </flexbox-item>
        <flexbox-item class="box_right">
          <p>确认</p>
        </flexbox-item>
      </flexbox>
    </view-box>
  </div>
</template>

<script>
  import { ViewBox, XHeader, Search, Flexbox, FlexboxItem, Scroller, XInput, XButton, TransferDom, Popup } from 'vux'
  import $ from 'jquery'
  export default {
    directives: {
      TransferDom
    },
    components: {
      XHeader,
      ViewBox,
      Search,
      Flexbox,
      FlexboxItem,
      Scroller,
      XInput,
      XButton,
      TransferDom,
      Popup
    },
    data () {
      return {
        results: [],
        value: '',
        count: 0,
        foodsList: [
          {
            fname: '猪肉',
            brand: '凯隆达',
            unit: '斤'
          },
          {
            fname: '猪油',
            brand: '',
            unit: '斤'
          },
          {
            fname: '猪头',
            brand: '凯隆达',
            unit: '斤'
          },
          {
            fname: '猪蹄',
            brand: '凯隆达',
            unit: '斤'
          },
          {
            fname: '猪肉',
            brand: '金锣',
            unit: '斤'
          },
          {
            fname: '猪肉',
            brand: '凯隆达',
            unit: '斤'
          },
          {
            fname: '猪油',
            brand: '',
            unit: '斤'
          },
          {
            fname: '猪头',
            brand: '凯隆达',
            unit: '斤'
          },
          {
            fname: '猪蹄',
            brand: '凯隆达',
            unit: '斤'
          },
          {
            fname: '猪肉',
            brand: '雨润',
            unit: '斤'
          }
        ]
      }
    },
    created () {
      let $pointDiv = $('<div id="pointDivs">').appendTo('body')
      for (let i = 0; i < 20; i++) {
        $('<div class="point-outer point-pre"><div class="point-inner">1</div></div>').appendTo($pointDiv)
      }
    },
    mounted () {
//      window.addEventListener('scroll', this.handleScroll)
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
      onScroll (pos) {
        this.scrollTop = pos.top
      },
      /* 点击商品分组 */
      clickBoxItem (e) {
        let items = e.path[1].childNodes
        for (let i = 0; i < items.length; i++) {
          items[i].style.fontWeight = 'normal'
          items[i].style.background = '0'
          items[i].style.color = ''
          items[i].style.borderLeft = '0'
        }
        e.path[0].style.fontWeight = 'bold'
        e.path[0].style.background = '#fff'
        e.path[0].style.color = '#3498db'
        e.path[0].style.borderLeft = '3px solid #3498db'
      },
      /* 点击加号 */
      clickFoodItem (e) {
        let that = this
        let endTop = window.innerHeight - 30
        let endLeft = 50
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        console.log(scrollTop)
        let left = e.clientX
        let top = e.clientY
        let outer = $('#pointDivs .point-pre').first().removeClass('point-pre').css({
          left: left - 10 + 'px',
          top: top + scrollTop - 10 + 'px'
        })
        let inner = outer.find('.point-inner')
        console.log(endTop, endLeft, left, top)
        console.log(outer, inner)
        setTimeout(function () {
          outer[0].style.webkitTransform = 'translate3d(0,' + (endTop - top) + 'px,0)'
          inner[0].style.webkitTransform = 'translate3d(' + (endLeft - left) + 'px,0,0)'
          setTimeout(function () {
            outer.removeAttr('style').addClass('point-pre')
            inner.removeAttr('style')
            that.count ++
          }, 500)
          // 这里的延迟值和小球的运动时间相关
        }, 1)
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
  .container{
    background: #fff;
    .materials_details{
      margin-top: 44px;
      .left{
        position: fixed;
        top: 90px;
        width: 32%;
        padding:10px 0;
        background-color: #F5F5F5;
        font-size: 14px;
        text-align: center;
        .box1{
          .box1_item{
            padding:10px;
          }
        }
      }
      .right{
        margin-top: 44px;
        width: 100%;
        float: left;
        padding: 10px 0;
        .infor_list{
          padding-bottom: 20px;
          .infor_item{
            padding:10px;
            margin-bottom: 20px;
            font-size: 14px;
            clear: both;
            span{
              margin-right: 20px;
            }
            .plusIcon{
              width:18px;
              height:18px;
              margin-right: 10px;
              border:2px solid #3498db;
              border-radius: 5px;
              float: right;
              text-align: center;
              img{
                margin-top: 1px;
              }
            }
          }
        }
      }
    }
  }
  .btn_box{
    position:fixed;
    bottom:0;
    width:100%;
    color: #fff;
    font-size: 14px;
    z-index: 100;
    text-align: center;
    font-weight: bold;
    .box_left{
      background: #999;
      padding: 10px;
    }
    .box_center{
      background-color: #FCFAF2;
      padding: 10px;
      p{
        color: #666;
      }
    }
    .box_right{
      background-color: #5BB75B;
      padding: 10px;
      text-align: center;
    }
  }
  @media screen and (max-width: 320px) {
    .bottom_details{
      font-size: 0.6rem;
    }
  }
</style>
