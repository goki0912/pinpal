# hackathon202402
2月vol.14ハッカソン技育CAMPハッカソン

### PinPal
行きたいと行くをつなげるアプリケーション
![写真](./docs/スクリーンショット%202024-02-12%2015.33.40.png)

## 環境構築方法
- googleMapのapiキーを知りたい方は連絡お願いします！

<details>

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
DB_DATABASE=website
DB_USERNAME=posse
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

</details>

## デザイン
- [figma](https://www.figma.com/file/k5An6WTa440os5XaAhkPSj/hackathon202402?type=design&node-id=20%3A512&mode=design&t=uKaq0Ptz6vWddtVr-1)

## スライド
- [canva](https://www.canva.com/design/DAF8dWVXeak/D2029S_YrV3HtDB5Sth0kg/edit?utm_content=DAF8dWVXeak&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)
- [PDF](./docs/PinPal.pdf)

## ハッカソン前チームビルディング&&ハッカソン後振り返り
- [Googleスプレッドシート(閲覧のみ)](https://docs.google.com/spreadsheets/d/1uYrr6X83sxcWD94RlG50-QGZuh7iADuHC_KXd8RP8TM/edit?usp=sharing)
