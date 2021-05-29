import { assertEquals } from "https://deno.land/std@0.97.0/testing/asserts.ts";
import convertToRoman from '../convertToRoman.ts';

Deno.test("FCC Tests", () => {
  assertEquals(convertToRoman(2), "II");

  assertEquals(convertToRoman(3), "III");

  assertEquals(convertToRoman(4), "IV");

  assertEquals(convertToRoman(5), "V");

  assertEquals(convertToRoman(9), "IX");

  assertEquals(convertToRoman(12), "XII");

  assertEquals(convertToRoman(16), "XVI");

  assertEquals(convertToRoman(29), "XXIX");

  assertEquals(convertToRoman(44), "XLIV");

  assertEquals(convertToRoman(45), "XLV");

  assertEquals(convertToRoman(68), "LXVIII");

  assertEquals(convertToRoman(83), "LXXXIII");

  assertEquals(convertToRoman(97), "XCVII");

  assertEquals(convertToRoman(99), "XCIX");

  assertEquals(convertToRoman(400), "CD");

  assertEquals(convertToRoman(500), "D");

  assertEquals(convertToRoman(501), "DI");

  assertEquals(convertToRoman(649), "DCXLIX");

  assertEquals(convertToRoman(798), "DCCXCVIII");

  assertEquals(convertToRoman(891), "DCCCXCI");

  assertEquals(convertToRoman(1000), "M");

  assertEquals(convertToRoman(1004), "MIV");

  assertEquals(convertToRoman(1006), "MVI");

  assertEquals(convertToRoman(1023), "MXXIII");

  assertEquals(convertToRoman(2014), "MMXIV");

  assertEquals(convertToRoman(3999), "MMMCMXCIX");
});
