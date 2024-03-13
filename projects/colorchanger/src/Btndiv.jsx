import Button from "./Button";
import { useState } from "react";
import "./index.css";

function BtnDiv() {
  const [color, setcolor] = useState("olive");
  let colors = ["Red","Blue","Orange","Green","Chocolate","Black","purple"]
  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          {/* 
          // Initial Approach
          <Button Color="Red" setColor={setcolor}/>
          <Button Color="Blue"setColor={setcolor} />
          <Button Color="Orange" setColor={setcolor}/>
          <Button Color="Green" setColor={setcolor} />
          <Button Color="Chocolate" setColor={setcolor}/>
          <Button Color="Black" setColor={setcolor}/>
          <Button Color="purple" setColor={setcolor}/> */

          /*Optimized approach */
          colors.map((color)=>(
            <Button key={color} Color={color} setColor={setcolor}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BtnDiv;
