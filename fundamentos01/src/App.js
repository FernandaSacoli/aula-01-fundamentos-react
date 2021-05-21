import React, {Component} from 'react'
import './App.css'
import Card from './components/layout/Card'
import Propriedades from './components/basico/Propriedades'
import OlaMundo from './components/basico/OlaMundo'

class App extends Component {
	
	render (){
	return (

	<div className="App" >
		<h1>Exemploes React</h1>
		<div className="Cards" >

		<Card título="Propriedades">
			<Propriedades nome="Homer" sobrenome="Jay Simpson" idade={38}/>
			</Card>

			<Card título="Olá Mundo!">
			<OlaMundo />
			</Card>

			</div>
			</div>
	)

	}
}

export default App;