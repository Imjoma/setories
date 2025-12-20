import "./App.css";
import { useState } from "react";

type Accomplishment = {
  title: string;
  count: number;
  id: string;
};

function App() {
  const acc = [{ title: "Drawing Contest", count: 1, id: "1" }];
  const [accomplishments, setAccomplishment] = useState([...acc]);
  // 🏆🏅🎯🌟
  const [top7, setTop7] = useState<Accomplishment[]>([]);

  const countAccomplishments = accomplishments.length;
  const isMax = countAccomplishments < 20;
  const countTop7 = top7.length;

  const handleDelete = (indexToDelete: string) => {
    // Delete from accomplishments
    const newAccomplishments = accomplishments.filter(
      (item) => item.id !== indexToDelete
    );
    setAccomplishment(newAccomplishments);

    // Delete from Top 7
    const itemOnTop7 = top7.find((item) => item.id === indexToDelete);
    if (itemOnTop7) {
      const newTop7 = top7.filter((item) => item.id !== indexToDelete);
      setTop7(newTop7);
    }
  };

  const handleAddToTop7 = (indexToAdd: string) => {
    const itemToAdd = accomplishments.find((item) => item.id === indexToAdd);
    const itemToAddAlreadyInTop7 = top7.find((item) => item.id === indexToAdd);
    if (!itemToAdd || itemToAddAlreadyInTop7) return;
    setTop7((prev) => [...prev, itemToAdd]);
  };

  const generateRandomString = () => {
    return Math.random().toString(36).substring(2, 7);
  };

  return (
    <div>
      <h1>Setories</h1>

      <section id="accomplishments">
        <div className="section-header">
          <h3>Accomplishments: {countAccomplishments}</h3>
          <h3>Top 7: {countTop7}</h3>
        </div>
        <div className="container-grid">
          {accomplishments.map((accomplishment, index) => (
            <div key={index} className="card-accomplishments">
              <textarea
                placeholder="Your accomplishment was..."
                autoFocus
                maxLength={200}
                cols={3}
              >
                {accomplishment.title}
              </textarea>
              <span>({index})</span>
              <span>({accomplishment.id})</span>

              <button onClick={() => handleDelete(accomplishment.id)}>
                delete
              </button>
              <button onClick={() => handleAddToTop7(accomplishment.id)}>
                add
              </button>
            </div>
          ))}
          <button
            style={{ display: isMax ? "block" : "none" }}
            disabled={!isMax}
            onClick={() =>
              isMax &&
              setAccomplishment([
                ...accomplishments,
                {
                  title: "",
                  count: countAccomplishments + 1,
                  id: generateRandomString(),
                },
              ])
            }
            className="button-add-accomplishments"
          >
            +
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;
