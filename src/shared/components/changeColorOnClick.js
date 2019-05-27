import React from "react";

export const ChangeColorOnClick = () => {
	/**
	 * Text Color Changer
	 * Changes the color of the paragraph text
	 **/
	const textColor = e => {
		document.getElementById("text-color").style.color = "fuchsia";
	};

	/**
	 * Reset Text Color
	 * Resets the color of the paragraph text
	 **/
	const resetTextColor = () => {
		document.getElementById("text-color").style.color = "";
	};
	return (
		<section>
			<div id="text-color">
				<h2>My Kitty :D</h2>
				<p>
					Spit up on light gray carpet instead of adjacent linoleum spot
					something, big eyes, big eyes, crouch, shake butt, prepare to pounce
					for eat prawns daintily with a claw then lick paws clean wash down
					prawns with a lap of carnation milk then retire to the warmest spot on
					the couch to claw at the fabric before taking a catnap but refuse to
					leave cardboard box. Touch water with paw then recoil in horror eat
					owner's food but lay on arms while you're using the keyboard for play
					time, yet immediately regret falling into bathtub i am the best.
				</p>
			</div>
			<button className="btn btn-primary px-1" onClick={textColor}>
				Change Color
			</button>
			<button className="btn btn-primary px-1" onClick={resetTextColor}>
				Reset Color
			</button>
		</section>
	);
};