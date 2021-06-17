/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if (needle.length === 0) {
    return 0;
  }
​
  const lps = Array.from({ length: needle }, () => null);
  
  lps[0] = 0;
​
  let len = 0;
  
  let i = 1;
  
  while (i < needle.length) {
    if (needle[i] === needle[len]) {
      len++;
      
      lps[i] = len;
      
      i++;
    } else if (len > 0) {
      len = lps[len - 1];
    } else {
      lps[i] = 0;
      i++;
    }
  }
  
  let needleIndex = 0;
  for (let j = 0; j < haystack.length;) {
    if (haystack[j] === needle[needleIndex]) {
      // lps[needleIndex];
      needleIndex++;
      j++;
​
      if (needleIndex === needle.length) {
        return j - needle.length;
      }
    } else if (needleIndex > 0) {
      needleIndex = lps[needleIndex - 1];
    } else {
      j++;
    }
  }
  
  return -1;
};
​
/**
- Инициализируем массив `lps` такого же размера, как и подстрока. Значеним`lps[0]` равно 0
- Инициализируем переменную `len` = 0 для того, чтобы в ней хранить максимальную длину префикса, который также является и суффиксом
- Установим в 1 индекс `i`, который будет использоваться для того, чтобы итерироваться по подстроке.
- Итерируемся по подстроке используя индекс `i`:
    - если `pat[i]` = `pat[len]` , увеличим `len` сохраним значение `len` в `lps[i]` и увеличим `i` на 1
    - если len > 0, приравниваем len к lps[len - 1]
    - иначе lps[i] становится равен 0 и i увеличивается на 1
*/
