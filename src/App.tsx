import "./App.css";
// import AccomplishCard from "./ui/AccomplishCard";
import { useAccomplishments } from "./hooks/useAccomplishments";
import AddAccomplishButton from "./ui/AddAccomplishButton";
import { useState } from "react";
import AccomplishItemCard from "./ui/AccomplishItemCard";

function App() {
  const {
    accomplishments,
    top7,
    handleAdd,
    handleDelete,
    // handleAddToTop7
  } = useAccomplishments([
    { title: "Random Achievement", count: 1, id: "abcde" },
    { title: "Random Achievement", count: 1, id: "abcde" },
    { title: "Random Achievement", count: 1, id: "abcde" },
    { title: "Random Achievement", count: 1, id: "abcde" },
  ]);

  const [draftTitle, setDraftTitle] = useState("");
  console.log("Draft Title:", draftTitle);
  console.log("App:", accomplishments);

  // 🏆🏅🎯🌟
  return (
    <div>
      <h1>Setories</h1>

      <section id="accomplishments">
        <div className="section-header">
          <h3>Accomplishments: {accomplishments.length}</h3>
          <h3>Top 7: {top7.length}</h3>
        </div>
        <div className="container-grid">
          {accomplishments.map((accomplishment, index) => (
            <AccomplishItemCard
              key={index}
              index={index}
              accomplishment={accomplishment}
            />

            // <AccomplishCard
            //   key={index}
            //   index={index}
            //   accomplishment={accomplishment}
            //   handleDelete={handleDelete}
            //   handleAddToTop7={handleAddToTop7}
            //   setDraftTitle={setDraftTitle}
            // />
          ))}
          <AddAccomplishButton
            accomplishments={accomplishments}
            handleAdd={handleAdd}
            handleDelete={handleDelete}
            draftTitle={draftTitle}
            setDraftTitle={setDraftTitle}
          />
        </div>
      </section>
    </div>
  );
}

export default App;
