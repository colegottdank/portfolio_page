import React from "react";
import Velocity from "velocity-animate";
import "./section2styles.css";

class Section2 extends React.Component {
	scroll(event, offset=0) {
		Velocity(document.getElementById(event), "scroll", {
			duration: 1000,
			easing: "easeInBack",
			offset: offset
		});
	}
	render() {
		return (
			<section className="section2-wrapper">
			<div className="content-wrapper">
				<Skills />
				</div>
			</section>
		);
	}
}

const skills = [
	{
		name: "Production scale web development",
		desc: "As a React.js programmer , I'm able to craft"
	},
	{
		name: "eCommerce",
		desc: "I can do this for eCommerce..."
	},
	{
		name: "Production Scale Web Development",
		desc: "As a React.js programmer, I'm able to craft"
	},
	{
		name: "Production Scale Web Development",
		desc: "As a React.js programmer, I'm able to craft"
	},
	{
		name: "Production Scale Web Development",
		desc: "As a React.js programmer, I'm able to craft"
	},
	{
		name: "Production Scale Web Development",
		desc: "As a React.js programmer, I'm able to craft"
	},
	{
		name: "Production Scale Web Development",
		desc: "As a React.js programmer, I'm able to craft"
	},
	{
		name: "Production Scale Web Development",
		desc: "As a React.js programmer, I'm able to craft"
	}
];

const Skills = () =>
	<section className="skills-wrapper">
		<div className="allskills-wrapper-div" id="myexpertise">
			<div className="skills-wrapper-div1">
				<div className="skills-div skill-div">
					<h1 className="skills-h1">
						{skills[0].name}
					</h1>
					<p className="skills-p">
						{skills[0].desc}
					</p>
				</div>

				<div className="skills-div2 skill-div">
					<h1 className="skills-h1">
						{skills[1].name}
					</h1>
					<p className="skills-p">
						{skills[2].desc}
					</p>
				</div>
			</div>

			<div className="skills-div3 skill-div">
				<h1 className="skills-h1">
					{skills[3].name}
				</h1>
				<p className="skills-p">
					{skills[3].desc}
				</p>
			</div>

			<div className="skills-wrapper-div2">
				<div className="skills-wrapper-div3">
					<div className="skills-div4 skill-div">
						<h1 className="skills-h1">
							{skills[4].name}
						</h1>
						<p className="skills-p">
							{skills[4].desc}
						</p>
					</div>

					<div className="skills-div5 skill-div">
						<h1 className="skills-h1">
							{skills[5].name}
						</h1>
						<p className="skills-p">
							{skills[5].desc}
						</p>
					</div>
				</div>
				<div className="skills-div6 skill-div">
					<h1 className="skills-h1">
						{skills[6].name}
					</h1>
					<p className="skills-p">
						{skills[6].desc}
					</p>
				</div>
			</div>
		</div>
	</section>;

export default Section2;
