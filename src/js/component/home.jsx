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
						<div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
							{/* Display cards in a responsive grid */}
							<div className="col">
								<Card
									cardTitle="Card Title"
									cardText="Some quick example text to build on the card title and make up the bulk of the card's content."
									linkLabel="Go somewhere"
									linkUrl="#"
									imgUrl="https://picsum.photos/200/?random=1"
								/>
							</div>
							<div className="col">
								<Card
									cardTitle="Card Title"
									cardText="Some quick example text to build on the card title and make up the bulk of the card's content."
									linkLabel="Go somewhere"
									linkUrl="#"
									imgUrl="https://picsum.photos/200/?random=2" />
							</div>
							<div className="col">
								<Card
									cardTitle="Card Title"
									cardText="Some quick example text to build on the card title and make up the bulk of the card's content."
									linkLabel="Go somewhere"
									linkUrl="#"
									imgUrl="https://picsum.photos/200/?random=3" />
							</div>
							<div className="col">
								<Card
									cardTitle="Card Title"
									cardText="Some quick example text to build on the card title and make up the bulk of the card's content."
									linkLabel="Go somewhere"
									linkUrl="#"
									imgUrl="https://picsum.photos/200/?random=4" />
							</div>
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
};

export default Home;
