import convertToRoman from "./convertToRoman.ts";

(() => {
  let index = 1;

  while (index < 4002) {
    console.log(convertToRoman(index));
    index++;
  }
})()
