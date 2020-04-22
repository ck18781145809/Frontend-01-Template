/*
 * 字符串转为UTF-8编码
 * @param {String} str 需要编码的字符串
 * @returns {String} 转码后的字符串
 * */
function UTF8Encoding(str) {
  const chars = str.split('');
  let charHexArray = [];
  
  for(let i = 0; i < chars.length; i++) {
  	charHexArray.push(UTF8EncodingChar(chars[i]));
  }
  
  return charHexArray.join('');
}


/*
 * 单个字符转为UTF-8编码
 * @description 
 * * 编码规则参考 
 * * http://www.ruanyifeng.com/blog/2007/10/ascii_unicode_and_utf-8.html 
 * * https://zh.wikipedia.org/wiki/UTF-8
 * @param {String} char 需要编码的字符
 * @returns {String} 字符的 UTF-8 十六进制编码
 * */
function UTF8EncodingChar(char) {
  const codePoint =  char.codePointAt(0);
  let codePointBin = codePoint.toString(2);
  let result = '';
  
  if( codePoint <= parseInt(0x007F) ) {
    result = `0${codePointBin.padStart(7, '0')}`;
  } else if( codePoint >= parseInt(0x0080) && codePoint <= parseInt(0x07FF) ) {
    result = `110${codePointBin.slice(0, -6).padStart(5, '0')}10${codePointBin.slice(-6)}`;
  } else if( codePoint >= parseInt(0x0800) && codePoint <= parseInt(0xFFFF) ) {
    result = `1110${codePointBin.slice(0, -12).padStart(4, '0')}10${codePointBin.slice(-12, -6)}10${codePointBin.slice(-6)}`;
  } else if( codePoint >= parseInt(0x00010000) && codePoint <= parseInt(0x0010FFFF) ) {
    result = `11110${codePointBin.slice(0, -18).padStart(3, '0')}10${codePointBin.slice(-18, -12)}10${codePointBin.slice(-12, -6)}10${codePointBin.slice(-6)}`;
  }
  
  return parseInt(result, 2).toString(16).replace(/(.{2})/g, '%$1');
}
