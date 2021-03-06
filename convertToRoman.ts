export default function (n: number): string {
  if (Object.hasOwnProperty.call(RomanMap, n)) return RomanMap[n];

  if (4000 <= n) return "";

  const numCollection       = splitByDecimalPlace(n);
  let collection: number[]  = [];

  numCollection.forEach(x => {
    collection = collection.concat(getRomanCollection(x));
  });

  return collection.map(x => RomanMap[x]).join('');
}

interface RomanString {
  readonly [index: string ]: string
}

interface RomanConsts {
  readonly [index: string ]: number
}

const RomanMap: RomanString = {
  "1" : "I",
  "5" : "V",
  "10" : "X",
  "50" : "L",
  "100" : "C",
  "500" : "D",
  "1000" : "M",
}

const Places: RomanConsts = {
  "1" : 1,
  "2" : 10,
  "3" : 100,
  "4" : 1000,
}

Object.freeze(Places);
Object.freeze(RomanMap);

const getDecimalPlace = (n: number): number => Places[n.toString().length];

const splitByDecimalPlace = (n: number) => {
  const str                   = n.toString();
  const collection: number[]  = [];
  let reverseIndex            = str.length;

  for (let index = 0; index < str.length; index++) {
    const element = Number(str[index]);
    collection.push(element * Places[reverseIndex]);
    reverseIndex--;
  }

  return collection;
}

const getRomanCollection = (n: number): number[] => {
  const place       = getDecimalPlace(n);
  const placesIndex = place.toString().length;
  
  if (place * 4 === n) return [place, place * 5];

  if (place * 5 === n) return [place * 5];
  
  if (n / Places[placesIndex] === 9) return [place, Places[placesIndex + 1]];

  if (place * 5 < n) return [place * 5, ...generateDigitCollection(n / place - (5), place)];
  
  return generateDigitCollection(n / Places[placesIndex], place);
}

const generateDigitCollection = (length: number, digit: number) => {
  const collection: number[] = [];
  
  if (3 < length) return collection;

  for (let index = 0; index < length; index++) {
    collection.push(digit);
  }
  
  return collection;
}
