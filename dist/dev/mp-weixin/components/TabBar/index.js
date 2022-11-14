"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_u_tabbar2 = common_vendor.resolveComponent("u-tabbar");
  _easycom_u_tabbar2();
}
const _easycom_u_tabbar = () => "../../node-modules/vk-uview-ui/components/u-tabbar/u-tabbar.js";
if (!Math) {
  _easycom_u_tabbar();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const Store = common_vendor.useStore();
    const list = [
      {
        iconPath: "home",
        selectedIconPath: "home-fill",
        text: "home",
        url: "/pages/home/index",
        customIcon: false
      },
      {
        iconPath: "account",
        selectedIconPath: "account-fill",
        text: "my",
        isDot: false,
        url: "/pages/user/index",
        customIcon: false
      },
      {
        iconPath: "https://cdn.uviewui.com/uview/common/min_button.png",
        selectedIconPath: "https://cdn.uviewui.com/uview/common/min_button_select.png",
        text: "\u53D1\u5E03",
        midButton: true,
        customIcon: false
      },
      {
        iconPath: "play-right",
        selectedIconPath: "play-right-fill",
        text: "\u76F4\u64AD",
        customIcon: false
      },
      {
        iconPath: "account",
        selectedIconPath: "account-fill",
        text: "\u6211\u7684",
        count: 23,
        isDot: false,
        customIcon: false
      }
    ];
    const changeTabbar = (index) => {
      if (index !== Store.state.current) {
        common_vendor.index.switchTab({ url: list[index].url });
        Store.state.current = index;
      }
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(changeTabbar),
        b: common_vendor.o(($event) => common_vendor.unref(Store).state.current = $event),
        c: common_vendor.p({
          ["mid-button"]: true,
          list,
          modelValue: common_vendor.unref(Store).state.current
        })
      };
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Desktop/my-vue3-project/src/components/TabBar/index.vue"]]);
wx.createComponent(Component);
