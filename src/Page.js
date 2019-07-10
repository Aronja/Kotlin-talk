import React from 'react';

import {Code} from './Code';
import {Content} from './Content';
import {Subtitle} from './Subtitle';


export const Page = (props) => {
  console.log(props.pageProperties.CODE)

  return (
    <div>
      <Subtitle title={props.pageProperties.TITLE}></Subtitle>
      <Content content={props.pageProperties.CONTENT}></Content>
      <br></br>
      <Code/>
    </div>
  )
}