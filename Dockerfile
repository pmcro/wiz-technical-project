FROM node:14
WORKDIR /app
COPY . .
COPY wizproject.txt /wizproject.txt
RUN npm install
CMD ["node", "app.js"]
