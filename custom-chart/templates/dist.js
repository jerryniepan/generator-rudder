/* 最终写好的线上自定义图表脚本 */
// 基础配置区
var config = {
  libSrc: '',
};

// 常量定义区

// 变量定义区
var container = $('.chart-box');
var libSrc = 'xxx'

// css处理区

// 数据处理区
var getData = function() {
  var result = [];
  
  // your code

  return result;
};

// 基础方法定义区
var handle = function() {
  
}

// 启动方法定义区
var init = function() {
    config.libSrc.indexOf('http') > -1
      ? thirdPluginLoader({
        libSrc: config.libSrc,
        initFun: handle,
        libId: window.xxx
      }) 
      : handle();
  
};
// 启动区
init();