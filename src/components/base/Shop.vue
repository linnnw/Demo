<template>
  <view class="item">
    <!-- 用户信息插槽 -->
    <slot name="title" :userInfo="shop.userInfo"></slot>
    <img class="img" :src="shop.img" alt="" />
    <view class="info">
      <view>
        <text>￡{{ shop.price }}</text
        ><u-icon
          style="margin-left: 20rpx"
          size="32"
          color="#a9a9a9"
          name="info-circle"
        ></u-icon>
      </view>
      <view> {{ shop.spec }} </view>
      <view>{{ shop.brand }}</view>
    </view>
  </view>
</template>

<script setup lang="ts">
interface propsType {
  shop: {
    userInfo: {
      avatar: string
      name: string
    }
    price: string
    spec: string
    brand: string
    img: string
  }
}
const props = withDefaults(defineProps<propsType>(), {
  shop: () => {
    return {
      userInfo: {
        avatar: '',
        name: ''
      },
      price: '',
      spec: '',
      brand: '',
      img: ''
    }
  }
})
</script>

<style lang="scss" scoped>
.item {
  width: 100%;
  display: inline-block;
  .img {
    width: 100%;
    height: 500rpx;
  }
}
.info {
  padding: 10rpx;
  view {
    &:first-child {
      font-weight: 700;
    }
    &:nth-child(n + 2) {
      color: #a9a9a9;
      font-size: 24rpx;
    }
  }
}
</style>
