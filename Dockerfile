# Base Image
FROM node:20-alpine

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .

RUN npm run build

# wait-for-it ins Image kopieren
COPY wait-for-it.sh /wait-for-it.sh
RUN chmod +x wait-for-it.sh

EXPOSE 1337

CMD ["/wait-for-it.sh", "cssystem-database:5432", "--", "npm", "run", "start"]
