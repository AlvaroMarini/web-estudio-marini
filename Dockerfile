FROM node:20-alpine

WORKDIR /app

# Instalamos las dependencias
COPY package*.json ./
RUN npm install

# Copiamos el código
COPY . .

# Ejecutamos el servidor de desarrollo exponiendo la red
CMD ["npm", "run", "dev", "--", "--host"]