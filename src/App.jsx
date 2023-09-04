import { useState } from "react";
import data from "./data";
import List from "./list";

const App = () => {
  const [people, setpeople] = useState(data);

  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
      </section>
    </main>
  );
};
export default App;
