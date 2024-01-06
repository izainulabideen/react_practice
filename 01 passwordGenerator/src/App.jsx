import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let str = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz';
    let pass = '';

    if(numberAllowed) str += '0123456789';
    if(charAllowed) str += '~`!@#$%^&*()_-+={[}]|\:;<>?/';

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)

      pass += str.charAt(char)
    }

    setPassword(pass) 
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, length);
    window.navigator.clipboard.writeText(password);
  }, [password]) 


  useEffect(()=>{
    (passwordGenerator())
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <div className="flex justify-center w-full my-4">
      <div className="max-w-md bg-slate-700 py-4 px-6 rounded-md">
        <h2 className="text-xl text-center text-white mb-4">
          Password Generator
        </h2>
        <div className="flex">
          <input
            type="text"
            className="flex w-full p-2 rounded-l-md outline-none"
            value={password}
            readOnly
            ref={passwordRef}
          />
          <button 
          onClick={copyPasswordToClipboard}
          className="bg-blue-800 text-white p-2 rounded-r-md">
            copy
          </button>
        </div>
        <div className="flex align-middle flex-wrap mt-4">
          <input
            type="range"
            value={length}
            min={6}
            max={64}
            name="passwordRange"
            className=""
            onChange={(e) => setLength(e.target.value)}
          />
          <label htmlFor="passwordRange" className="text-white mx-2">
            length ({length})
          </label>

          <input
            type="checkbox"
            name="numberAllowed"
            onChange={(e) => setNumberAllowed((prev) => !prev)}
          />
          <label className="text-white" htmlFor="numberAllowed">
            number
          </label>

          <input
            type="checkbox"
            name="charAllowed"
            onChange={(e) => setCharAllowed((prev) => !prev)}
          />
          <label className="text-white" htmlFor="charAllowed">
            special
          </label>
        </div>
      </div>
    </div>
  );
}

export default App;
