# BDP脚手架工具 `generator-rudder`
用于一键构建BDP内部工程、模块(含controller/filter/fatory/direct等文件)、组件、页面、构建框架(frame)工程

## 使用
### 安装
使用脚手架工具，第一步是安装yo
> sudo npm install -g yo

然后，需要安装我们的generator，BDP使用generator-rudder
> sudo npm install -g generator-rudder

### 使用教程
#### 框架工程
我们除了日常需要开发业务外，偶尔需要开发一些基础框架供开发者使用，比如我们的埋点统计SDK、再比如开发一些可视化图等等，再有，我们需要做一个带服务的demo时，也想一键创建一个工程拿来调试，generator-rudder比较适合做这个事情，这样子来使用：
> yo rudder:myFrame

接着按照提示填写`工程名称`和相关`描述`，之后按`回车`工程就在当前目录下创建成功了，程序会自动帮您安装依赖，cd进入直接执行npm start 就可以启动服务进行开发使用了，具体框架的使用方法，见[myFrame-readme](https://github.com/jerryniepan/generator-rudder/blob/master/myFrame/templates/READEME.md)

#### 模块

#### page

#### 组件


