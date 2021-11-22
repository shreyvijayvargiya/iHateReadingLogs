From node:14.17.5-alpine
WORKDIR /app
COPY . .
RUN yarn install 
CMD ["yarn", "dev"]