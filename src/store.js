import { action, createStore } from "easy-peasy";

const store = createStore({
  a: 1,
  b: 0.5,
  c: 0,
  d: 2,

  numberOfPoints: 10,

  points: [],

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

  setNumberOfPoints: action((state, numberOfPoints) => {
    state.numberOfPoints = numberOfPoints;
  }),

  setPoints: action((state, points) => {
    state.points = points;
  }),
});

export default store;
