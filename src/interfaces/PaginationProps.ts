import React from 'react';

export interface IPaginationProps {
  page: number;
  totalPages: number | null;
  setPage: (page: number) => void;
  scrollElement: React.RefObject<HTMLDivElement>;
}
