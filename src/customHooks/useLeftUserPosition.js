import { useEffect, useState } from "react";

export default function useLeftUserPosition() {
  const [userCarLeft, setUserCarLeft] = useState(() => 10);
  function keyDownHandler(e) {
    const key = e.key.toString().toLowerCase();
    if (key !== "arrowleft" && key !== "arrowright") return;

    switch (key) {
      case "arrowright":
        setUserCarLeft((prevLeft) =>
          prevLeft <= 75 ? prevLeft + 5 : prevLeft
        );
        break;
      case "arrowleft":
        setUserCarLeft((prevLeft) =>
          prevLeft >= 10 ? prevLeft - 5 : prevLeft
        );
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", keyDownHandler);

    return () => window.removeEventListener("keydown", keyDownHandler);
  }, []);

  return userCarLeft;
}
