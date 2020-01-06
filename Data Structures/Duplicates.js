// Remove duplicates from a given string

function removeDups(s) {
    let charArray = s.split("");
      for (let i = 0; i < charArray.length; i++) {
        for (let j = i + 1; j < charArray.length; j++)
          if (charArray[i] == charArray[j]) {
            charArray.splice(j, 1);
            j--;
          }
      }
      return charArray.join("");
    }
    console.log(removeDups("Int32,Int32,Int32,InInt32,Int32,Double,Double,Double"));
