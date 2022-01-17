FROM node:16-alpine
WORKDIR /app/frontnend
COPY package.json .
COPY package-lock.json .
COPY tsconfig.json .
RUN npm i
COPY . .
EXPOSE 3000
CMD ["npm", "start"]