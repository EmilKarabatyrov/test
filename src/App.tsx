import "./App.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const periods = [
  { startPeriod: 1987, endPeriod: 1991, pagValue: 2 },
  { startPeriod: 1992, endPeriod: 1997, pagValue: 3 },
  { startPeriod: 1999, endPeriod: 2002, pagValue: 4 },
];

function App() {
  const title = useRef(null);
  useGSAP(() => {
    gsap.to(title.current, {
      rotation: "360",
      duration: 1,
    });
  });

  return (
    <>
      <div className="container">
        <h1 className="title">
          Исторические <br /> даты
        </h1>
        <div className="circle-container">
          <div className="circle">
            <div className="marker">
              <div className="marker-inner">6</div>
              <span>Наука</span>
            </div>
          </div>

          <span className="year year-left">2015</span>
          <span className="year year-right">2022</span>
        </div>
      </div>
    </>
  );
}

export default App;
