server {
    listen 443 ssl;
    server_name samuraichintai.com www.samuraichintai.com;

    ssl_certificate /home/backend/nha-thue/nginx.crt;
    ssl_certificate_key /home/backend/nha-thue/key_ssl.key;# Cấu hình thêm về SSL
    ssl_protocols TLSv1.2 TLSv1.3;
  
    cp /home/backend/nha-thue/key_ssl.key /etc/nginx/cert/

    # Cấu hình thêm về bảo mật
    ssl_session_timeout 1d;
    ssl_session_cache shared: MozSSL: 10m;  # about 40000 sessions
    ssl_session_tickets off;
    # Cấu hình cổng không an toàn để chuyển hướng sang HTTPS
        location / {
            return 301 https://$host$request_uri;
    }

    # Cấu hình ứng dụng Node.js hoặc ứng dụng web khác
    client_max_body_size 10M;
    location / {
        proxy_pass http://localhost:2021;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}