mechatronics-frontend
=====================

Project setup

1. clone repo
2. run `npm install`
2. run `bower install`

nginx conf:

```bash
server {
        listen 80;
        server_name www.byumechatronics.com byumechatronics.com join.byumechatronics.com;

        access_log /var/log/nginx/byumechatronics/access.log;
        error_log /var/log/nginx/byumechatronics/error.log error;

        root /var/www/apps/mechatronics-frontend/dist;
        index index.html index.htm;

        location / {
                # First attempt to serve request as file, then
                # as directory, then fall back to displaying a 404.
                try_files $uri $uri/ /index.html;
        }
}
```