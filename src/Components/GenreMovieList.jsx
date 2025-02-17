import React from "react";
import GenresList from "../Constant/GenresList";
import MovieList from "./MovieList";

function GenreMovieList() {
  return (
    <div>
      {GenresList.genere.map(
        (item, index) =>
          index <= 9 && (
            <div className="p-5 px-16 md:px-16">
              <h2 className="text-[20px] font-bold">{item.name}</h2>
              <MovieList genreId={item.id} index_={index} />
            </div>
          )
      )}
    </div>
  );
}

export default GenreMovieList;
