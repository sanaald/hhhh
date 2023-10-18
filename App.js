import React from 'react';
import SearchBox from './SearchBox';
import CardList from './CardList';
import {robots} from './robots';
import './App.css';
import Scroll from './Scroll';


class App extends React.Component {
	constructor() {
		super();
		this.state= {
			robots:[],
			searchfield: ''
		}
	}

	 componentDidMount(){
	 	fetch('https://jsonplaceholder.typicode.com/users').then(response => {
	 		return response.json();
	 	}).then(users => {
	 		this.setState({robots:users})


	 	})
	 }

	onSearchChange=(event)=> { 
		this.setState({searchfield:event.target.value});
		
	}

	render(){
		const filteredRobot = this.state.robots.filter(robots =>{
			return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase()
				);
		})
		if(this.state.robots.length=== 0){
			return <h1>Loadinggg</h1>
		}  else {
			 return ( 
				<div className='tc'>
			 <h1 className="f1">Robo friends</h1>
			 <SearchBox searchChange={this.onSearchChange}/>
			 <Scroll>
			 <CardList robots={filteredRobot}/>
			 </Scroll>
			 </div>
			);  
		}
		  }  

		

}

		export default App;


	
		
    
