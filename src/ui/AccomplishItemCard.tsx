import type { AccomplishCardProps } from "../types/accomplishment";

type CustomCardProps = Pick<AccomplishCardProps, "index" | "accomplishment">;

const AccomplishCard = ({ index, accomplishment }: CustomCardProps) => {
  return (
    <div key={accomplishment.id} className="card-accomplishments">
      <h4>{accomplishment?.title}</h4>
      <div className="card-footer">
        <span>({index})</span>
        <span>({accomplishment.id})</span>
      </div>
    </div>
  );
};

export default AccomplishCard;
