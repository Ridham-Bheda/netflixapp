import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Card from "./Cards";

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
  
root.render(
  <>
  <h1 className='heading_style'>List of Top 5 Netflix Series in 2022 </h1>
  <Card
  imgsrc="https://wallpapercave.com/wp/wp4056410.jpg"
  title="A Netflix Original Series"
  sname="DARK"
  link="https://www.netflix.com/in/title/80100172"
  />
  <Card
  imgsrc="https://th.bing.com/th/id/OIP.uqxu302SRkmMqs0HsYb4eQHaFi?w=226&h=180&c=7&r=0&o=5&pid=1.7"
  title="A Netflix Original Series"
  sname="Extra Curricular"
  link="https://www.netflix.com/in/title/80990668"
  />
  <Card
  imgsrc="https://th.bing.com/th/id/OIP.0vUe9O5FXi5TgXPA-gedrQHaEL?w=332&h=187&c=7&r=0&o=5&pid=1.7"
  title="A Netflix Original Series"
  sname="Stranger Things"
  link="https://www.netflix.com/in/title/80057281"/>
  <Card
  imgsrc="https://th.bing.com/th/id/OIP.1PeEnNKbbOIAAcnpFsqI2AHaEK?w=329&h=184&c=7&r=0&o=5&pid=1.7"
  title="A Netflix Original Series"
  sname="Vampire Diaries"
  link="https://www.netflix.com/in/title/70143860"
  />
  <Card  
  imgsrc="https://th.bing.com/th/id/OIP.h0xLDynBjOM5B1B6lh3tqAHaEK?w=284&h=180&c=7&r=0&o=5&pid=1.7"
  title="A Netflix Original Series"
  sname="My First-2 Love"
  link=" https://www.netflix.com/in/title/81026700"
  />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
