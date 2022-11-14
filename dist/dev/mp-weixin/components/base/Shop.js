"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_u_icon2 = common_vendor.resolveComponent("u-icon");
  _easycom_u_icon2();
}
const _easycom_u_icon = () => "../../node-modules/vk-uview-ui/components/u-icon/u-icon.js";
if (!Math) {
  _easycom_u_icon();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "Shop",
  props: {
    shop: { type: Object, required: true, default: () => {
      return {
        userInfo: {
          avatar: "",
          name: ""
        },
        price: "",
        spec: "",
        brand: "",
        img: ""
      };
    } }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_vendor.r("title", {
          userInfo: __props.shop.userInfo
        }),
        b: __props.shop.img,
        c: common_vendor.t(__props.shop.price),
        d: common_vendor.p({
          size: "32",
          color: "#a9a9a9",
          name: "info-circle"
        }),
        e: common_vendor.t(__props.shop.spec),
        f: common_vendor.t(__props.shop.brand)
      };
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-7fc60786"], ["__file", "D:/Desktop/my-vue3-project/src/components/base/Shop.vue"]]);
wx.createComponent(Component);
