import React from "react";

const image_base_url = "https://image.tmdb.org/t/p/w500";

function MovieDetailsModal({ movie, onClose }) {
  if (!movie) return null;

  const title = movie.title || movie.name;
  const backdrop = movie.backdrop_path || movie.poster_path;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div className="relative max-w-3xl w-full mx-3 sm:mx-4 max-h-[90vh] rounded-2xl overflow-hidden sm:overflow-hidden bg-[#050816] border border-gray-700 shadow-2xl">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 px-2 py-1 text-xs rounded-full bg-black/70 text-gray-200 hover:bg-black"
        >
          ✕
        </button>

        {/* Image */}
        {backdrop && (
          <img
            src={image_base_url + backdrop}
            alt={title}
            loading="lazy"
            className="w-full h-44 sm:h-56 md:h-72 object-cover"
          />
        )}

        {/* Content */}
        <div className="p-4 md:p-6 text-white space-y-3 overflow-y-auto max-h-[calc(90vh-11rem)]">
          <h2 className="text-xl md:text-2xl font-bold">{title}</h2>

          {movie.overview && (
            <p className="text-sm md:text-base text-gray-200 max-h-32 overflow-y-auto">
              {movie.overview}
            </p>
          )}

          <div className="flex flex-wrap gap-3 text-xs md:text-sm text-gray-300">
            {movie.vote_average && (
              <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20">
                ⭐ Rating: {movie.vote_average.toFixed(1)}
              </span>
            )}
            {movie.release_date && (
              <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20">
                📅 {movie.release_date}
              </span>
            )}
            {movie.original_language && (
              <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20 uppercase">
                🌐 {movie.original_language}
              </span>
            )}
          </div>

          <button className="mt-2 inline-flex items-center justify-center px-4 py-2 rounded-full bg-white text-black font-semibold hover:bg-gray-200">
            ▶ Play
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieDetailsModal;
