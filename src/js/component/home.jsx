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
						<Jumbotron />
					</div>
					<div className="col-12 mt-4">
						<div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
							{/* Display cards in a responsive grid */}
							<div className="col">
								<Card />
							</div>
							<div className="col">
								<Card />
							</div>
							<div className="col">
								<Card />
							</div>
							<div className="col">
								<Card />
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
