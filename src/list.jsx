import person from "./person";

const list = ({ people }) => {
  return (
    <section>
      {people.map((person) => {
        return <person key={person.id} {...person} />;
      })}
    </section>
  );
};

export default list;
