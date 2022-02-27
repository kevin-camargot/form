import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Header from '../../components/header'
import { DatePicker, Table } from 'antd';

export const getStaticPaths = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()
    const paths = data.map(({ id }) => ({
        params: {
            id: id.toString()
        }
    }))
    return {
        paths,
        fallback: false
    }

}
export async function getStaticProps({ params }) {

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    const info = await res.json()
    return {
        props: {
            info,
        },
    }
}

export default function Article({ info }) {




    return (

        < div className="app" >
            <Head>
                <title>This page has for form test</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>

            <Header />
            {console.log(info)}
            <p>id: {info.id}</p>
            <p>{info.body}</p>



            {/*  <ul>{
                info.map(
                    data => <li key={data.id}>{data.title}</li>
                )
            }
            </ul> */}


            <form action="#" method='POST'>
                <label>nombre</label>

                <input type="text" placeholder="correo@mysite.com"></input>
                <button type="submit">Enviar</button>
            </form>
        </div >
    )
}
