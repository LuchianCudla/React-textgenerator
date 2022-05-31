import { useState } from "react";
import { data } from "./data";
import "./index.css";
const App = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    count > 0 && count <= data.length
      ? setText(data.slice(0, +count))
      : setText(data.slice(0, 1));
  };

  return (
    <section className="section-center">
      <h3 className="title">Text Generator</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="amount">paragraphs:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={count}
          onChange={(e) => {
            setCount(e.target.value);
          }}
        />

        <button type="submit" className="btn">
          Generate
        </button>
      </form>
      <article className="text">
        {text.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </article>
    </section>
  );
};

export default App;
