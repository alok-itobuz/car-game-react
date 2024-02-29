import { useEffect, useState } from "react";
import userCar from "../assets/user_car.svg";

function generateRandomNumber(n) {
  return Math.trunc(Math.random() * n + 1);
}

export default function SystemCars() {
  const [carsState, setCarsState] = useState([
    {
      isVisible: true,
      roadSide: "left",
    },
    {
      isVisible: false,
      roadSide: "left",
    },
    {
      isVisible: true,
      roadSide: "right",
    },
    {
      isVisible: false,
      roadSide: "right",
    },
  ]);

  useEffect(() => {
    setInterval(() => {
      setCarsState((prevState) => {
        const states = [...prevState.map((state) => ({ ...state }))];

        states.forEach((state) => ({
          ...state,
          isVisible: !state.isVisible,
        }));

        return states;
      });
    }, 6000);
  }, []);
  return (
    <>
      {carsState.map(
        ({ isVisible, roadSide }, i) =>
          isVisible && (
            <img
              className="system-car"
              src={userCar}
              alt="user car image"
              style={{
                filter: `hue-rotate(${
                  generateRandomNumber(10) * 25
                }deg) saturate(2)`,
                [roadSide]: "25%",
                transform: `rotate(180deg) translateX(${
                  roadSide === "left" ? "" : "-"
                }50%)`,
                animationDelay: `${i * 1}s`,
              }}
            />
          )
      )}
    </>
  );
}
