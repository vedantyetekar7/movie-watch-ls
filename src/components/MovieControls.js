import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export default function MovieControls({ movie, type }) {
  const { removeMovieFromWatchList } = useContext(GlobalContext);

  return (
    <div>
      <div className="inner-card-controls">
        {type === "watchlist" && (
          <>
            <button className="ctrl-btn">
              <i className="fa-fw far fa-eye"></i>
            </button>

            <button
              className="ctrl-btn"
              onClick={() => removeMovieFromWatchList(movie.id)}
            >
              <i className="fa-fw fa fa-times"></i>
            </button>
          </>
        )}
      </div>
    </div>
  );
}
