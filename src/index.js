
module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 != 0) {
    return false;
  }
  let map = new Map();
  for (let i = 0; i < bracketsConfig.length; i++) {
    map.set(bracketsConfig[i][0], bracketsConfig[i][1])
  }
  let opens = Array.from(map.keys());
  let n = str.length / 2;
  while (n != 0) {
    for (let i = 0; i < str.length; i++) {
      if (opens.includes(str[i])) {
        if(map.get(str[i]) == str[i+1]) {
          str = str.replace(str.substring(i, i + 2), "");
          break;
        }
      }
    }
    n--;
  }
  return str.length == 0;
}
