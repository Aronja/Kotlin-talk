import React from 'react';
import { Title } from "./Title";
import logo from "./img/XConf.png"

export const Header = (props) => {
    return (<div className="header">
        <div >
        <Title title={props.title}></Title>
        <img className="logo" src={logo} width="250" right= "0"/>
        </div>
    </div>)
} 