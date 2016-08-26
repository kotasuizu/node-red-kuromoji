/**
* Copyright (c) 2016 Kota Suizu
* Released under the MIT license
* http://opensource.org/licenses/mit-license.php
**/

var kuromoji = require("kuromoji");
var DIC_URL = "node_modules/node-red-kuromoji/node_modules/kuromoji/dict";

var tokenizer = null

function KuromojiHelper() {
    // Load and prepare tokenizer
    kuromoji.builder({
        dicPath: DIC_URL
    }).build(function(error, _tokenizer) {
        // 辞書がなかったりするとここでエラーになります(´・ω・｀)
        if (error != null) {
            console.log(error);
        } else {
            tokenizer = _tokenizer;
        }
    });
}

KuromojiHelper.prototype.toTokenize = function(str, callback) {
    callback(tokenizer.tokenize(str.toString()));
};


module.exports = KuromojiHelper;
