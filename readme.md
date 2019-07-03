# 准备
需要安装Node.js

#背景
V8引擎也是node引擎，是google开发的浏览器引擎,

#效率
网络查询返回速度比php快，sql执行返回速度也比php快

# 执行
编写js文件，通过命令 node 相关js文件 来执行，比如“  node HelloWorld.js  ”

#修改调试
修改文件不会奏效，需要重新执行，因为node.js会在第一次引入到某部分的时候丢到内存，从而以后都是从内存中读取而不会再次解析

supervisor 可以帮助你实现这个功能，它会监视你对代码的改动，并自动重启 Node.js。
使用方法很简单，首先使用 npm 安装 supervisor：
$ npm install -g supervisor
接下来，使用 supervisor 命令启动 app.js：
$ supervisor app.js