import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Header from '../../components/header'

export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const info = await res.json()
    return {
        props: {
            info,
        },
    }
}
export default function Client({ info }) {
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
            <form action="#" method='POST'>
                <label>nombre</label>

                <input type="text" placeholder="correo@mysite.com"></input>
                <button type="submit">Enviar</button>
            </form>
        </div >
    )
}
