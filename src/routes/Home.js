import React from 'react';

const Home = () => (
	<div className="container">
		<h1>Home</h1>
		<div className="col-md-12">
			<div className="col-md-4 col-sm-6 col-xs-12">
				<h3>Projects</h3>
				<ul className="list">
					<li>Go to Mars</li>
					<li>World Peace</li>
					<li>Half Life 3</li>
				</ul>
			</div>
			<div className="col-md-4 col-sm-6 col-xs-12">
				<h3>Managers</h3>
				<ul className="list">
					<li>Elon Musk</li>
					<li>Gabe Newell</li>
					<li>Emperor of Mankind</li>
				</ul>
			</div>
			<div className="col-md-4 col-sm-6 col-xs-12">
				<h3>Workers</h3>
				<ul className="list">
					<li>Bob</li>
					<li>Scully</li>
					<li>Hitchcock</li>
				</ul>
			</div>
		</div>
	</div>
);

export default Home