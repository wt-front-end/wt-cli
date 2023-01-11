# ht-cli

## 说明

- watone 命令行工具

## 安装

```bash
npm install @watone/wt-cli --global
# OR
yarn install @watone/wt-cli --global
# OR
pnpm install @watone/wt-cli --global
```

## 命令

### ht -v 获取版本号

``` bash
# 版本号
ht -v
# OR
ht --version
```

### ht -h 查看帮助

``` bash
# 查看帮助
ht -h
# OR
ht --help
```



### ht b 打包资源

``` bash
# 打包资源
ht b
# OR
ht build

使用方法：
      ht b [npm的打包命令]
```
### ht v 启动项目
``` bash
# 打包资源
ht v
# OR
ht dev
使用方法：
      ht b [npm的启动命令]
```

### ht s 关键字搜索

``` bash
# 搜索问题,并在浏览器打开
ht s
# OR
ht serach
使用方法：
      ht s [搜索的关键字]

可选参数
     -b, --baidu   使用百度搜索
     -g, --google  使用谷歌搜索
     -s, --sougou  使用搜狗搜索
     -t, --github  使用github搜索
```

### ht ip 获取本机ip

``` bash
ht i
# OR
ht ip
使用方法：
      ht ip
```

### ht o 打开url
``` bash
# 会使用默认浏览器打开url
ht o
# OR
ht open
使用方法：
      ht o [url链接]
```
     
### ht s 启动服务
``` bash
# 会在当前目录启动一个http服务,并在浏览器打开
ht h
# OR
ht http
使用方法：
      ht h
可选参数
     -p, --port   指定端口,默认5282
     -o, --open   是否打开浏览器,默认不打开
     -u, --url    启动目录,默认当前目录
```


### ht t 翻译服务
``` bash
# 会在当前目录启动一个http服务,并在浏览器打开
ht t
# OR
ht translation
使用方法：
      ht t [需要翻译的单词或关键词]
```

### ht c 克隆项目
``` bash
# 当没有参数时会需要选择项目,后面有参数时效果和 git clone 一样
ht c
# OR
ht clone
使用方法：
      ht c [克隆项目地址]
```
