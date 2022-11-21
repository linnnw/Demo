<template>
  <view>
    <view class="search">
      <u-search
        placeholder="Search"
        :show-action="false"
        v-model="keyword"
      ></u-search>
    </view>
    <!-- 轮播图 -->
    <u-swiper :list="list"></u-swiper>
    <view class="wardrobe">
      <view class="wardrobe-title"> Ready to declutter your wardrobe? </view>
      <u-button type="primary">Sell now</u-button>
      <view class="works">Learn how it works</view>
    </view>

    <!-- 分类 -->
    <view class="category-box">
      <view class="title">Shop by category</view>

      <swiper circular :indicator-dots="true" :autoplay="false">
        <swiper-item v-for="(item, index) in categoryList" :key="index">
          <view class="category">
            <view class="item" v-for="(iitem, index) in item" :key="index">
              <view class="circle-item">
                <view class="circle">
                  <u-icon color="#017782" :name="iitem.img" size="40"></u-icon>
                </view>
                <view class="text">{{ iitem.val }}</view>
              </view>
            </view>
          </view>
        </swiper-item>
      </swiper>
    </view>

    <view class="popular">
      <view class="items">
        <view>Popular items</view>
        <view>See all</view>
      </view>
      <view class="commodity-box">
        <view class="item" v-for="item in goodsInfo" :key="item.img">
          <Shop :shop="item"></Shop>
        </view>
      </view>
    </view>

    <view class="brand">
      <view class="title">Shop by brand</view>
      <view class="brand-box">
        <view class="brand-item" v-for="item in brandList">{{ item }}</view>
      </view>
    </view>

    <view class="Newfeed">
      <view class="title">Newfeed</view>
      <view class="Newfeed-box">
        <view class="item" v-for="item in goodsInfo" :key="item.img">
          <Shop :shop="item">
            <template #title="{ userInfo }">
              <view class="shop-title">
                <img class="shop-img" :src="userInfo.avatar" alt="" />
                <view class="shop-name">{{ userInfo.name }}</view>
              </view>
            </template>
          </Shop>
        </view>
      </view>
    </view>

    <tab-bar></tab-bar>
  </view>
</template>

<script setup lang="ts">
import TabBar from '@/components/TabBar/index.vue'
import Shop from '@/components/base/Shop.vue'
import { ref, reactive } from 'vue'
// import { onShow } from '@dcloudio/uni-app'

// onShow(() => {
//   uni.hideTabBar({
//     animation: false
//   })
// })
let keyword = ref('')
const categoryList = reactive([
  [
    {
      img: 'level',
      val: 'Level'
    },
    {
      img: 'camera',
      val: 'Camera'
    },
    {
      img: 'warning',
      val: 'Warning'
    }
  ],
  [
    {
      img: 'scan',
      val: 'Scan'
    },
    {
      img: 'coupon',
      val: 'Coupon'
    },
    {
      img: 'server-fill',
      val: 'Server'
    }
  ]
])
const brandList = reactive([
  'Maje',
  'Bershka',
  'Hollister',
  'Gemo',
  'Converse',
  'Desigual',
  'Reebos',
  'Etam',
  'Dior',
  'Catimini',
  'Comptoir des Cotonniers',
  'Burberry'
])
let list = [
  'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.616pic.com%2Fbg_w1180%2F00%2F15%2F86%2FJDhlT1e2Q8.jpg&refer=http%3A%2F%2Fpic.616pic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1670590051&t=975659e553245f673fc6b144bcea7864',
  'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.ntimg.cn%2Ffile%2F20200825%2F28843647_104610930000_2.jpg&refer=http%3A%2F%2Fpic.ntimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1670590088&t=40ff6d530e883a86d553dd008c92326b'
]

