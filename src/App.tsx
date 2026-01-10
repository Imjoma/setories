import "./App.css";
// import AccomplishCard from "./ui/AccomplishCard";
import { useAccomplishments } from "./hooks/useAccomplishments";

import AccomplishItemCard from "./ui/AccomplishItemCard";
import AccomplishmentForm from "./ui/AccomplishmentForm";
import RankingCanvas from "./ui/ranking/RankingCanvas";

function App() {
  const {
    accomplishments,
    top7,
    handleAdd,
    handleDelete,
    handleAddToTop7,
    moveUp,
    moveDown,
  } = useAccomplishments([]);

  console.log("App:", accomplishments);

  // ToDo:
  // ✍️ Write down: Only display the list of added accomplishments
  // 〽️ Rank: base on importance of how powerful those experience + Show action button
  // dropping the rest of the written accomplishment and move on with the remaining 7
  // 📑 Tell the story: write 7 stories on each accomplish + individually annotate similar keywords
  // 🧑‍💼 Potential career: Display's the words that repeat + a career google search that complements those keywords
  return (
    <div>
      <h1>Setories</h1>
      Write down - Rank - Tell the story - Potential career
      <section id="accomplishments">
        <div className="section-header">
          <h3>Accomplishments: {accomplishments.length}</h3>
          <h3>Top 7: {top7.length}</h3>
        </div>
        {/* Form */}
        <AccomplishmentForm
          handleAdd={handleAdd}
          count={accomplishments.length}
        />

        {/* Grid Container */}
        <div className="container-grid">
          {accomplishments.map((accomplishment, index) => (
            <AccomplishItemCard
              key={accomplishment.id}
              index={index}
              accomplishment={accomplishment}
              handleDelete={handleDelete}
              handleAddToTop7={handleAddToTop7}
              moveUp={moveUp}
              moveDown={moveDown}
            />
          ))}
        </div>

        {/* Ranking */}
        <RankingCanvas rankingItems={accomplishments} />
      </section>
    </div>
  );
}

export default App;
