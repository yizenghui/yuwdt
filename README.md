## Yuwdt 快速实现简易答题小程序后台接口

> 3分钟快速部署

后台安装使用教程：

先配置好应用配置文件
conf.toml

里面每项都有说明，不用多说了。

app_id、app_secret 和app_port必填。

app_port为启动程序占用端口。

项目运行会生成 sqlite 数据库文件  Yuwdt.db

注意 Yuwdt.xlsx 为题目表，里面的格式必须参照原题目内容。

修改配置或更新题目库需要重新应用。

如何用户获取数据？请用数据库工具从  Yuwdt.db 里面读取。


其它静态数据需求请放在data文件夹里
路径地址： /data/demo.json
请求地址：/data/demo.json     本地测试： http://localhost:3346/data/demo.json