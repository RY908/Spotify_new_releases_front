FROM node:latest

WORKDIR /app
COPY ./package*.json ./
RUN npm cache clean --force && npm ci
RUN npm install -g webpack@4.44.1 webpack-cli@4.5.0
RUN npm install -g serve@11.3.2
# RUN npm install --save-dev @webpack-cli/serve
COPY . .
