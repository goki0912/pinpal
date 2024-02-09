## ファイル、フォルダの名前
基本的には、ファイル、フォルダの名前は小文字で、単語と単語の間はハイフンでつなぐ
#### ただし例外もある
- `index.tsx`の一つ上の階層にあるファイルやフォルダは大文字で始まる
以下例
```
.
├── BlueArrow
│   └── index.tsx
├── InfoText
│   └── index.tsx
├── LinkItem
│   └── index.tsx
├── SignUpLink
│   └── index.tsx
├── WarningUnderlineText
│   └── index.tsx
├── XLinkIcon
│   └── index.tsx
└── break
    ├── PC
    │   └── index.tsx
    └── SM
        └── index.tsx
```



## フォルダ構成解説
```
├── components
├── features
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
```

### components
- コンポーネントを配置するディレクトリ
  - 例: button, link, raioButton...
- 他のところで使いまわせるようなものを配置する

### features
- ページごとの機能、見た目を配置するディレクトリ
  - ex) topページで使う機能、見た目をfeatures/top-page-sectionsに配置する
```
.
└── top-page-sections
    ├── Hero          // トップページのヒーローセクション
    └── News          // トップページのニュースセクション
```
  - componentsとの違いは、featuresはページごとの機能、見た目を配置するディレクトリであること
  - componentsを呼び出すことはあっても、componentsからfeaturesを呼び出すことはない

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
