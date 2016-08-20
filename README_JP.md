# node-red-kuromoji

Kuromoji.jsを用いた形態素解析を行います。  
主にIBM Bluemix上のNode-REDでの稼働を想定しています。(他でも動くと思いますが、、、)

Kuromoji.jsについては、以下サイトをご確認ください。  
https://github.com/takuyaa/kuromoji.js

## How to Install

このNodeを使用するためには、Node-REDアプリケーションのpackage.json dependenciesに以下を追加し、再アップロードしてください。

- "node-red-kuromoji":"0.0.x"

### Bluemixの場合、package.jsonに追加する手順は以下となります
1. BluemixのNode-RED用Runtimeより、Starter codeをダウンロードする
2. DLしたアーカイブ内にあるpackage.jsonを開き、dependenciesに上記のエントリーを追加し保存する
3. DLしたアーカイブ内にあるmanifest.ymlを開き、memoryの設定値を640MB以上に修正し保存する
4. Bluemix Runtimeにpushする(cf push <Application Name>)
5. Node-REDのWeb画面を開き、Node一覧のanalysisセクション内に、Kuromoji Tokenizer Nodeが追加されたことを確認する

## How to Use

### Nodeの設定は、、、

Nodeの設定は特にありません。  
NodeInputのpayloadに形態素解析したいStringを入力すると、Outputとして解析結果のJSONが返却されます。

### Kuromojiの辞書をカスタマイズしたい場合は、、、

以下ディレクトリをKuromoji初期化時の辞書ディレクトリとして指定しています。  
ユーザ辞書等を整備したい場合は、このディレクトリ内の辞書をカスタマイズ/追加ください。  
```
node-red-kuromoji/node_modules/kuromoji/dist/dict
```


## Copyright and license

Copyright (c) 2016 Kota Suizu  
Released under the MIT license  
http://opensource.org/licenses/mit-license.php
