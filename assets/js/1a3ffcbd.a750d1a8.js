"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[733],{5645:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>o,frontMatter:()=>c,metadata:()=>a,toc:()=>h});var l=s(4848),r=s(8453);const c={sidebar_position:4},i="\u5e38\u7528\u5e94\u7528",a={id:"x-other/db",title:"\u5e38\u7528\u5e94\u7528",description:"MySQL",source:"@site/docs/x-other/5-db.md",sourceDirName:"x-other",slug:"/x-other/db",permalink:"/docs/x-other/db",draft:!1,unlisted:!1,editUrl:"https://github.com/lvyjs/docs/blob/main/docs/x-other/5-db.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"\u7ef4\u62a4\u9700\u77e5",permalink:"/docs/x-other/notes-for-developers"}},d={},h=[{value:"MySQL",id:"mysql",level:2},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:3},{value:"\u767b\u5f55",id:"\u767b\u5f55",level:3},{value:"\u8fdc\u7a0b\u8fde\u63a5",id:"\u8fdc\u7a0b\u8fde\u63a5",level:3},{value:"\u9632\u706b\u5899",id:"\u9632\u706b\u5899",level:3},{value:"\u5bc6\u94a5\u4e0d\u5339\u914d",id:"\u5bc6\u94a5\u4e0d\u5339\u914d",level:3},{value:"\u65e5\u5e38\u6307\u4ee4",id:"\u65e5\u5e38\u6307\u4ee4",level:3},{value:"\u514d\u5bc6\u7801\u767b\u5f55",id:"\u514d\u5bc6\u7801\u767b\u5f55",level:3},{value:"Redis",id:"redis",level:2},{value:"\u5907\u4efd",id:"\u5907\u4efd",level:3},{value:"\u5220\u9664",id:"\u5220\u9664",level:3},{value:"\u4e0b\u8f7d\u5e76\u7f16\u8bd1",id:"\u4e0b\u8f7d\u5e76\u7f16\u8bd1",level:3},{value:"\u540e\u53f0\u542f\u52a8",id:"\u540e\u53f0\u542f\u52a8",level:3},{value:"Nginx",id:"nginx",level:2},{value:"\u73af\u5883",id:"\u73af\u5883",level:3},{value:"\u5b89\u88c5",id:"\u5b89\u88c5-1",level:3},{value:"Git",id:"git",level:2},{value:"\u914d\u7f6essh",id:"\u914d\u7f6essh",level:3},{value:"\u663e\u793a",id:"\u663e\u793a",level:3},{value:"\u5220\u9664",id:"\u5220\u9664-1",level:3},{value:"\u5220\u9664\u8bb0\u5f55",id:"\u5220\u9664\u8bb0\u5f55",level:3}];function t(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"\u5e38\u7528\u5e94\u7528",children:"\u5e38\u7528\u5e94\u7528"})}),"\n",(0,l.jsx)(n.h2,{id:"mysql",children:"MySQL"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sh",children:"yum install epel-release -y\nyum install https://rpms.remirepo.net/enterprise/remi-release-7.rpm -y\nyum-config-manager --enable remi -y\n"})}),"\n",(0,l.jsx)(n.h3,{id:"\u5b89\u88c5",children:"\u5b89\u88c5"}),"\n",(0,l.jsx)(n.p,{children:"\u8bbe\u7f6e\u6e90"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sh",children:"yum localinstall https://repo.mysql.com//mysql80-community-release-el7-1.noarch.rpm\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u8bbe\u7f6e\u6e90"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sh",children:"rpm --import https://repo.mysql.com/RPM-GPG-KEY-mysql-2022\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sh",children:"yum install mysql-community-server\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u542f\u52a8\u670d\u52a1"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sh",children:"systemctl start mysqld # \u542f\u52a8\n\nsystemctl enable mysqld # \u81ea\u542f\u52a8\n\nservice mysqld status # \u72b6\u6001\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u67e5\u770b\u7248\u672c"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sh",children:"mysql -version\n"})}),"\n",(0,l.jsx)(n.h3,{id:"\u767b\u5f55",children:"\u767b\u5f55"}),"\n",(0,l.jsx)(n.p,{children:"\u67e5\u770b\u4e34\u65f6\u5bc6\u7801"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sh",children:"grep 'temporary password' /var/log/mysqld.log\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u767b\u5f55"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sh",children:"mysql -u root -p\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u5148\u8bbe\u7f6e\u5f3a\u5bc6\u7801"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'My002580!';\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u66f4\u6539\u89c4\u683c\u4e3a\u5f31\u5bc6\u7801"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"set global validate_password.policy=0;\n\nset global validate_password.length=1;\n"})}),"\n",(0,l.jsx)(n.h3,{id:"\u8fdc\u7a0b\u8fde\u63a5",children:"\u8fdc\u7a0b\u8fde\u63a5"}),"\n",(0,l.jsx)(n.p,{children:"\u767b\u5f55\u6388\u6743"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"update mysql.user set host='%' where user=\"root\";\n\nflush privileges;\n\nselect user,host from mysql.user;\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u7528\u6237\u6388\u6743"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"grant all privileges on *.* to 'root'@'%';\n\nflush privileges;\n\nshow grants for root@'%'\\G;\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u5c1d\u8bd5\u521b\u5efa\u6570\u636e\u5e93"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"CREATE DATABASE xiuxian;\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u663e\u793a\u6240\u6709\u6570\u636e\u5e93"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"SHOW DATABASES;\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u9000\u51fa"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"exit;\n"})}),"\n",(0,l.jsx)(n.h3,{id:"\u9632\u706b\u5899",children:"\u9632\u706b\u5899"}),"\n",(0,l.jsx)(n.p,{children:"\u68c0\u67e5\u7cfb\u7edf\u662f\u5426\u5b89\u88c5\u4e86FirewallD\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sh",children:"systemctl status firewalld\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u5982\u679c\u8be5\u670d\u52a1\u672a\u5b89\u88c5\uff0c\u5219\u9700\u8981\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u5b89\u88c5\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sh",children:"sudo yum install firewalld\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u542f\u52a8FirewallD\u670d\u52a1\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sh",children:"sudo systemctl start firewalld\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u5982\u679cFirewallD\u670d\u52a1\u5df2\u7ecf\u8fd0\u884c\uff0c\u5219\u4f1a\u663e\u793a\u670d\u52a1\u6b63\u5728\u8fd0\u884c\u7684\u6d88\u606f\u3002"}),"\n",(0,l.jsx)(n.p,{children:"\u8bbe\u7f6eFirewallD\u670d\u52a1\u5728\u7cfb\u7edf\u542f\u52a8\u65f6\u81ea\u52a8\u542f\u52a8\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sh",children:"sudo systemctl enable firewalld\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u67e5\u770b\u9632\u706b\u5899"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sh",children:"firewall-cmd --query-port=3306/tcp\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u5f00\u542f\u9632\u706b\u5899"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sh",children:"firewall-cmd --zone=public --add-port=3306/tcp --permanent\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u91cd\u8f7d\u9632\u706b\u5899"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sh",children:"firewall-cmd --reload\n"})}),"\n",(0,l.jsx)(n.h3,{id:"\u5bc6\u94a5\u4e0d\u5339\u914d",children:"\u5bc6\u94a5\u4e0d\u5339\u914d"}),"\n",(0,l.jsx)(n.p,{children:"\u66f4\u65b0"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"sudo yum update mysql80-community-release\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u91cd\u65b0\u5b89\u88c5"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"sudo yum install mysql-community-server\n"})}),"\n",(0,l.jsx)(n.h3,{id:"\u65e5\u5e38\u6307\u4ee4",children:"\u65e5\u5e38\u6307\u4ee4"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sh",children:"sudo systemctl stop mysqld\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sh",children:"sudo systemctl start mysqld\n"})}),"\n",(0,l.jsx)(n.h3,{id:"\u514d\u5bc6\u7801\u767b\u5f55",children:"\u514d\u5bc6\u7801\u767b\u5f55"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sh",children:"vi /etc/my.cnf\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-toml",children:"[mysqld]\nskip-grant-tables\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u6e05\u7a7a\u5bc6\u7801"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"use mysql;\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"update user set authentication_string = '' where user = 'root';\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u8bbe\u7f6e\u5bc6\u7801"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"ALTER USER '\u7528\u6237\u540d'@'IP\u5730\u5740' IDENTIFIED BY 'XJH002580!';\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u5237\u65b0\u6743\u9650"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"FLUSH PRIVILEGES;\n"})}),"\n",(0,l.jsx)(n.h2,{id:"redis",children:"Redis"}),"\n",(0,l.jsx)(n.h3,{id:"\u5907\u4efd",children:"\u5907\u4efd"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sh",children:"redis-cli SAVE\n"})}),"\n",(0,l.jsx)(n.h3,{id:"\u5220\u9664",children:"\u5220\u9664"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sh",children:"systemctl stop redis\nyum remove redis -y\n"})}),"\n",(0,l.jsx)(n.h3,{id:"\u4e0b\u8f7d\u5e76\u7f16\u8bd1",children:"\u4e0b\u8f7d\u5e76\u7f16\u8bd1"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sh",children:"wget http://download.redis.io/releases/redis-6.2.13.tar.gz\n"})}),"\n",(0,l.jsx)(n.p,{children:"redis-6.2.13"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sh",children:"tar xzf redis-6.2.13.tar.gz\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sh",children:"cd redis-6.2.13\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sh",children:"make\nmake install\n"})}),"\n",(0,l.jsx)(n.h3,{id:"\u540e\u53f0\u542f\u52a8",children:"\u540e\u53f0\u542f\u52a8"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sh",children:"redis-server --daemonize yes\n"})}),"\n",(0,l.jsx)(n.h2,{id:"nginx",children:"Nginx"}),"\n",(0,l.jsx)(n.h3,{id:"\u73af\u5883",children:"\u73af\u5883"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sh",children:'# \u5b89\u88c5\nyum install make zlib zlib-devel gcc-c++ libtool openssl openssl-devel -y\n# \u4e0b\u8f7d\ncd /usr/local\nwget "http://downloads.sourceforge.net/project/pcre/pcre/8.45/pcre-8.45.tar.gz"\n# \u89e3\u538b\ntar zxvf "pcre-8.45.tar.gz"\n# \u7f16\u8bd1\ncd "pcre-8.45"\n./configure\nmake\nmake install\n# \u68c0\u67e5\ncd /usr/local/pcre-8.45\npcre-config --version\n'})}),"\n",(0,l.jsx)(n.h3,{id:"\u5b89\u88c5-1",children:"\u5b89\u88c5"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sh",children:'# \u4e0b\u8f7d\ncd /usr/local\nwget  "http://nginx.org/download/nginx-1.24.0.tar.gz"\n# \u89e3\u538b\ntar zxvf "nginx-1.24.0.tar.gz"\n# \u7f16\u8bd1\ncd "nginx-1.24.0"\n./configure --prefix=/usr/local/nginx --with-http_gzip_static_module --with-http_stub_status_module --with-http_ssl_module --with-http_v2_module "--with-pcre=/usr/local/pcre-8.45"\nmake\nmake install\n# \u68c0\u67e5\n/usr/local/nginx/sbin/nginx -v\n'})}),"\n",(0,l.jsx)(n.h2,{id:"git",children:"Git"}),"\n",(0,l.jsx)(n.h3,{id:"\u914d\u7f6essh",children:"\u914d\u7f6essh"}),"\n",(0,l.jsx)(n.p,{children:"\u914d\u7f6e\u5bc6\u94a5"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sh",children:'ssh-keygen -t rsa -C "xxx@xxx.com"\n'})}),"\n",(0,l.jsx)(n.p,{children:"\u67e5\u770b\u5bc6\u94a5"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sh",children:"cd ~/.ssh\ncat id_rsa.pub\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u914d\u7f6e\u8d26\u53f7"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sh",children:'git config --global user.email "xxx@xxx.com"\ngit config --global user.name "xxx"\n'})}),"\n",(0,l.jsx)(n.h3,{id:"\u663e\u793a",children:"\u663e\u793a"}),"\n",(0,l.jsx)(n.p,{children:"\u67e5\u770b\u5f53\u524d\u5206\u652f\u5927\u5c0f"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sh",children:'git count-objects -vH | grep -E "count|size"\n'})}),"\n",(0,l.jsx)(n.p,{children:"\u67e5\u770b\u5f53\u524d\u5206\u652f\u6240\u6709\u5927\u5c0f\u4fe1\u606f"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sh",children:"git count-objects -vH\n"})}),"\n",(0,l.jsx)(n.h3,{id:"\u5220\u9664-1",children:"\u5220\u9664"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sh",children:"git rm --cached <flie-name>\n"})}),"\n",(0,l.jsx)(n.h3,{id:"\u5220\u9664\u8bb0\u5f55",children:"\u5220\u9664\u8bb0\u5f55"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sh",children:"git log --oneline --decorate --graph main\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sh",children:"git rebase --onto <last-commit-to-keep> main\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sh",children:"git push --force origin main\n"})})]})}function o(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(t,{...e})}):t(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>a});var l=s(6540);const r={},c=l.createContext(r);function i(e){const n=l.useContext(c);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),l.createElement(c.Provider,{value:n},e.children)}}}]);