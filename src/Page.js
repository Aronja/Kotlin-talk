import React from 'react';

import {Code} from './Code';
import {Content} from './Content';
import {Subtitle} from './Subtitle';
import {Formgenerator} from "./Formgenerator";


export const Page = (props) => {
  console.log("here", props.pageProperties);

  return (
    <div>
      <Subtitle title={props.pageProperties.TITLE}></Subtitle>
      <Content content={props.pageProperties.CONTENT}></Content>
      <br></br>
      <Code/>
      {props.pageProperties.FORM ? <Formgenerator form={props}/> : <div>no form</div>}
    </div>
  )
}