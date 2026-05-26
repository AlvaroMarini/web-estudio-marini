# --- Etapa 1: Construcción (Build) ---
FROM node:20-alpine AS builder

WORKDIR /app

# Copiamos solo los package.json primero para aprovechar el caché de Docker
COPY package*.json ./
RUN npm install

# Copiamos el resto del código y buildeamos la app
COPY . .
RUN npm run build


# --- Etapa 2: Producción (Servidor Nginx) ---
FROM nginx:alpine

# Copiamos los archivos compilados de la etapa anterior a la carpeta pública de Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Exponemos el puerto 80 (el estándar de Nginx)
EXPOSE 80

# Arrancamos Nginx
CMD ["nginx", "-g", "daemon off;"]