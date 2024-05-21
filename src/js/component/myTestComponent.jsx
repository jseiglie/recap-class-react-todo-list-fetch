import React, { useState, useEffect } from "react";
import { OtherComponent } from "./otherOne.jsx";

//its function
//PascalCase ---> all words goes with Capital Letters
//we need to export our components

/*

const obj = {
    name: "pepe",
    age: 55
}

destructuring

const {name, age} = obj

*/

//props --->
//props with destructure
// const MyTestComponent = ({name, tech, company, age, receivedData}) => {
//props is an OBJECT

const MyTestComponent = (props) => {
    // console.log("this is props object", props)


    // console.log(props.tech)
    // console.log(props["age"])

    // console.log(props.bloodType)



    // const obj = {
    //     name: "pepe",
    //     age: 55
    // }

    // for (let el in obj) {
    //     //i want to access the "el" prop of the obj
    //     console.log("for in",obj[el])
    // }


    const sayHi = (e) => console.log("hi!" + e.target.innerHTML)
    const [blue, setBlue] = useState(false)

    useEffect(() => {
        console.log("useEffect happen when blue got modified")
    }, [blue])

    // const [variable, setVariable] = useState()
    const [age, setAge] = useState(55)
    console.log("this is running on MyTestcomponent")
    //const {name, tech, company, age, receivedData} = props
    // console.log("destructuring --> ", name, tech, company, age, receivedData)
    return (
        <div className={blue ? "bg-primary" : "bg-warning"}>

            <button onClick={sayHi}>change to 33</button>

            <p> current age: {age}
            </p>
            <p>type new age</p>
            <input type="text" onChange={e => setAge(e.target.value)} />
            <p>
                This is my test components showing the tech the name uses
            </p>
            <p>name: {props.name} uses the tech: {props.tech}  as his go to language</p>


            {!blue ? <button onClick={() => setBlue(true)}>turn it blue</button> : <p>blue is nice, keep it</p>}

            <div>

                {/* calling a component from a component */}
                <OtherComponent />
            </div>
        </div>
    )
}

//default export
export default MyTestComponent