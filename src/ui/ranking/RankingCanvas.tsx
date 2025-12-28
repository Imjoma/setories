import useToggler from "../../hooks/useToggler";

const RankingCanvas = () => {
  const [value, toggleValue] = useToggler(false);

  if (!value)
    return <button onClick={() => toggleValue(true)}>Start ranking</button>;

  return (
    <div onClick={() => toggleValue(false)} className="ranking-background">
      <div className="ranking-container">
        <h1> {value.toString()}</h1>
      </div>
    </div>
  );
};

export default RankingCanvas;
