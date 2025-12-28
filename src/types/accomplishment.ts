// types folder is for TypeScript type definitions

export type Accomplishment = {
  title: string;
  count: number;
  id: string;
  likelihood?: number;
};

export interface AccomplishCardProps {
  index: number;
  accomplishment: Accomplishment;
  handleDelete: (id: string) => void;
  handleAddToTop7: (id: string) => void;
  handleAdd: (accomplishment: Accomplishment) => void;
}
