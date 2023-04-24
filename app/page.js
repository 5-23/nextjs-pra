"use client"
import { useState } from 'react';
import style from './page.module.css'

export default function Home() {
  let [a, cgA] = useState(0);
  return (
    <main className={style.main}>
      <Asdf name="one"/>
      <Asdf name="two"/>
      <Asdf name="three"/>
    </main>
  )
}


function Asdf({name}){
  let [a, cgA] = useState(0);
  return (
    <div>
      <h1>{name}: {a}</h1>
      <input type='button' value={"+"} onClick={() => { cgA(a + 1) }}/>
    </div>
  )
}