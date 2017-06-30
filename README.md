# 脚手架工具 `generator-rudder`
用于一键构建内部工程、模块(含controller/filter/fatory/direct等文件)、组件、页面、构建框架(frame)工程

## 使用
### 安装
使用脚手架工具，第一步安装yo
> sudo npm install -g yo

然后安装generator-rudder
> sudo npm install -g generator-rudder

### 使用
#### 框架工程
我们除了日常的业务开发，偶尔需要开发一些基础框架供开发者使用，比如我们的埋点统计SDK、再如开发一些可视化图等等，再有，个人需要做一个带服务的demo时，也有创建一个工程拿来调试的需求，generator-rudder比较适合做这个事情，这样使用：
> yo rudder:myFrame

接着按照提示填写`工程名称`和相关`描述`，之后按`回车`工程即在当前目录下创建成功，程序会自动安装所有依赖项，cd进入工程，执行npm start 就可以启动服务进行开发使用，具体框架的使用方法，见[myFrame-readme](https://github.com/jerryniepan/generator-rudder/blob/master/myFrame/templates/READEME.md)

`可以一键create类似bop-sdk这样的框架，或者搭个人服务站，之后实现：一键构建BDP内部工程、模块(含controller/filter/fatory/direct等文件)、组件、页面、构建框架(frame)工程`

#### 模块

#### page

#### 组件


