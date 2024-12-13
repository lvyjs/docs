---
sidebar_position: 4
---

# 常用应用

## MySQL

```sh
yum install epel-release -y
yum install https://rpms.remirepo.net/enterprise/remi-release-7.rpm -y
yum-config-manager --enable remi -y
```

### 安装

设置源

```sh
yum localinstall https://repo.mysql.com//mysql80-community-release-el7-1.noarch.rpm
```

设置源

```sh
rpm --import https://repo.mysql.com/RPM-GPG-KEY-mysql-2022
```

```sh
yum install mysql-community-server
```

启动服务

```sh
systemctl start mysqld # 启动

systemctl enable mysqld # 自启动

service mysqld status # 状态
```

查看版本

```sh
mysql -version
```

### 登录

查看临时密码

```sh
grep 'temporary password' /var/log/mysqld.log
```

登录

```sh
mysql -u root -p
```

先设置强密码

```sql
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'My002580!';
```

更改规格为弱密码

```sql
set global validate_password.policy=0;

set global validate_password.length=1;
```

### 远程连接

登录授权

```sql
update mysql.user set host='%' where user="root";

flush privileges;

select user,host from mysql.user;
```

用户授权

```sql
grant all privileges on *.* to 'root'@'%';

flush privileges;

show grants for root@'%'\G;
```

尝试创建数据库

```sql
CREATE DATABASE xiuxian;
```

显示所有数据库

```sql
SHOW DATABASES;
```

退出

```sql
exit;
```

### 防火墙

检查系统是否安装了FirewallD：

```sh
systemctl status firewalld
```

如果该服务未安装，则需要使用以下命令安装：

```sh
sudo yum install firewalld
```

启动FirewallD服务：

```sh
sudo systemctl start firewalld
```

如果FirewallD服务已经运行，则会显示服务正在运行的消息。

设置FirewallD服务在系统启动时自动启动：

```sh
sudo systemctl enable firewalld
```

查看防火墙

```sh
firewall-cmd --query-port=3306/tcp
```

开启防火墙

```sh
firewall-cmd --zone=public --add-port=3306/tcp --permanent
```

重载防火墙

```sh
firewall-cmd --reload
```

### 密钥不匹配

更新

```
sudo yum update mysql80-community-release
```

重新安装

```
sudo yum install mysql-community-server
```

### 日常指令

```sh
sudo systemctl stop mysqld
```

```sh
sudo systemctl start mysqld
```

### 免密码登录

```sh
vi /etc/my.cnf
```

```toml
[mysqld]
skip-grant-tables
```

清空密码

```sql
use mysql;
```

```sql
update user set authentication_string = '' where user = 'root';
```

设置密码

```sql
ALTER USER '用户名'@'IP地址' IDENTIFIED BY 'XJH002580!';
```

刷新权限

```sql
FLUSH PRIVILEGES;
```

## Redis

### 备份

```sh
redis-cli SAVE
```

### 删除

```sh
systemctl stop redis
yum remove redis -y
```

### 下载并编译

```sh
wget http://download.redis.io/releases/redis-6.2.13.tar.gz
```

redis-6.2.13

```sh
tar xzf redis-6.2.13.tar.gz
```

```sh
cd redis-6.2.13
```

```sh
make
make install
```

### 后台启动

```sh
redis-server --daemonize yes
```

## Nginx

### 环境

```sh
# 安装
yum install make zlib zlib-devel gcc-c++ libtool openssl openssl-devel -y
# 下载
cd /usr/local
wget "http://downloads.sourceforge.net/project/pcre/pcre/8.45/pcre-8.45.tar.gz"
# 解压
tar zxvf "pcre-8.45.tar.gz"
# 编译
cd "pcre-8.45"
./configure
make
make install
# 检查
cd /usr/local/pcre-8.45
pcre-config --version
```

### 安装

```sh
# 下载
cd /usr/local
wget  "http://nginx.org/download/nginx-1.24.0.tar.gz"
# 解压
tar zxvf "nginx-1.24.0.tar.gz"
# 编译
cd "nginx-1.24.0"
./configure --prefix=/usr/local/nginx --with-http_gzip_static_module --with-http_stub_status_module --with-http_ssl_module --with-http_v2_module "--with-pcre=/usr/local/pcre-8.45"
make
make install
# 检查
/usr/local/nginx/sbin/nginx -v
```

## Git

### 配置ssh

配置密钥

```sh
ssh-keygen -t rsa -C "xxx@xxx.com"
```

查看密钥

```sh
cd ~/.ssh
cat id_rsa.pub
```

配置账号

```sh
git config --global user.email "xxx@xxx.com"
git config --global user.name "xxx"
```

### 显示

查看当前分支大小

```sh
git count-objects -vH | grep -E "count|size"
```

查看当前分支所有大小信息

```sh
git count-objects -vH
```

### 删除

```sh
git rm --cached <flie-name>
```

### 删除记录

```sh
git log --oneline --decorate --graph main
```

```sh
git rebase --onto <last-commit-to-keep> main
```

```sh
git push --force origin main
```
