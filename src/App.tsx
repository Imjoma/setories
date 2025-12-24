import "./App.css";
// import AccomplishCard from "./ui/AccomplishCard";
import { useAccomplishments } from "./hooks/useAccomplishments";

import AccomplishItemCard from "./ui/AccomplishItemCard";
import AccomplishmentForm from "./ui/AccomplishmentForm";

function App() {
  const { accomplishments, top7, handleAdd, handleDelete, handleAddToTop7 } =
    useAccomplishments([]);

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
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
