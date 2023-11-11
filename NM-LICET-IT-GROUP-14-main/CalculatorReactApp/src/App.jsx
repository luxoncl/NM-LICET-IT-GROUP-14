import React,{useState} from "react";
import { createRoot } from "react-dom/client";
import Button from "./Button";

const App = () => {
  const [num1,setNum1] = useState(0);
  const [num2,setNum2] = useState(0);
  return (
    <div>
      <h1 className="text-3xl font-bold underline text-center m-2.5">
        Calculator
      </h1>
      <div className="w-3/12 grid grid-cols-3 grid-rows-4 ">
        <Button number="1" />
        <Button number="2" />
        <Button number="3" />

        <Button number="4" />
        <Button number="5" />
        <Button number="6" />

        <Button number="7" />
        <Button number="8" />
        <Button number="9" />

        <Button number="+" />
        <Button number="-" />
        <Button number="*" />
      </div>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
