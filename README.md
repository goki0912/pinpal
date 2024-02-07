# hackathon202402
2月vol.14ハッカソン技育CAMPハッカソン

## 環境構築方法
### バックエンド
1. バックエンドのディレクトリに移動
```
cd backend
```
2. build、する
```
docker compose build && docker compose up -d
```
3. appコンテナに入る
```
docker compose exec app sh
```
4. .env.exampleをコピーして.envを作成してdbのところを変更
```
DB_CONNECTION=mysql
DB_HOST=mysql
DB_PORT=3306
DB_DATABASE=laravel
DB_USERNAME=laravel
DB_PASSWORD=password
```
5. 必要なパッケージをインストール
```
composer install
```
6. キーを生成
```
php artisan key:generate
```
7. マイグレーションを実行
```
php artisan migrate:fresh --seed
```

### フロントエンド
1. フロントエンドのディレクトリに移動
```
cd front
```
2. 必要なパッケージをインストール
```
npm install
```
3. 開発サーバーを立ち上げる
```
npm run dev
```
