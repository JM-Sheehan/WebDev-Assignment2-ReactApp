import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";

const AddToWatchListButton = ({ movie }) => {

    return (
        <button
            type="button"
            className="btn w-100 btn-primary"
        >
            Add to  Watch List
        </button>
    );
};

export default AddToWatchListButton;