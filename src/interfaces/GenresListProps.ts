export interface IGenresListProps {
  onClick: (genre: string) => Promise<void>;
  value: string;
}
