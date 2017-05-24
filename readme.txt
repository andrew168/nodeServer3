如何创建新项目
*   从菜单操作：  File | New Project | Node.js App
  在右侧的项目配置栏目中， 除了默认的值之外， 再填写如下栏目：
  Location： C:\labs\nodeServer3
  （注意版本选 4.14.1）

  点击“Create”，

  他会生成一个框架， 包括了服务器的简单内容。 入口文件是 bin\www

  (注意： bin\www是一个文件的名字， 下面还要用到。 webstorm的这个名字选的不好，太容易误解了！)

如何配置启动环境：
* 建立一个debug环境：
  从菜单操作：  Run | Debug Configuration | +  | Node.js
  在右侧的配置参数栏目中， 除了默认的值之外， 再填写如下栏目：
  Name： ServerDemo3
  javascript file：   bin\www

* 启动服务器
  方法1： 从菜单操作： Run | Run "ServerDemo3"
  方法2： 从菜单操作： Run | Run
        从弹出的选项中，选择 "ServerDemo3"

* 启动之后 ， 就可以使用他提供的url了。 在浏览器中， 打开：
  http://localhost:3000/users

就会看到： 输出的结果：

[{"name":"zhang san","age":18},{"name":"li si","age":19}]