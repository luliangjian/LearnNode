    如果你有 PHP 开发经验，会习惯在修改 PHP 脚本后直接刷新浏览器以观察结果，而你
在开发 Node.js 实现的 HTTP 应用时会发现，无论你修改了代码的哪一部份，都必须终止
Node.js 再重新运行才会奏效。这是因为 Node.js 只有在第一次引用到某部份时才会去解析脚
本文件，以后都会直接访问内存，避免重复载入，而 PHP 则总是重新读取并解析脚本（如
果没有专门的优化配置）。Node.js的这种设计虽然有利于提高性能，却不利于开发调试，因
为我们在开发过程中总是希望修改后立即看到效果，而不是每次都要终止进程并重启。
supervisor 可以帮助你实现这个功能，它会监视你对代码的改动，并自动重启 Node.js。
使用方法很简单，首先使用 npm 安装 supervisor：
    $ npm install -g supervisor
    
    
    如果你使用的是 Linux 或 Mac，直接键入上面的命令很可能会有权限错误。原因是 npm
需要把 supervisor 安装到系统目录，需要管理员授权，可以使用  sudo npm install -g
supervisor 命令来安装。
接下来，使用 supervisor 命令启动 app.js：
    $ supervisor app.js