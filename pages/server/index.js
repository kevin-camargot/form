import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Header from '../../components/header'


export async function getServerSideProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const info = await res.json()

    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            info,
        },
    }
}

export default function Client({ info }) {

    /* const [info, setInfo] = useState([]) */
    /* 
      useEffect(() => {
        console.log("sad")
        fetch('https://jsonplaceholder.typicode.com/todos/1')
          .then(response => response.json())
          .then(json => console.log(json))
      }, [])
     */


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

            {
                info.map(
                    data => <p>{data.title}</p>
                )
            }

            <form action="#" method='POST'>
                <label>nombre</label>

                <input type="text" placeholder="correo@mysite.com"></input>
                <button type="submit">Enviar</button>
            </form>
        </div >
    )
}
