import { assertEquals, assertThrows } from "@std/assert";
import { add, div, intDiv, sub } from "./main.ts";

Deno.test(function addTest() {
  assertEquals(add(2, 3), 5);
});

Deno.test(function subTest() {
  assertEquals(sub(3, 2), 1);
});

Deno.test(function sub2Test() {
  assertEquals(sub(2, 3), -1);
});

Deno.test(function divTest() {
  assertEquals(div(3, 2), 1.5);
});

Deno.test(function intDivTest() {
  assertEquals(intDiv(3, 2), 1);
});

Deno.test(function intDiv0Test() {
  assertThrows(() => {
    intDiv(3, 0);
  });
});
