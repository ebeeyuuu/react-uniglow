FROM node:14 AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:14 AS production

WORKDIR /app

COPY --from=builder /app ./

RUN npm install --only=production

EXPOSE 3000

CMD ["npm", "run", "dev"]
