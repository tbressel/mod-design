# Je download l'image alpine:latest
FROM alpine:latest

# On se place dans le repertoire /app (il se crée automatiquement)
WORKDIR /app

# On copie tous les fichiers dans le repertoire /app, sauf ce qui est mentionné dans le .dockerignore
COPY . .

# Installation de nodejs, npm et pnpm
RUN apk add nodejs
RUN apk add npm
RUN npm install -g pnpm
RUN pnpm install

