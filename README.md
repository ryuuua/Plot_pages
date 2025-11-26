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
