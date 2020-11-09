import React, { useState } from "react";

function Likes(props) {
    const randomLikes = Math.floor(Math.random() * 100);

    const [counterLikes, setCounterLikes] = useState(randomLikes);

    function handleClick(e) {
        // console.log(e.target.name); //like dislike

        e.target.name === "like"
            ? setCounterLikes(counterLikes + 1)
            : setCounterLikes(counterLikes - 1);
    }

    return (
        <div>
            <button name="like" className="btnLikes" onClick={handleClick}>
                👍
            </button>
            <button name="dislike" className="btnLikes" onClick={handleClick}>
                👎
            </button>
            <span>{counterLikes}</span>
        </div>
    );
}

export default Likes;
