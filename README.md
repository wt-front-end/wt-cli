# wt-cli

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

### wt -v 获取版本号

``` bash
# 版本号
wt -v
# OR
wt --version
```

### wt -h 查看帮助

``` bash
# 查看帮助
wt -h
# OR
wt --help
```



### wt b 打包资源

``` bash
# 打包资源
wt b
# OR
wt build

使用方法：
      wt b [npm的打包命令]
```
### wt v 启动项目
``` bash
# 打包资源
wt v
# OR
wt dev
使用方法：
      wt b [npm的启动命令]
```

### wt s 关键字搜索

``` bash
# 搜索问题,并在浏览器打开
wt s
# OR
wt serach
使用方法：
      wt s [搜索的关键字]

可选参数
     -b, --baidu   使用百度搜索
     -g, --google  使用谷歌搜索
     -s, --sougou  使用搜狗搜索
     -t, --github  使用github搜索
```

### wt ip 获取本机ip

``` bash
wt i
# OR
wt ip
使用方法：
      wt ip
```

### wt o 打开url
``` bash
# 会使用默认浏览器打开url
wt o
# OR
wt open
使用方法：
      wt o [url链接]
```
     
### wt s 启动服务
``` bash
# 会在当前目录启动一个http服务,并在浏览器打开
wt h
# OR
wt http
使用方法：
      wt h
可选参数
     -p, --port   指定端口,默认5282
     -o, --open   是否打开浏览器,默认不打开
     -u, --url    启动目录,默认当前目录
```


### wt t 翻译服务
``` bash
# 会在当前目录启动一个http服务,并在浏览器打开
wt t
# OR
wt translation
使用方法：
      wt t [需要翻译的单词或关键词]
```

### wt c 克隆项目
``` bash
# 当没有参数时会需要选择项目,后面有参数时效果和 git clone 一样
wt c
# OR
wt clone
使用方法：
      wt c [克隆项目地址]
```
