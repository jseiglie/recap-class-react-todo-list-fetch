import React, { useState, useEffect } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import MyTestComponent from "./myTestComponent.jsx";
import { OtherComponent } from "./otherOne.jsx";
//create your first component
const Home = () => {
	const [todoList, setTodoList] = useState([]);
	const [task, setTask] = useState("")

	//useEffect ---> 
	//callback function
	//			function, array of dependencies
	useEffect(() => {
		getData()
	}, [])

	//async function
	//you need the ASYNC 
	const getData = async () => {
		try {
			//with await, you specify what will be js waiting for
			const resp = await fetch("https://playground.4geeks.com/todo/users/seiglie")
			if (resp.status == 404) {
				createUser();
			}
			else {
				const data = await resp.json()
				return setTodoList(data)
			}
		} catch (error) {
			console.log(error)
		}
	}

	const createUser = async () => {
		try {
			//with await, you specify what will be js waiting for
			const resp = await fetch("https://playground.4geeks.com/todo/users/seiglie", {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				}
			})
			const data = await resp.json()
			console.log(data)
		} catch (error) {
			console.log(error)
		}
	}

	const addTodo = async () => {
		try {
			//with await, you specify what will be js waiting for
			const resp = await fetch("https://playground.4geeks.com/todo/todos/seiglie", {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					label: task,
					done: false
				})
			})
			const data = await resp.json()
			console.log(data)
			getData();
		} catch (error) {
			console.log(error)
		}
	}

	const deleteTodo = async (id) => {
		try {
			//with await, you specify what will be js waiting for
			const resp = await fetch("https://playground.4geeks.com/todo/todos/" + id, {
				method: "DELETE",
				headers: {
					"Content-Type": "application/json"
				}
			})
			return getData();

		} catch (error) {
			console.log(error)
		}
	}


	//fetch
	/*
	4 methods:
	C -> CRETE ---> POST
	R -> READ   ---> default ---> GET
	U -> UPDATE --> PUT
	D -> DELETE --> DELETE

	syntax
	const opt = {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({})
	}
	fetch(url, opt)




	*/




	//to make something when a state(s) changes
	//to make something when the component loads




	//95% your variables are going to be STATES
	const [name, setName] = useState("pepe")




	const handleSubmit = e => {
		e.preventDefault();
		addTodo();
		setTask("");
	}



	return (
		<div className="text-center">
			<form onSubmit={handleSubmit}>
				<input type="text" onChange={e => setTask(e.target.value)} />
				<ul>
					{todoList.todos?.map(el => <p key={el.id} >{el.label} <span onClick={() => deleteTodo(el.id)}>X</span></p>)}
				</ul>
			</form>
		</div>
	);
};

export default Home;
