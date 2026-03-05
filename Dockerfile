FROM node:18-slim
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
# Use the "exec" form for CMD
CMD ["node", "app.js"]
