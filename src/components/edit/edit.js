import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import { Button } from 'react-bootstrap';

import Header from "../header/header";
import Add from "../add/add";

class Edit extends Component {
	render(){
		return(
			<div>
				<Add />
				<Button bsStyle = "primary" bsSize = "large">Actualizar</Button>
			</div>
		);		
	}
}