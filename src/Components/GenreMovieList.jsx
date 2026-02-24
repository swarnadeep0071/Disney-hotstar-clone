import React from "react";
import GenresList from "../Constant/GenresList";
import MovieList from "./MovieList";

function GenreMovieList({searchQuery}) {
  return (
    <div>
      {GenresList.genere.map(
        (item, index) =>
          index <= 9 && (
            <div
  key={item.id}
  className="px-4 py-4 md:px-16 md:py-5"
>
              <h2 className="text-[18px] md:text-[20px] font-bold">{item.name}</h2>
              <MovieList
                genreId={item.id}
                index_={index}
                searchQuery={searchQuery}
              />
            </div>
          )
      )}
    </div>
  );
}

export default GenreMovieList;
