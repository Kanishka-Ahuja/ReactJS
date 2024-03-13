import { useCallback, useEffect, useState, useRef } from "react";

import "./App.css";

function App() {
  let [length, setLength] = useState(8);
  let [characters, setCharacters] = useState(false);
  let [numbers, setNumbers] = useState(false);
  let [password, setPassword] = useState("");

  let PasswordGenerator = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numbers) {
      str = str + "1234567890";
    }
    if (characters) {
      str = str + "`~!@#$%^&*()-_+={}|[]:;<>,/";
    }
    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass = pass + str.charAt(char);
    }
    setPassword(pass);
  }, [length, numbers, characters, setPassword]);

  useEffect(PasswordGenerator, [length, numbers, characters,PasswordGenerator]);
  const passwordRef = useRef(null);

  const copy = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 10);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-2 my-8 text-orange-500 bg-gray-700">
        <h1 className=" text-xl text-center text-white my-3">Password generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            placeholder=""
            value={password}
            className="outline-none w-full py-1 px-3"
            ref={passwordRef}
            readOnly
          />
          <button
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
            onClick={copy}
          >
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              value={length}
              min={6}
              max={100}
              onChange={(e) => {
                setLength(e.target.value);
              }}
              className="cursor-pointer"
            />
            <label>Length : {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              id="char"
              onChange={() => {
                setCharacters((prev) => !prev);
              }}
              defaultChecked={characters}
            />
            <label htmlFor="char">Characters</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              id="num"
              onChange={() => {
                setNumbers((prev) => !prev);
              }}
              defaultChecked={numbers}
            />
            <label htmlFor="num">Numbers </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
