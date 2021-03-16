import React, { useState, useContext } from "react";

import "../../styles/home.scss";

import Rating from "../component/rating.jsx";

export function Home() {
	let starsRating = [1, 2, 3, 4, 5];

	return (
		<div className="text-center mt-5">
			<h1>Hello Rigo!</h1>

			<span className="d-flex justify-content-center mr-1 pr-1">
				{starsRating.map((star, index) => {
					return (
						<Rating
							key={star}
							id={index + 1}
							// rating={rating}
							// onClick={addRating}
							// onMouseOver={() => setShowSolidIcon(true)}
							// onMouseLeave={() => setShowSolidIcon(false)}
						/>
					);
				})}
			</span>
		</div>
	);
}
