function sumAll(arr) {
    var numArr = [],
        sumNum = 0;
    numArr.push(Math.min(arr[0], arr[1]));
    for (var i = (numArr[0] + 1); i <= Math.max(arr[0], arr[1]); i++) {
      numArr.push(i);
    }
    sumNum = numArr.reduce(function(acc, cur) {
      return acc + cur;
    });
    
    return sumNum;
}
  
sumAll([1, 4]);

function convertToRoman(num) {
    var stringToSplit = num.toString();
    var romanNum = "";
    var splits = stringToSplit.split("");
  
    for (var i = 0; i < 4 - stringToSplit.length; i++) {
      splits.unshift("");
    }
  
    switch(splits[0]) {
      case "1":
        romanNum += "M";
        break;
      case "2":
        romanNum += "MM";
        break;
      case "3":
        romanNum += "MMM";
                    }
  
    switch(splits[1]) {
      case "1":
        romanNum += "C";
        break;
      case "2":
        romanNum += "CC";
        break;
      case "3":
        romanNum += "CCC";
        break;
      case "4":
        romanNum += "CD";
        break;
      case "5":
        romanNum += "D";
        break;
      case "6":
        romanNum += "DC";
        break;
      case "7":
        romanNum += "DCC";
        break;
      case "8":
        romanNum += "DCCC";
        break;
      case "9":
        romanNum += "CM";
        break;
                    }
  
    switch(splits[2]) {
      case "1":
        romanNum += "X";
        break;
      case "2":
        romanNum += "XX";
        break;
      case "3":
        romanNum += "XXX";
        break;
      case "4":
        romanNum += "XL";
        break;
      case "5":
        romanNum += "L";
        break;
      case "6":
        romanNum += "LX";
        break;
      case "7":
        romanNum += "LXX";
        break;
      case "8":
        romanNum += "LXXX";
        break;
      case "9":
        romanNum += "XC";
        break;
                    }
  
    switch(splits[3]) {
      case "1":
        romanNum += "I";
        break;
      case "2":
        romanNum += "II";
        break;
      case "3":
        romanNum += "III";
        break;
      case "4":
        romanNum += "IV";
        break;
      case "5":
        romanNum += "V";
        break;
      case "6":
        romanNum += "VI";
        break;
      case "7":
        romanNum += "VII";
        break;
      case "8":
        romanNum += "VIII";
        break;
      case "9":
        romanNum += "IX";
        break;
                    }
  
    
   return romanNum;
}
  
convertToRoman(36);

function diffArray(arr1, arr2) {
  
    var newArr = [];
    
    function filterArray(arr1, arr2) {
      arr1.forEach(function(query) {
        if (arr2.indexOf(query) < 0) {
          newArr.push(query); 
        }
      });
    }
    
    filterArray(arr1, arr2);
    filterArray(arr2, arr1);
    return(newArr);
}
  
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

function whatIsInAName(collections, source) {
    var arr = [];
    var searchKeys = Object.keys(source); // find key to search for 
    collections.forEach(collection => {
      var hasAllKeys = searchKeys.every(item => {
        return collection.hasOwnProperty(item) && collection[item] == source[item];
      });
      if (hasAllKeys) arr.push(collection);
    });
    return arr;
}
  
whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

function myReplace(str, before, after) {
    str = str.replace(before, function() {
      if (before.charAt(0) === before.charAt(0).toLowerCase()) {
        after = after.replace(after.charAt(0), after.charAt(0).toLowerCase());
      }
      if (before.charAt(0) === before.charAt(0).toUpperCase()) {
        after = after.replace(after.charAt(0), after.charAt(0).toUpperCase());
      }
      return after;
    });
    
    // Try to solve with a RegEx
    return str;
}
  
myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

function translatePigLatin(str) {
    let igpay = '';
    const vowels = (/^[aeiou]/i).test(str);
    if (vowels) {
      igpay = str + 'way';
    } else {
      igpay = (/[aeiou].*/i).exec(str) + (/^[^aeiou]*/i).exec(str) + 'ay';
    }
    return igpay;
}
  
translatePigLatin("consonant");

function pairElement(str) {
    var newArr = str.split('');
    newArr.forEach((item, i, arr) => {
      if (item == 'A' || item == 'T') {
        arr[i] = (item == 'A' ? ['A', 'T'] : ['T', 'A']);
      } else {
        arr[i] = (item == 'G' ? ['G', 'C'] : ['C', 'G']);
      }
    });
    console.log(newArr);
    return str;
}
  
pairElement("ATCGA");
