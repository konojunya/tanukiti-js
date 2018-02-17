// 1. DOMを操作しよう
// h1の中のテキストをconsole.logで表示しよう。
console.log(document.getElementsByTagName('h1')[0].childNodes[0].nodeValue);
// 2. DOMを変更しよう
// h1の中のテキストを "Hello from Tanukiti" に変更しよう。
document.querySelector("h1").textContent = "Hello from Tanukiti";
// 3. DOMを追加しよう
// h1とpの間にpタグで何か好きな文章を追加しよう。
var pElem = document.createElement("p");
var h1 = document.getElementsByTagName('h1')[0];
pElem.textContent = "ふもっふ！！";
h1.parentNode.insertBefore(pElem, h1.nextSibling);
// 4. DOMを削除しよう
// 一番下のpタグを削除しよう。
var del = document.getElementsByTagName('p')[1];
del.parentNode.removeChild(del);
