# Base Image
FROM node:20-alpine

# Arbeitsverzeichnis
WORKDIR /app

# Abhängigkeiten kopieren und installieren
COPY package.json package-lock.json ./
RUN npm install

# Rest des Projekts kopieren
COPY . .

# Strapi für Production bauen
RUN npm run build

# Wait-for-it Script kopieren (falls nicht schon im Projekt)
COPY wait-for-it.sh /wait-for-it.sh
RUN chmod +x /wait-for-it.sh

# Port freigeben
EXPOSE 1337

# Start: zuerst warten, dann Strapi starten
CMD ["/wait-for-it.sh", "cssystem-database:5432", "--", "npm", "run", "start"]
