"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_u_search2 = common_vendor.resolveComponent("u-search");
  const _easycom_u_swiper2 = common_vendor.resolveComponent("u-swiper");
  const _easycom_u_button2 = common_vendor.resolveComponent("u-button");
  const _easycom_u_icon2 = common_vendor.resolveComponent("u-icon");
  (_easycom_u_search2 + _easycom_u_swiper2 + _easycom_u_button2 + _easycom_u_icon2)();
}
const _easycom_u_search = () => "../../node-modules/vk-uview-ui/components/u-search/u-search.js";
const _easycom_u_swiper = () => "../../node-modules/vk-uview-ui/components/u-swiper/u-swiper.js";
const _easycom_u_button = () => "../../node-modules/vk-uview-ui/components/u-button/u-button.js";
const _easycom_u_icon = () => "../../node-modules/vk-uview-ui/components/u-icon/u-icon.js";
if (!Math) {
  (_easycom_u_search + _easycom_u_swiper + _easycom_u_button + _easycom_u_icon + Shop + TabBar)();
}
const TabBar = () => "../../components/TabBar/index.js";
const Shop = () => "../../components/base/Shop.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    let keyword = common_vendor.ref("");
    let categoryList = common_vendor.reactive([
      [
        {
          img: "level",
          val: "Level"
        },
        {
          img: "camera",
          val: "Camera"
        },
        {
          img: "warning",
          val: "Warning"
        }
      ],
      [
        {
          img: "scan",
          val: "Scan"
        },
        {
          img: "coupon",
          val: "Coupon"
        },
        {
          img: "server-fill",
          val: "Server"
        }
      ]
    ]);
    let list = [
      "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.616pic.com%2Fbg_w1180%2F00%2F15%2F86%2FJDhlT1e2Q8.jpg&refer=http%3A%2F%2Fpic.616pic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1670590051&t=975659e553245f673fc6b144bcea7864",
      "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.ntimg.cn%2Ffile%2F20200825%2F28843647_104610930000_2.jpg&refer=http%3A%2F%2Fpic.ntimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1670590088&t=40ff6d530e883a86d553dd008c92326b"
    ];
    let goodsInfo = [
      {
        userInfo: {
          avatar: "1",
          name: "acac"
        },
        price: "10.00",
        spec: "11years / 140-146cm",
        brand: "Nike",
        img: "https://sjbz-fd.zol-img.com.cn/t_s320x510c5/g7/M00/0E/0C/ChMkLGNYlXCIGqxBAATrGDS4pxkAAI6fwJridQABOsw769.jpg"
      },
      {
        userInfo: {
          avatar: "1",
          name: "acac"
        },
        price: "6.50",
        spec: "M",
        brand: "Nike",
        img: "https://sjbz-fd.zol-img.com.cn/t_s320x510c5/g7/M00/0E/0C/ChMkLGNYlXKIBLf-ADCxPf9m120AAI6fwPOG6UAMLFV881.jpg"
      },
      {
        userInfo: {
          avatar: "1",
          name: "acac"
        },
        price: "15.00",
        spec: "M",
        brand: "Nike",
        img: "https://imgsa.baidu.com/forum/w%3D580/sign=a7b4b43adf160924dc25a213e406359b/282e9b2f070828380e790f78b799a9014c08f133.jpg"
      },
      {
        userInfo: {
          avatar: "1",
          name: "acac"
        },
        price: "12.50",
        spec: "M",
        brand: "Nike",
        img: "https://imgsa.baidu.com/forum/w%3D580/sign=0365ba419acad1c8d0bbfc2f4f3e67c4/ab5e4efbfbedab643064e7aef836afc379311e1e.jpg"
      },
      {
        userInfo: {
          avatar: "1",
          name: "acac"
        },
        price: "11.60",
        spec: "M",
        brand: "Nike",
        img: "https://imgsa.baidu.com/forum/w%3D580/sign=51c8759536dbb6fd255be52e3924aba6/8850a48b87d6277f9e3df35627381f30e924fc06.jpg"
      }
    ];
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(($event) => common_vendor.isRef(keyword) ? keyword.value = $event : keyword = $event),
        b: common_vendor.p({
          placeholder: "Search",
          ["show-action"]: false,
          modelValue: common_vendor.unref(keyword)
        }),
        c: common_vendor.p({
          list: common_vendor.unref(list)
        }),
        d: common_vendor.p({
          type: "primary"
        }),
        e: common_vendor.f(common_vendor.unref(categoryList), (item, index, i0) => {
          return {
            a: common_vendor.f(item, (iitem, index2, i1) => {
              return {
                a: "2c5296db-3-" + i0 + "-" + i1,
                b: common_vendor.p({
                  color: "#017782",
                  name: iitem.img,
                  size: "40"
                }),
                c: common_vendor.t(iitem.val),
                d: index2
              };
            }),
            b: index
          };
        }),
        f: common_vendor.f(common_vendor.unref(goodsInfo), (item, k0, i0) => {
          return {
            a: "2c5296db-4-" + i0,
            b: common_vendor.p({
              shop: item
            }),
            c: item.img
          };
        })
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-2c5296db"], ["__file", "D:/Desktop/my-vue3-project/src/pages/home/index.vue"]]);
wx.createPage(MiniProgramPage);
