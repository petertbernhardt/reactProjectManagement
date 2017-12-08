import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
	<div className="container">
		<h1>Home</h1>
		<div className="col-md-12">
			<div className="col-md-4 col-sm-6 col-xs-12">
				<h3>Projects</h3>
				<ul className="list">
					<li>
        				<Link to={'/projects/1'} activeClassName="active">Go to Mars</Link>
					</li>
					<li>
        				<Link to={'/projects/2'} activeClassName="active">World Peace</Link>
    				</li>
					<li>
        				<Link to={'/projects/3'} activeClassName="active">Half Life 3</Link>
    				</li>
				</ul>
			</div>
			<div className="col-md-4 col-sm-6 col-xs-12">
				<h3>Managers</h3>
				<ul className="list">
					<li>
        				<Link to={'/managers/1'} activeClassName="active">Elon Musk</Link>
        			</li>
					<li>
        				<Link to={'/managers/2'} activeClassName="active">Gabe Newell</Link>
        			</li>
					<li>
        				<Link to={'/managers/3'} activeClassName="active">Emperor of Mankind</Link>
        			</li>
				</ul>
			</div>
			<div className="col-md-4 col-sm-6 col-xs-12">
				<h3>Workers</h3>
				<ul className="list">
					<li>
        				<Link to={'/workers/1'} activeClassName="active">Bob</Link>
    				</li>
					<li>
        				<Link to={'/workers/2'} activeClassName="active">Scully</Link>
        			</li>
					<li>
        				<Link to={'/workers/3'} activeClassName="active">Hitchcock</Link>
        			</li>
				</ul>
			</div>
		</div>
	</div>
);

export default Home