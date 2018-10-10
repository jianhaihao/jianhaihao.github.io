# 上传和下载文件

通常SSH软件支持的文件传输协议主要有`ASCII`、`Xmodem`、`Zmodem`等   
  
`rz`，`sz`是便是Linux/Unix同Windows进行ZModem文件传输的命令行工具  

**首先需要安装rz/sz命令，即 `lszrz` 包**

```bash
yum -y install lrzsz
```

## 上传文件

```bash
### 直接键入rz命令即可
# rz
 
### 直接拖动文件到 xshell， 或者 SecureCRT 窗口即可
```

## 下载文件

```bash
### 下载一个文件： 
# sz filename 
### 下载多个文件： 
# sz filename1 filename2
### 下载dir目录下的所有文件，不包含dir下的文件夹： 
# sz dir/*
```


