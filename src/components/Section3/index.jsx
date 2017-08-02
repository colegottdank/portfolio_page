import React from "react";
import Slider from "react-slick";
import "./section3styles.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const Section3 = () =>
	<section className="section3-wrapper" id="portfolio">
		<SimpleSlider />
	</section>;

class SimpleSlider extends React.Component {
	render() {
		const settings = {
			className: "centered",
			centerMode: true,
			dots: true,
			arrows: true,
			slidesToShow: 3,
			slidesToScroll: 1,
			initialSlide: 0,
			infinite: true,
			speed: 1000,
			focusOnSelect: true,
			useCSS: true,
			responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1
				}
			}
			]
		};
		return (
			<section className="simpleslider-wrapper" id="mywork">
				<Slider {...settings}>
					<div>
						<img
							className="portfolio-piece"
							src=""
							alt="portfolio piece"
						/>
					</div>
					<div>
						<img
							className="portfolio-piece"
							src=""
							alt="portfolio piece"
						/>
					</div>
					<div>
						<img
							className="portfolio-piece"
							src=""
							alt="portfolio piece"
						/>
					</div>
					<div>
						<img
							className="portfolio-piece"
							src=""
							alt="portfolio piece"
						/>
					</div>
					<div>
						<img
							className="portfolio-piece"
							src=""
							alt="portfolio piece"
						/>
					</div>
					<div>
						<img
							className="portfolio-piece"
							src=""
							alt="portfolio piece"
						/>
					</div>
					<div>
						<img
							className="portfolio-piece"
							src=""
							alt="portfolio piece"
						/>
					</div>
					<div>
						<img
							className="portfolio-piece"
							src=""
							alt="portfolio piece"
						/>
					</div>
					<div>
						<img
							className="portfolio-piece"
							src=""
							alt="portfolio piece"
						/>
					</div>
					<div>
						<img
							className="portfolio-piece"
							src=""
							alt="portfolio piece"
						/>
					</div>
				</Slider>
			</section>
		);
	}
}

export default Section3;
