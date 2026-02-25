import React from "react";
const image_base_url = "https://image.tmdb.org/t/p/original";

function MovieCard({ movie, onClick }) {
  return (
    <img
      src={image_base_url + movie.poster_path}
      alt={movie.title || movie.name}
      loading="lazy"
      onClick={onClick}
      className="w-[110px] md:w-[200px] rounded-lg hover:border-[3px] border-gray-400 hover:scale-110 transition-all duration-150 ease-in-out cursor-pointer"
    />
  );
}

export default MovieCard;