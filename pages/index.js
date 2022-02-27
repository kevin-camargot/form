import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Header from '../components/header'
import { DatePicker, Table } from 'antd';


export default function Home() {


  const registerUser = async event => {
    event.preventDefault()

    const res = await fetch('/api/register', {
      body: JSON.stringify({
        name: event.target.name.value
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    })

    const result = await res.json()
    // result.user => 'Ada Lovelace'
    console.log(result)
  }


  return (
    <div className="app" >
      <h2>Test renderings</h2>
      <p>Version 2.0</p>

      <form action="/api/form" method="post">
        <label htmlFor="first">First name:</label>
        <input type="text" id="first" name="first" />
        <label htmlFor="last">Last name:</label>
        <input type="text" id="last" name="last" />
        <button type="submit">Submit</button>
      </form>

    </div >
  )
}
