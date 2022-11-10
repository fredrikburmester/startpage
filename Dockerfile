# Path: ./Dockerfile

# use nginx 
FROM nginx:1.13.3-alpine

# copy the build output to the default nginx public folder
COPY dist /usr/share/nginx/html

# start nginxu
CMD ["nginx", "-g", "daemon off;"]


