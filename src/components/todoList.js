import React from 'react';


function TodoList(props){
    console.log(props)
    return(
        <section>
            {props.todos.map((todo, index) => {
                return <div key={index} >
                    <h2>{todo}</h2>
                </div>
            })}
        </section>
    )
}

export default TodoList;