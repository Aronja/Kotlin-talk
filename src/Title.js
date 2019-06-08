import React from 'react';

export const Title = (props) => {
    console.log(props)
    return (
    <div className="title">
        <h1>{props.title}</h1>
    </div>
    )
}