let goodsInfo = [
  {
    userInfo: {
      avatar:
        'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.616pic.com%2Fbg_w1180%2F00%2F15%2F86%2FJDhlT1e2Q8.jpg&refer=http%3A%2F%2Fpic.616pic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1670590051&t=975659e553245f673fc6b144bcea7864',
      name: 'acac'
    },
    price: '10.00',
    spec: '11years / 140-146cm',
    brand: 'Nike',
    img: 'https://sjbz-fd.zol-img.com.cn/t_s320x510c5/g7/M00/0E/0C/ChMkLGNYlXCIGqxBAATrGDS4pxkAAI6fwJridQABOsw769.jpg'
  },
  {
    userInfo: {
      avatar:
        'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.616pic.com%2Fbg_w1180%2F00%2F15%2F86%2FJDhlT1e2Q8.jpg&refer=http%3A%2F%2Fpic.616pic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1670590051&t=975659e553245f673fc6b144bcea7864',
      name: 'acac'
    },
    price: '6.50',
    spec: 'M',
    brand: 'Nike',
    img: 'https://sjbz-fd.zol-img.com.cn/t_s320x510c5/g7/M00/0E/0C/ChMkLGNYlXKIBLf-ADCxPf9m120AAI6fwPOG6UAMLFV881.jpg'
  },
  {
    userInfo: {
      avatar:
        'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.616pic.com%2Fbg_w1180%2F00%2F15%2F86%2FJDhlT1e2Q8.jpg&refer=http%3A%2F%2Fpic.616pic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1670590051&t=975659e553245f673fc6b144bcea7864',
      name: 'acac'
    },
    price: '15.00',
    spec: 'M',
    brand: 'Nike',
    img: 'https://imgsa.baidu.com/forum/w%3D580/sign=a7b4b43adf160924dc25a213e406359b/282e9b2f070828380e790f78b799a9014c08f133.jpg'
  },
  {
    userInfo: {
      avatar:
        'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.616pic.com%2Fbg_w1180%2F00%2F15%2F86%2FJDhlT1e2Q8.jpg&refer=http%3A%2F%2Fpic.616pic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1670590051&t=975659e553245f673fc6b144bcea7864',
      name: 'acac'
    },
    price: '12.50',
    spec: 'M',
    brand: 'Nike',
    img: 'https://imgsa.baidu.com/forum/w%3D580/sign=0365ba419acad1c8d0bbfc2f4f3e67c4/ab5e4efbfbedab643064e7aef836afc379311e1e.jpg'
  },
  {
    userInfo: {
      avatar:
        'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.616pic.com%2Fbg_w1180%2F00%2F15%2F86%2FJDhlT1e2Q8.jpg&refer=http%3A%2F%2Fpic.616pic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1670590051&t=975659e553245f673fc6b144bcea7864',
      name: 'acac'
    },
    price: '11.60',
    spec: 'M',
    brand: 'Nike',
    img: 'https://imgsa.baidu.com/forum/w%3D580/sign=51c8759536dbb6fd255be52e3924aba6/8850a48b87d6277f9e3df35627381f30e924fc06.jpg'
  }
]
</script>

<style lang="scss" scoped>
.search {
  background-color: #fff;
  padding: 20rpx;
  position: sticky;
  top: 0;
  z-index: 999;
}
.wardrobe {
  padding: 20rpx;
  .wardrobe-title {
    text-align: center;
    font-weight: 600;
    margin: 20rpx;
    font-size: 32rpx;
  }
  .works {
    text-align: center;
    margin: 20rpx;
    color: $u-type-primary;
  }
}
.title {
  font-weight: 600;
  font-size: 32rpx;
}
.category-box {
  padding: 20rpx;

  .category {
    display: flex;
    flex-wrap: wrap;
    .item {
      width: 33.33%;
      display: flex;
      justify-content: center;
      margin-top: 60rpx;
      .circle-item {
        .circle {
          display: flex;
          justify-content: center;
          width: 120rpx;
          height: 120rpx;
          border-radius: 50%;
          background-color: #ececec;
        }
        .text {
          font-weight: 600;
          margin-top: 20rpx;
          text-align: center;
        }
      }
    }
  }
}

.popular {
  .items {
    padding: 20rpx;
    display: flex;
    justify-content: space-between;
    view {
      &:first-child {
        font-size: 32rpx;
        font-weight: 700;
      }
      &:last-child {
        color: $u-type-primary;
      }
    }
  }
  .commodity-box {
    padding: 20rpx;
    overflow-x: scroll;
    white-space: nowrap;
    .item {
      width: 300rpx;
      margin-right: 20rpx;
      display: inline-block;
    }
  }
}

.brand {
  padding: 40rpx 20rpx;
  .brand-box {
    margin-top: 40rpx;
    display: flex;
    flex-wrap: wrap;
    .brand-item {
      padding: 15rpx;
      border: 2rpx solid #f4f4f4;
      margin-right: 15rpx;
      margin-bottom: 15rpx;
      font-weight: 600;
    }
  }
}

.Newfeed {
  padding: 20rpx;
  .Newfeed-box {
    display: flex;
    flex-wrap: wrap;
    margin-top: 60rpx;
    .item {
      width: 345rpx;
      margin-bottom: 30rpx;
      &:nth-child(2n - 1) {
        margin-right: 20rpx;
      }

      .shop-title {
        display: flex;
        padding: 10rpx;
        align-items: center;
        .shop-img {
          width: 40rpx;
          height: 40rpx;
          border-radius: 50%;
          margin-right: 15rpx;
        }
        .shop-name {
          color: #868686;
          font-size: 24rpx;
        }
      }
    }
  }
}
</style>
