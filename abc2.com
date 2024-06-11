server {
    listen 443 ssl;
    server_name samuraichintai.com www.samuraichintai.com;

    ssl_certificate /etc/nginx/cert/nginx.crt;
    ssl_certificate_key /etc/nginx/cert/key_ssl.key;# Cấu hình thêm về SSL
    ssl_protocols TLSv1.2 TLSv1.3;



    # Cấu hình thêm về bảo mật
    ssl_session_timeout 1d;
    ssl_session_tickets off;
    # Cấu hình cổng không an toàn để chuyển hướng sang HTTPS
    # Cấu hình ứng dụng Node.js hoặc ứng dụng web khác
    client_max_body_size 10M;
      location /banner {
        proxy_pass http://localhost:2021;
         proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
         proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
         proxy_set_header X-Forwarded-Proto $scheme;
 }
 location /uploads {
        proxy_pass http://localhost:2021;
         proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
         proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
         proxy_set_header X-Forwarded-Proto $scheme;
 }
    location / {
       # proxy_pass http://localhost:2021;
        # proxy_set_header Host $host;
       # proxy_set_header X-Real-IP $remote_addr;
       #  proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
       #  proxy_set_header X-Forwarded-Proto $scheme;
        root /home/backend/nha-thue/nha-thue/client; # Thay thế bằng đường dẫn đến thư mục chứa file a.html
        index index.html;
        try_files $uri $uri/ /index.html;
    }

 location /client/ {
        proxy_pass http://localhost:2021;
         proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
         proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
         proxy_set_header X-Forwarded-Proto $scheme;
 }
  location /api/ {
        proxy_pass http://localhost:2021;
         proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
         proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
         proxy_set_header X-Forwarded-Proto $scheme;
 }
    location /quanly {
        proxy_pass http://127.0.0.1:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}

server {
    listen 80;
    server_name samuraichintai.com www.samuraichintai.com;
    client_max_body_size 10M;
    location / {
         return 301 https://$host$request_uri;
    }
}