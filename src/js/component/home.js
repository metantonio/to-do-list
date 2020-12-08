import React, { useState } from "react";
import "bootstrap";

//import List from "./list.js";

//create your first component
const Home = () => {
	const [tarea, guardarTarea] = useState("");
	const [lista, guardarLista] = useState([]);
	const deleteItems = indexItem => {
		guardarLista(prevState =>
			prevState.filter((todo, index) => index !== indexItem)
		);
	};

	return (
		<>
			<div className="container-fluid col-8">
				<h1 className="text-center">To Do List</h1>

				<div className="card">
					<input
						placeholder="escribir nueva tarea"
						value={tarea}
						onKeyDown={e => {
							if (e.keyCode == "13") {
								let mostrarLista = [];
								for (let i = 0; i < lista.length; i++) {
									mostrarLista.push(lista[i]);
								}
								mostrarLista.push(tarea);
								guardarLista(mostrarLista);
								guardarTarea((e.target.value = ""));
							}
						}}
						onChange={e => {
							guardarTarea(e.target.value);
						}}
						type="text"
					/>
					<ul className="list-group list-group-flush">
						{lista.map((cosas, index) => {
							return (
								<>
									<li
										key={index}
										className="list-group-item d-flex justify-content-between">
										{cosas}
										<button
											className="btn btn-light"
											onClick={e => {
												deleteItems(index);
											}}>
											<i
												className="fa fa-times"
												aria-hidden="true"
											/>
										</button>
									</li>
								</>
							);
						})}
					</ul>
					<p className="card-footer text-muted">
						{lista.length} tareas por realizar
					</p>
				</div>
			</div>
		</>
	);
};
export default Home;
//corregido 8-12-20
