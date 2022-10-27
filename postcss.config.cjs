/*
 * @Author: Shber
 * @Date: 2022-10-27 16:32:32
 * @LastEditors: Shber
 * @LastEditTime: 2022-10-27 17:23:21
 * @Description: 
 */
module.exports = {
  "plugins": {
    autoprefixer: {
      overrideBrowserslist: [
        'Android 4.1',
        'iOS 7.1',
        'Chrome > 31',
        'ff > 31',
        'ie >= 8',
        'last 10 versions', // 所有主流浏览器最近10版本用
      ],
      grid: true,
    },
    "postcss-pxtorem": {
      rootValue: 37.5, // Vant 官方根字体大小是 37.5
      propList: ['*'],
      selectorBlackList: ['.norem'] // 过滤掉.norem-开头的class，不进行rem转换
    }
  }
}