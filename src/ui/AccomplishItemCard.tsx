import type { AccomplishCardProps } from "../types/accomplishment";

type CustomCardProps = Pick<
  AccomplishCardProps,
  "index" | "accomplishment" | "handleDelete" | "handleAddToTop7"
>;

const AccomplishItemCard = ({
  index,
  accomplishment,
  handleDelete,
  handleAddToTop7,
}: CustomCardProps) => {
  return (
    <div className="card-accomplishments">
      <h4>{accomplishment?.title}</h4>
      <div className="card-footer">
        <div className="card-footer-info">
          <span>(Index: {index})</span>
          <span>(Count: {accomplishment.count})</span>
          <span>({accomplishment.id})</span>
        </div>
        <div className="card-footer-actions">
          <button onClick={() => handleAddToTop7(accomplishment.id)}>
            Add
          </button>
          <button onClick={() => handleDelete(accomplishment.id)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccomplishItemCard;
