import "./Canvas.css";
import Point from "./Point";
import { useStoreState, useStoreActions } from "easy-peasy";

function Canvas() {
  const a = useStoreState((store) => store.a);
  const b = useStoreState((store) => store.b);
  const c = useStoreState((store) => store.c);
  const d = useStoreState((store) => store.d);

  const points = useStoreState((store) => store.points);

  const numberOfPoints = useStoreState((store) => store.numberOfPoints);
  const setPoints = useStoreActions((actions) => actions.setPoints);

  //double xNew = std::sin(a*y + e) - std::cos(b*x + f);
  //double yNew = std::sin(c*x + g) - std::cos(d*y + h);

  if (points.length === 0) {
    let x = 0;
    let y = 0;
    const p = [];

    for (let i = 0; i < numberOfPoints; i++) {
      let xNew = Math.sin(a * y) - Math.cos(b * x);
      let yNew = Math.sin(c * x) - Math.cos(d * y);
      console.log("xNew: " + xNew + " yNew: " + yNew);
      p.push(new Point(xNew, yNew));
      x = xNew;
      y = yNew;
    }
    //console.log(p);
    setPoints(p);
  }

  return (
    <>
      <canvas></canvas>
    </>
  );
}

export default Canvas;
