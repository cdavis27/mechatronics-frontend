mechatronics-frontend
=====================

Project setup

1. clone repo
2. run `npm install`
3. run `bower install`
4. Setup your local config (`app/modules/config/config.js`)
5. `grunt build`

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

---------------

## Change Log

**9 Sept 2018**

- Updated `.bowerrc` to use new registry url as per [this SO post](https://stackoverflow.com/a/51020318/2392520)
- Updated link for `Pay Dues`
- Changed `Subscribe` button to `Slack`, changed `mail.byumechatronics.com` to `slack.byumechatronics.com`

