# Tokyo 私立中学校マップ

Leaflet を使って東京都内の私立中学校を地図上に表示する React + TypeScript 製アプリケーションです。検索・フィルタリング機能を備えています。

## セットアップ

1. Node.js をインストールします。
2. 依存関係をインストールします。

```bash
npm install
```

3. 開発サーバを起動します。

```bash
npm run dev
```

4. ビルドする場合は次を実行します。

```bash
npm run build
```

## 使用技術

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Leaflet](https://leafletjs.com/) / [React Leaflet](https://react-leaflet.js.org/)

## 主な機能

- 地図上に私立中学校の位置をマーカー表示
- 学校詳細ポップアップ表示
- 学校名、共学区分、偏差値、学費によるフィルタリング
- レスポンシブデザイン対応

## 今後の拡張予定

- 学校データの追加・更新
- お気に入り登録や比較機能
- より詳細な学校情報の表示

## データについて

`src/data/schools.json` に学校情報を保持しています。現時点では一部の学校のみ収録しています。正確な情報を調査の上、必要に応じて追加してください。
