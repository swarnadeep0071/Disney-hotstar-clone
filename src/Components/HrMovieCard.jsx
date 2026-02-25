import React from "react";
const image_base_url = "https://image.tmdb.org/t/p/original";

function HrMovieCard({ movie, onClick }) {
  return (
    <section
      className="hover:scale-110 transition-all duration-150 ease-in-out cursor-pointer"
      onClick={onClick}
    >
      <img
        src={image_base_url + movie.backdrop_path}
        alt={movie.title || movie.name}
        loading="lazy"
        className="w-[110px] md:w-[260px] rounded-lg hover:border-[3px] border-gray-400"
      />
      <h2 className="w-[110px] md:w-[260px] mt-2 font-semibold text-center">
        {movie.title || movie.name}
      </h2>
    </section>
  );
}

export default HrMovieCard;