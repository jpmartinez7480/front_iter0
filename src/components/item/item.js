import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class Item extends Component{
	state = {
		code_1: '',
		name_1:'',
		expirationDate_1:'',
		category_1:''
	}	


	editProduct = () => {
		this.setState({
			code_1:this.props.code,
			name_1:this.props.name,
			expirationDate_1:this.props.expirationDate,
			category_1:this.props.category
		});
		
	}

	componentDidMount(){
		this.editProduct()
	}

	render(){
		return(
			<tr>
				<td>{this.props.it}</td>
				<td>{this.props.code}</td>
				<td>{this.props.name}</td>
				<td>{this.props.expirationDate}</td>
				{this.props.category === 1 ?
					<td>{"Importado"}</td> : <td>{"Nacional"}</td>
				}
				
				<td>{this.props.cost}</td>
				<td>
					<Button bsStyle = "primary" bsSize = "xsmall" style = {{marginRight: 5 + 'px'}}  onClick = {this.editProduct}><i className = "fa fa-edit"></i> editar</Button> 
					<Button bsStyle = "danger" bsSize = "xsmall"><i className = "fa fa-trash"></i> borrar</Button>
				</td>
			</tr>
			
		);
	}
}

export default Item;