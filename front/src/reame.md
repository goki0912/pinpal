## フォルダ構成解説
```
.
├── components
│   ├── atoms
│   │   └── index.tsx
│   ├── molecules
│   │   └── index.tsx
│   └── organisms
│       └── index.tsx
├── hooks
│   └── index.tsx
├── pages
│   ├── _app.tsx
│   ├── _document.tsx
│   ├── api
│   │   └── hello.ts
│   └── index.tsx
├── reame.md
├── styles
│   └── globals.css
└── types
    └── index.tsx
```

### 注意
- sampleなのでindex.tsxですが、本当は頭文字大文字でファイルを作成してね

## フォルダ構成解説
### components
- [atomicデザイン](https://zenn.dev/miya_tech/articles/1da21ede685707)でやるよ〜
- figmaでどこに記述するか決めるよ〜

### hooks
- カスタムフックを配置するディレクトリ
  - 例: useModal, useFetch...

### pages
- Next.jsのページを配置するディレクトリ
  - 例: index.tsx, about.tsx, 404.tsx...
  - このディレクトリに配置されたファイルは、URLとしてアクセスできる
  - このディレクトリに配置されたファイルは、Reactコンポーネントとしても機能する
  - このディレクトリに配置されたファイルは、Next.jsのルーティングの対象になる

### types
- TypeScriptの型定義ファイルを配置するディレクトリ
  - 例: index.ts, user.ts...
  - このディレクトリに配置されたファイルは、型定義ファイルとして機能する
  - 型だけが定義されている
