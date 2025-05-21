FROM node:20-alpine AS builder
WORKDIR /app

# 依存関係のインストール
COPY package*.json ./
RUN npm install

# ソースコードのコピーとビルド
COPY . .
RUN npm run build

# 本番環境用のイメージ
FROM node:20-alpine
WORKDIR /app

# ビルド済みのファイルをコピー
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./
RUN npm install --production

ENV NODE_ENV=production
EXPOSE 3000

CMD ["npm", "start"]
  