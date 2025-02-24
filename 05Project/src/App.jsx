// import './App.css';
import { useState, useCallback ,useEffect,useRef} from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(true);
  const [characterAllowed, setCharacterAllowed] = useState(true);
  const [password, setPassword] = useState("");

  //useRef hook
  const passwordRef = useRef(null);

  const PasswordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) {
      str += "0123456789";
    }
    if (characterAllowed) {
      str += "!@#$%^&*()_+~`";
    }

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, characterAllowed, setPassword]);
  const copyPasswordToclipboard = useCallback(()=>{
    passwordRef.current.select();
    window.navigator.clipboard.writeText(passwordRef.current.value);
  },[password])
  useEffect(() => { PasswordGenerator()}, [length, numberAllowed, characterAllowed, PasswordGenerator]);

  return (
    <>
      <div className="w-full max-w-md mx-auto  shadow-md rounded-lg  px-6 py-10 my-8 text-orange-800 bg-gray-800">
        <h1 className="text-white text-center my-3">Paassword Generator</h1>

        <div className="flex shadow rounded-md w-96 overflow-hidden mb-4 h-8 bg-gray-300">
          <input
            type="text"
            value={password}
            className="outline-none w-full  px-4 mx-8 h-10"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button onClick ={copyPasswordToclipboard}className="outline-none bg-blue-500 text-white px-4 py-0.5 shrink-0">
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={5}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length:{length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              checked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>

          <div className="flex items-center gap-x-1 text-lg ">
            <input
              type="checkbox"
              checked={characterAllowed}
              id="characterInput"
              onChange={() => {
                setCharacterAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="characterInput">characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
