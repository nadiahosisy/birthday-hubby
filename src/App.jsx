import { useState } from "react";
import List from "./list";
import data from "./data";

const App = () => {
  const [people, setpeople] = useState(data);

  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <button
          type="button"
          className="btn btn-block"
          onClick={() => setpeople([])}
        >
          clear all
        </button>
      </section>
    </main>
  );
};
export default App;
