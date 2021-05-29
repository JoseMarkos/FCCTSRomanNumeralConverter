interface RomanString {
  [index: string ] : string
}

interface RomanConsts {
  [index: string ] : number
}

const RomanConsts:RomanConsts = {
  "1" : 1,
  "2" : 5,
  "3" : 10,
  "4" : 50,
  "5" : 100,
  "6" : 500,
  "7" : 1000,
}

const RomanMap:RomanString = {
  "1" : "I",
  "5" : "V",
  "10" : "X",
  "50" : "L",
  "100" : "C",
  "500" : "D",
  "1000" : "M",
}

const Roman:RomanString = {
  "1" : "I",
  "2" : "V",
  "3" : "X",
  "4" : "L",
  "5" : "C",
  "6" : "D",
  "7" : "M",
}

const Places:RomanConsts = {
  "1" : 1,
  "2" : 10,
  "3" : 100,
  "4" : 1000,
}

const getDecimalPlace = (n: number): number => {
  return Places[n.toString().length];
}

const getTheRomanNum = (n: number) => {
  if (RomanMap.hasOwnProperty(n)) {
    return RomanMap[n];
  }

  const splitedNum = getSplitedNum(n);
  let collection: number[] = [];

  splitedNum.forEach(x => {
    getRomanCollection(x).forEach(x => {
      collection.push(x);
    });
  })

  console.log(collection);
  

  return collection.map(x => RomanMap[x]).join('');
}

const getSplitedNum = (n: number) => {
  const str = n.toString();
  let collection: number[] = [];
  let reverseIndex = str.length;

  for (let index = 0; index < str.length; index++) {
    let element = Number(str[index]);

    if (element != 0) {
      collection.push(element * Number(Places[reverseIndex.toString()]));
    }

    reverseIndex--;
  }

  return collection;
}

const getRomanCollection = (n: number) => {
  const place = getDecimalPlace(n);
  
  if (place === Places[1]) {
    
    if (5 > n) {
      if (n === 4) {
        return [1, 5]
      }
      
      return getRepeatetion(n, 1);
    }
    
    if (n === 5 + 4) {
      return [1, 10]
    }
    
    return [5, ...getRepeatetion(n - 5, 1)]
  }
  
  switch (place) {
    case Places[2]:
      return test(n, 2, place);
      break;
  
    case Places[3]:
      return test(n, 3, place);
      break;
      
    case Places[4]:
      return test(n, 4, place);
      break;
      
    default:
      break;
  }

  return [];
}

const test = (n: number, index: number,  place: number) => {
  if (place * 4 === n) {
    return [place, place * 5];
  }

  if (place * 5 === n) {
    return [place * 5];
  }
  
  if (n / Places[index] === 9) {
    if (index === 4) {
      return [n];
    }

    return [place, Places[index + 1]]
  }

  if (place * 5 < n) {
    return [place * 5, ...getRepeatetion(n / place - (5), place)];
  }
  
  return getRepeatetion(n / Places[index], place);
}

const getRepeatetion = (n: number, digit: number) => {
  let collection: number[] = [];

  if (3 >= n) {
    for (let index = 0; index < n; index++) {
      collection.push(digit);
    }
  }

  return collection;
}

function convertToRoman(num: number) {
  return getTheRomanNum(num);
}

let index = 1;

while (index < 100) {
  console.log(convertToRoman(index));
  index++;
}