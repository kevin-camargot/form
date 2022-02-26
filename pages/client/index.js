import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Header from '../../components/header'
import { DatePicker, Table } from 'antd';

export default function Client() {

    const [info, setInfo] = useState([])
    /* 
      useEffect(() => {
        console.log("sad")
        fetch('https://jsonplaceholder.typicode.com/todos/1')
          .then(response => response.json())
          .then(json => console.log(json))
      }, [])
     */
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setInfo(json))
    }, [])

    /* const dataSource = [...info];
    console.log(dataSource) */



    return (

        < div className="app" >
            <Head>
                <title>This page has for form test</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>

            <Header />


            <ul>{
                info.map(
                    data => <li key={data.id}>{data.title}</li>
                )
            }
            </ul>


            <form action="#" method='POST'>
                <label>nombre</label>

                <input type="text" placeholder="correo@mysite.com"></input>
                <button type="submit">Enviar</button>
            </form>
        </div >
    )
}
