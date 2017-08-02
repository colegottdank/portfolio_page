import React from "react";
import "./section1styles.css";
import "semantic-ui-css/semantic.min.css";
import img from "../../images/selfies/ColeGottdank_copy.png";
import { Icon } from "semantic-ui-react";

/*
* Section1 contains both LeftHalf and RightHalf
*/
const Section1 = () =>
	<section className="section1-wrapper" id="landing">
		<div className="content-wrapper">
			<LeftHalf />
			<RightHalf />
		</div>
	</section>;

/*
* LeftHalf of Section1
*/
const LeftHalf = () =>
	<section className="lefthalf-wrapper">
		<img
			src={img}
			alt="Cartoon Selfie"
		/>
	</section>;

/*
* RightHalf of Section1
*/
const RightHalf = () =>
	<section className="righthalf-wrapper">
		<RightHalfTopHalf />
		<RightHalfBottomHalf />
	</section>;

/*
* TopHalf section of RightHalf 
*/
const RightHalfTopHalf = () =>
	<section className="righthalftophalf-wrapper">
		<div className="righthalftophalf-div">
			<h3>&lt;h1&gt;</h3>
			<h1>Who am I?</h1>
			<h3>&lt;/h1&gt;</h3>

			<hr />
			<p>
				I'm a frontend developer who prides myself on my ability to
				craft high-quality, modular, and scalable React.js code
				utilizing CSS Modules.
			</p>
			<Icon name="github" target="_blank" link={true} />
		</div>
	</section>;

/*
* BottomHalf section of RightHalf 
*/
const RightHalfBottomHalf = () =>
	<section className="righthalfbottomhalf-wrapper">
		<div className="righthalfbottomhalf-div">
			<h3>&lt;h1&gt;</h3>
			<h1>My specialities</h1>
			<h3>&lt;/h1&gt;</h3>

			<hr />
			<p>
				I specialize in crafting and optimizing all types of eCommerce
				websites. Crafting the highest-quality website the first time
				saves companies loads of maitence costs in the long-run.
			</p>
		</div>
	</section>;

export default Section1;
