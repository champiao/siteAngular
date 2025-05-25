FROM node:23-bullseye-slim

WORKDIR /app

COPY . .

RUN npm install -g @angular/cli pnpm

RUN pnpm install

EXPOSE 4200

CMD ["ng", "serve", "--host", "0.0.0.0"]