import React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components'


const Tableaux = () => {

	const [visibilite, setVisibilite] = useState(false);

	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [clients, setClients] = useState([]);
  
	useEffect(() => {
	  fetch("http://localhost:5000/client")
		.then(res => res.json())
		.then(
			(result) => {
				setIsLoaded(true);
				setClients(result);
				console.log(result, 'okok')
		  },
		  (error) => {
			setIsLoaded(true);
			setError(error);
		  }
		)
	}, []);

	if (error) {
		return <div>Erreur : {error.message}</div>;
	}
	else if (!isLoaded) {
		return <div>Chargement...</div>;
	}
	else{
	return(
		<div>
			<Button onClick={()=>{setVisibilite(!visibilite)}}>Voir infos clients</Button>
			<Table visibilite={visibilite}>
				<thead>
					<tr>
						<th>Nom</th>
						<th>Prénom</th>
						<th>Age</th>
					</tr>
				</thead>
				<tbody>
			{clients.map (client =>
				<tr key = {client.id}>
					<td>{client.firstName}</td>
					<td>{client.lastName}</td>
					<td>{client.age}</td>
				</tr> 
					)}
					</tbody>
			</Table>
		</div>
	)
}
}

const Table = styled.table`
margin: 30vh 30vw;
display: ${({visibilite}) => visibilite? 'table' : 'none'};

th{
width : 10rem;
border: 2px black solid;
background-color: #E1715F;
}

tr{
	text-align: center;
	background-color: #32D4B8;
}
`

const Button = styled.button`
/* display: ${({visibilite}) => visibilite? 'none' : 'block'} */
padding: 1rem 2rem;
background-color: #CBFEDB;
color:#933F43;
border-radius:8px;
cursor:pointer;
`
export default Tableaux