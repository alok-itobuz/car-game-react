import useLeftUserPosition from "../customHooks/useLeftUserPosition";
import userCar from "../assets/user_car.svg";

export default function UserCar() {
  const userCarLeft = useLeftUserPosition();
  return (
    <img
      className="user-car"
      src={userCar}
      alt="user car image"
      style={{ left: `${userCarLeft}%` }}
    />
  );
}
