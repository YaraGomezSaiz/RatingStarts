import React, { useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";

//Import Store,actions
import { Context } from "../store/appContext.js";

// Import Boostrap components
//include bootstrap npm library into the bundle
import "bootstrap/dist/css/bootstrap.css";
import Button from "react-bootstrap/Button";

export default function Rating(props) {
	const [ratingOn, setRatingOn] = useState(false);
	const [showSolidIcon, setRatingHover] = useState(false);
	const { store, actions } = useContext(Context);

	function addRating() {
		let index = 0;
		setRatingOn(!ratingOn);

		if (ratingOn === false) {
			if (store.rating < props.id) {
				actions.setRating(props.id);
			}
		} else {
			if ((store.rating = props.id)) {
				if (store.rating != 0) {
					index = props.id - 1;
				} else {
					index = props.id;
				}
				actions.setRating(index);
			}
		}
	}

	useEffect(
		() => {
			if (store.rating >= props.id) {
				setRatingOn(true);
			} else {
				setRatingOn(false);
			}
		},
		[store.rating]
	);

	function addHover() {
		let index = 0;
		console.log(showSolidIcon);
		if (showSolidIcon === false) {
			if (store.ratingHover <= props.id) {
				actions.setRatingHover(props.id);
			}
		} else {
			if ((store.ratingHover = props.id)) {
				index = props.id;
			}
			actions.setRatingHover(index);
		}
	}

	function removeHover() {
		actions.setRatingHover(0);
	}

	useEffect(
		() => {
			if (store.ratingHover >= props.id) {
				setRatingHover(true);
			} else {
				setRatingHover(false);
			}
		},
		[store.ratingHover]
	);

	return (
		<div>
			<Button
				className="p-0"
				variant="border-0"
				onClick={addRating}
				onMouseOver={addHover}
				onMouseLeave={removeHover}>
				{ratingOn === true || showSolidIcon === true ? (
					<i className="fas fa-star" />
				) : (
					<i className="far fa-star" />
				)}
			</Button>
		</div>
	);
}

Rating.propTypes = {
	id: PropTypes.number
};
