# watone-cli

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

### watone -v 获取版本号

``` bash
# 版本号
watone -v
# OR
watone --version
```

### watone -h 查看帮助

``` bash
# 查看帮助
watone -h
# OR
watone --help
```



### watone b 打包资源

``` bash
# 打包资源
watone b
# OR
watone build

使用方法：
      watone b [npm的打包命令]
```
### watone v 启动项目
``` bash
# 打包资源
watone v
# OR
watone dev
使用方法：
      watone b [npm的启动命令]
```

### watone s 关键字搜索

``` bash
# 搜索问题,并在浏览器打开
watone s
# OR
watone serach
使用方法：
      watone s [搜索的关键字]

可选参数
     -b, --baidu   使用百度搜索
     -g, --google  使用谷歌搜索
     -s, --sougou  使用搜狗搜索
     -t, --github  使用github搜索
```

### watone ip 获取本机ip

``` bash
watone i
# OR
watone ip
使用方法：
      watone ip
```

### watone o 打开url
``` bash
# 会使用默认浏览器打开url
watone o
# OR
watone open
使用方法：
      watone o [url链接]
```
### watone http 启动服务
``` bash
# 会在当前目录启动一个http服务,并在浏览器打开
http
# OR
watone h
# OR
watone http
使用方法：
      watone h
可选参数
     -p, --port   指定端口,默认5282
     -o, --open   是否打开浏览器,默认打开
     -u, --url    启动目录,默认当前目录
```


### watone t 翻译服务
``` bash
# 会在当前目录启动一个watonetp服务,并在浏览器打开
watone t
# OR
watone translation
使用方法：
      watone t [需要翻译的单词或关键词]
```

### watone c 克隆项目
``` bash
# 当没有参数时会需要选择项目,后面有参数时效果和 git clone 一样
watone c
# OR
watone clone
使用方法：
      watone c [克隆项目地址]
```
