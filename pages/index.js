import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Header from '../components/header'
import { DatePicker } from 'antd';

export default function Home() {

  const [info, setInfo] = useState("Info")
  /* 
    useEffect(() => {
      console.log("sad")
      fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))
    }, [])
   */
  useEffect(() => {
    setInfo("InfoSETEADA")
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => console.log(json))
  }, [])




  return (

    < div className="app" >
      <Head>
        <title>This page has for form test</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />

      <DatePicker />


      <form action="#" method='POST'>
        <label>nombre {info}</label>
        <input type="text" placeholder="correo@mysite.com"></input>
        <button type="submit">Enviar</button>
      </form>
    </div >
  )
}
