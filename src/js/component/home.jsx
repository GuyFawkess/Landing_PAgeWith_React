import React from "react";
import NavBar from "../component/navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx";

//create your first component
const Home = () => {
	return (
		<>
			<NavBar />
			<main className="container mt-6">
				<div className="row">
					<div className="col-12">
						<Jumbotron
							title="Creado por Jason"
							description="Esto un texto random creado para el junbotron de la landing page. Y ademas añadir unos props para el proyecto"
							textBold="Esto es un texto en negrita que venía con el molde del jumbatron"
							linkLabel="Me encanta!!"
						/>
					</div>
					<div className="col-12 mt-4">
						<Card />
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
};

export default Home;
