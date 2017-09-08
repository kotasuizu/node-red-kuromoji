/**
* Copyright (c) 2016, 2017 Kota Suizu
* Released under the MIT license
* http://opensource.org/licenses/mit-license.php
**/

var kuromoji = require("kuromoji");

var DIC_URL = "";
for (var i = 0; i < module.children.length; i++) {
  var myFilename = module.children[i].filename;
  if (myFilename.match(/kuromoji/)) {
    var length = myFilename.length;
    DIC_URL = myFilename.substr(0,length-15);
    DIC_URL += "dict";
  }
}
console.log("DIC_URL is " + DIC_URL);

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
