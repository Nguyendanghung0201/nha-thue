server {                                                                                                abc.com                                                                                                                 server {
    listen 80;
    server_name samuraichintai.com www.samuraichintai.com;
    client_max_body_size 10M;
    location / {
         return 301 https://$host$request_uri;
    }
}