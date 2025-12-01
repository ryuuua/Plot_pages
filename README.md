# Plots Gallery

CEBRA の生成物フォルダから自動でプロットを拾い、フォルダ単位をカテゴリとして切り替えられるセルフホストのギャラリーです。

## Structure

```
plotpages/
├── plots.html / index.html        # ギャラリーページ（カテゴリはクエリ ?category=slug で切替）
├── assets/
│   ├── css/
│   │   ├── main.css               # ベーススタイル
│   │   └── gallery.css            # ギャラリー用スタイル
│   ├── data/
│   │   └── gallery-data.json      # スキャン結果のマニフェスト（自動生成）
│   └── js/
│       └── gallery.js             # マニフェストを読み込んで描画
├── scripts/
│   └── build-gallery-data.js      # plots フォルダを走査してマニフェストを作るスクリプト
├── data_image -> /Users/ryua/code/CEBRA_results/data_image   # CEBRA の出力先へのシンボリックリンク
└── plots/                         # 旧サンプル（未使用）
```

## Usage

1. **CEBRA の出力フォルダにリンクする**  
   `ln -s /Users/ryua/code/CEBRA_results/data_image data_image`  
   別のパスを使う場合はシンボリックリンクを張り直すか、スクリプト実行時にパスを指定します。

2. **マニフェストを再生成する**  
   ```bash
   node scripts/build-gallery-data.js /Users/ryua/code/CEBRA_results/data_image data_image
   ```
   - 走査対象: 引数1（未指定なら `DATA_IMAGE_DIR` 環境変数 or `./data_image`）
   - baseUrl:   引数2（未指定なら走査対象のベース名）
   - 対応拡張子: `.png .jpg .jpeg .svg .html .htm`

3. **ブラウザで確認する**  
   `plots.html` もしくは `index.html` を開き、カテゴリピルや URL の `?category=slug` でフォルダごとに切替できます。

4. **ページングの調整**（任意）  
   1ページあたりの件数を変えたい場合は `assets/js/gallery.js` の `PLOTS_PER_PAGE` を編集してください。

## Notes

- データを追加・削除したら、`node scripts/build-gallery-data.js ...` を再実行してください。
- baseUrl に合わせてシンボリックリンク名やサーブ時のルートを揃えると、ブラウザから画像/HTMLにアクセスできます。

## GitHub Pages 用の軽量ビルド

フルサイズの `data_image` をそのままコミットすると容量超過になるため、公開用には軽量サンプルを作成してください。

1. **サンプルを生成する**

   ```bash
   PUBLIC_GALLERY_INCLUDE="daircos:all-MiniLM-L6-v2_plot,daircos:google:embeddinggemma-300M_plot" \
   PUBLIC_GALLERY_MAX_ITEMS=6 \
   node scripts/create-public-gallery.js
   ```

   - 引数: `node scripts/create-public-gallery.js [sourceDir] [targetDir] [maxCategories] [maxItems] [manifestOutput] [baseUrl] [includeCommaSeparated]`
   - 環境変数:  
     `PUBLIC_GALLERY_MAX_CATEGORIES`, `PUBLIC_GALLERY_MAX_ITEMS`, `PUBLIC_GALLERY_BASE_URL`, `PUBLIC_GALLERY_INCLUDE`
   - 生成物: `public_gallery/` 以下にコピーされた画像と、`assets/data/gallery-data.public.json`

2. **フロントエンドで読み込む**

   - `gh-pages.html` はデフォルトで `assets/data/gallery-data.public.json` を読み込む設定になっています。
   - 既存ページでも `?data=gallery-data.public` を URL に付与するか、`<script src="assets/js/gallery.js" data-manifest="...">` を使えば任意のマニフェストを参照できます。

3. **公開する**

   - GitHub Pages 用ブランチでは `public_gallery/` と `assets/data/gallery-data.public.json`、`gh-pages.html` をコミットします。
   - そのブランチで `gh-pages.html` を `index.html` として配置するか、ルートの `index.html` の `data-manifest` を公開用マニフェストに切り替えてください。
