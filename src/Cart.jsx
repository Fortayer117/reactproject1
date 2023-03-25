import { useState } from "react";
import "./Cart.css";
import image from "./images/image.jpg";
function Cart() {
  const [active, setactive] = useState(false);
  return (
    <div>
      <div className={active ? "cart active" : "cart"}>
        <div className={active ? "cart active" : "cart"}>
          <img src={image} alt="" />
        </div>
        <div className="h1">
          <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
            quam?
          </h1>
        </div>
      </div>

      <button className="btn" onClick={() => setactive(!active)}>
        delete
      </button>
    </div>
  );
}
export default Cart;