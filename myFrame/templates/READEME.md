# 框架代码编写规范

# 一、命名空间

### 1. 每个功能模块需要创建自己的目录

### 2. 文件内属性命名时需要带上命名空间，如

    src/test/a.js:
        
        var test_a_number = 1;

        function test_a_getNumber() {
            return test_a_number;
        }

        function test_a_setNumber(number) {
            test_a_number = number;
        }

# 二、模块依赖 import

    //下面注释用于依赖src/test/a.js文件
    //import test/a

# 三、公开接口

### 1. 公开接口必须写在src/bdpa.js内

### 2. 公开接口实例:
```
    src/bdpa.js
        
        //...
        //import test/a
        bdpa.setNumber = test_a_setNumber;
        //...
```

# 四、打包grunt
### 1. 安装命令 
> npm install
    
### 2. 打包命令 
> grunt

# 五、服务
启动服务 
  > npm start 或 grunt server

启动长服务(forever)
  > grunt start

重启长服务
  > grunt restart

停止服务
  > grunt stop

# 六、示例
[BDP日志统计SDK](http://git.haizhi.com/WEB/bdp-sdk-js)    
[长服务示例](http://xf.test.bdp.cn/demo/example1/index.html)


