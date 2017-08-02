import React from "react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar/index";
import Section1 from "./components/Section1/index";
import Section2 from "./components/Section2/index";
import Section3 from "./components/Section3/index";
import "./styles/app.css";

class App extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<section className="app-wrapper">
					<NavBar />
					<section className="section-wrapper">
						<Section1 />
						<Section2 />
						<Section3 />
					</section>
				</section>
			</BrowserRouter>
		);
	}
}

export default App;
