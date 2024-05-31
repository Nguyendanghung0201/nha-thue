server {                                                                                                abc.com                                                                                                                 server {
    listen 80;
    server_name samuraichintai.com www.samuraichintai.com;
    client_max_body_size 10M;
    location / {
         return 301 https://$host$request_uri;
    }
}

 location /uploads/ {
        proxy_pass http://localhost:2021;
         proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
         proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
         proxy_set_header X-Forwarded-Proto $scheme;
 }
  location /api {
       # proxy_pass http://localhost:2021;
        # proxy_set_header Host $host;
       # proxy_set_header X-Real-IP $remote_addr;
       #  proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
       #  proxy_set_header X-Forwarded-Proto $scheme;
 }