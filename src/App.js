import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.componet';
import './App.css';

class App extends Component {
	state = {
		monsters: [],
		searchField: ''
	};
	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((res) => res.json())
			.then((data) => this.setState({ monsters: data }));
	}
	onSearchChange = event => {
		this.setState({ searchField: event.target.value });
	  };

	render() {
		const { monsters, searchField } = this.state;
		const filterMonsters = monsters.filter((monster) =>
			monster.name.toLowerCase().includes(searchField.toLowerCase())
		);
		return (
			<div className="App">
				<h1> Monster Rolodex </h1>
				<SearchBox
					placeholder="search monster"
					onSearchChange={this.onSearchChange}
				/>
				<CardList monsters={filterMonsters} />
			</div>
		);
	}
}

export default App;
