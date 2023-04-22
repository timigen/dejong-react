import { action } from "easy-peasy";

export default {
  a:0,
  b:0,
  c:0,
  d:0,

  setA: action((state, a) => {
    state.a = a;
  }),
  setB: action((state, b) => {
    state.b = b;
  }),
  setC: action((state, c) => {
    state.c = c;
  }),
  setD: action((state, d) => {
    state.d = d;
  }),
};