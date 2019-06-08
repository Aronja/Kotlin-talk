import React from 'react';
import {render} from 'react-dom';

import playground from 'kotlin-playground';

import './css/header.css'
import { Layout } from './Layout';

const title = 'Kotlin in the real world';
const app = document.getElementById("app")

const code = document.addEventListener('DOMContentLoaded', () => {
  playground('code'); 
});


render(
  <div>
  <Layout title="Kotlin in the real world" subtitle="a brief history..." name="DATACLASSES"></Layout>
  {/* <code data-output-height="2000" theme='darcula'>var hello = ""</code> */}
  </div>,
  app
);

