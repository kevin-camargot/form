import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Header from '../../components/header'

export async function getStaticProps() {



    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const info = await res.json()
    return {
        props: {
            info

        },
    }
}
const handleSubmit = () => {
    e.preventDefault();

    console.log(e)

}
const testButton = () => {
    alert("click en click me")
}
export default function Static({ info }) {
    return (
        <div className="app">
            <Head>
                <title>This page has for form test</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Header />
            {
                info.map(
                    data => <li key={data.id}>{data.title}</li>
                )
            }
            <button type="button" onClick={testButton}>Click me</button>

            <form onSubmit={handleSubmit} method='POST'>
                <label>nombre</label>
                <input type="text" placeholder="correo@mysite.com"></input>
                <button type="submit">Enviar</button>
            </form>
        </div >
    )
}
