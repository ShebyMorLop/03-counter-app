import PrimeraApp from "./PrimeraApp";
import React from "react";
import ReactDom from 'react-dom';
import CounterApp from './CounterApp'
import './index.css'

const divRoot = document.querySelector('#app');

ReactDom.render(<CounterApp />, divRoot);
//ReactDom.render(<PrimeraApp saludo='Hola, soy Sebas' />, divRoot);