import React from 'react';
import { useLocation } from 'react-router';
import { IGenresListProps } from '../../interfaces/GenresListProps';
import Title from '../Title/Title';

const GenresList: React.FC<IGenresListProps> = ({ onClick }) => {
  const genres = [
    {
      id: 28,
      title: 'Action',
    },
    {
      id: 18,
      title: 'Dramma',
    },
    {
      id: 35,
      title: 'Komedy',
    },
  ];

  const location = useLocation();

  const handleChangeGanre = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onClick(event.target.value);
  };

  return (
    <div
      className={
        location.pathname === '/'
          ? 'mt-10 mb-10'
          : 'flex justify-between items-center mt-10 mb-10'
      }
    >
      <Title title={location.pathname.slice(1).toUpperCase()} />
      <div>
        <span className="text-white font-semibold text-3xl mr-2">
          Sort by Genre
        </span>
        <select
          className="bg-[#121212] border-slate-800 p-2 pl-6 pr-6 rounded-xl text-2xl outline-none text-white font-semibold"
          onChange={handleChangeGanre}
          defaultValue="Genre"
        >
          <option value="Genre" disabled hidden>
            Genre
          </option>
          {genres.map((genre) => (
            <option value={genre.id} key={genre.id}>
              {genre.title}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default GenresList;
