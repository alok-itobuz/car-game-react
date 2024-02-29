import SystemCars from "./components/SystemCars";
import UserCar from "./components/UserCar";

function App() {
  return (
    <div className="container">
      <div className="ground"></div>
      <div className="road">
        <div className="divider-container">
          {new Array(10).fill(3).map((_, i) => (
            <p key={i} className="divider"></p>
          ))}
        </div>
        <div className="divider-container">
          {new Array(10).fill(3).map((_, i) => (
            <p key={i} className="divider"></p>
          ))}
        </div>
        <UserCar />
        <SystemCars />
      </div>
      <div className="ground"></div>
    </div>
  );
}
export default App;
