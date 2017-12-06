import React from 'react';

const Home = () => (
	<div className="container">
		<h1>Home</h1>
		<h3>Projects</h3>
		<div className="col-md-12">
			<ul className="list col-md-4">
				<li>Go to Mars</li>
				<li>World Peace</li>
				<li>Half Life 3</li>
			</ul>
			<h3>Managers</h3>
			<ul className="list col-md-4">
				<li>Elon Musk</li>
				<li>Gabe Newell</li>
				<li>Emperor of Mankind</li>
			</ul>
			<h3>Workers</h3>
			<ul className="list col-md-4">
				<li>Bob</li>
				<li>Scully</li>
				<li>Hitchcock</li>
			</ul>
		</div>
	</div>
);

export default Home