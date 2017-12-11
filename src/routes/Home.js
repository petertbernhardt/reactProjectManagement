import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
	getListData = (key) => {
		return JSON.parse(localStorage.getItem(key));
	}

	setListData = (key, data) => {
		localStorage.setItem(key, JSON.stringify(data));
	}

	render () {
		// debug test data
		// projects
		// localStorage.setItem('projects', JSON.stringify([{'id': 1, 'name': 'Go to Mars'},{'id': 2, 'name': 'World Peace'},{'id': 3, 'name': 'Half Life 3'}]));
		const projects = this.getListData('projects');
		const projectList = projects.map((project) =>
			<li>
				<Link to={'/projects/' + project.id } activeClassName="active">{project.name}</Link>
			</li>
		);
		// managers
		// localStorage.setItem('managers', JSON.stringify([{'id': 1, 'name': 'Elon Musk'},{'id': 2, 'name': 'Gabe Newell'},{'id': 3, 'name': 'Emperor of Mankind'}]));
		const managers = this.getListData('managers');
		const managerList = managers.map((manager) =>
			<li>
				<Link to={'/managers/' + manager.id } activeClassName="active">{manager.name}</Link>
			</li>
		);
		// workers
		// localStorage.setItem('workers', JSON.stringify([{'id': 1, 'name': 'Bob'},{'id': 2, 'name': 'Scully'},{'id': 3, 'name': 'Hitchcock'}]));
		const workers = this.getListData('workers');
		const workerList = workers.map((worker) =>
			<li>
				<Link to={'/workers/' + worker.id } activeClassName="active">{worker.name}</Link>
			</li>
		);

		return (
			<div className="container">
				<h1>Home</h1>
				<div className="col-md-12">
					<div className="col-md-4 col-sm-6 col-xs-12">
						<h3>Projects</h3>
						<ul className="list">
							{projectList}
						</ul>
					</div>
					<div className="col-md-4 col-sm-6 col-xs-12">
						<h3>Managers</h3>
						<ul className="list">
							{managerList}
						</ul>
					</div>
					<div className="col-md-4 col-sm-6 col-xs-12">
						<h3>Workers</h3>
						<ul className="list">
							{workerList}
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

export default Home