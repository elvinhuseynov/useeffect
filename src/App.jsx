import { Child } from "./Child";
import { useEffect, useState } from "react";

function App() {
  const [number, setNumber] = useState(0);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (number % 2 === 0) {
      setMessage("2ye tam bolunur");
    }
    if (number % 3 === 0) {
      setMessage("3e tam bolunur");
    }
    if (number % 6 === 0) {
      setMessage("her 2ne tam bolunur");
    }
      
  }, [number]);

  return (
    <>
      <input
        type="number"
        onChange={(e) => {
          setNumber(e.target.value);
        }}
        value={number}
      />
      {message}
    </>
  );
}

export default App;
