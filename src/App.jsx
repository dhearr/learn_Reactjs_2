import { useState } from "react";
import Judul from "./components/Judul";

function App() {
  const students = ["dhea", "afani", "hendarin"];
  const [likes, setLikes] = useState(0);

  function handleClickPlus() {
    setLikes(likes + 1);
  }

  function handleClickMin() {
    setLikes(likes - 1);
  }

  function resetClick() {
    setLikes(0);
  }

  return (
    <>
      <Judul />
      <ul>
        {students.map((student) => (
          <li key={student}>{student}</li>
        ))}
      </ul>
      <button onClick={handleClickPlus}>+</button>
      <div>{likes}</div>
      <button onClick={handleClickMin}>-</button>
      <button onClick={resetClick}>reset</button>
    </>
  );
}

export default App;
