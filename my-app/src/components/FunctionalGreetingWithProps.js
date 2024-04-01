import React from "react";

function FunctionalGreetingWithProps(props) {
    return <h1>Hello {props.greeting} {props.name} {props.age}</h1>
}

export default FunctionalGreetingWithProps;