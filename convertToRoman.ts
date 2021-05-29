export default function (n: number): string {
  if (Object.hasOwnProperty.call(RomanMap, n))
    return RomanMap[n];

  if (4000 <= n)
    return "";

  const splitedNum = getSplitedNum(n);
  let collection: number[] = [];

  splitedNum.forEach(x => {
    collection = collection.concat([...getRomanCollection(x)]);
  });

  return collection.map(x => RomanMap[x]).join('');
}

interface RomanString {
  [index: string ] : string
}

interface RomanConsts {
  [index: string ] : number
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

const Places:RomanConsts = {
  "1" : 1,
  "2" : 10,
  "3" : 100,
  "4" : 1000,
}

const getDecimalPlace = (n: number): number => Places[n.toString().length];

const getSplitedNum = (n: number) => {
  const str                   = n.toString();
  const collection: number[]  = [];
  let reverseIndex            = str.length;

  for (let index = 0; index < str.length; index++) {
    const element = Number(str[index]);
    collection.push(element * Number(Places[reverseIndex.toString()]));
    reverseIndex--;
  }

  return collection;
}

const getRomanCollection = (n: number): number[] => test(n, getDecimalPlace(n));

const test = (n: number, place: number): number[] => {
  const placesIndex = place.toString().length;
  
  if (place * 4 === n)
    return [place, place * 5];

  if (place * 5 === n)
    return [place * 5];
  
  if (n / Places[placesIndex] === 9) {
    if (placesIndex === 4) {
      return [n];
    }

    return [place, Places[placesIndex + 1]]
  }

  if (place * 5 < n)
    return [place * 5, ...getRepetition(n / place - (5), place)];
  
  return getRepetition(n / Places[placesIndex], place);
}

const getRepetition = (n: number, digit: number) => {
  const collection: number[] = [];
  
  if (3 >= n) {
    for (let index = 0; index < n; index++) {
      collection.push(digit);
    }
  }
  
  return collection;
}
