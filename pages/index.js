import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Header from '../components/header'
import { DatePicker, Table } from 'antd';


export default function Home() {
  async function handleSubmit(e) {
    e.preventDefault();

    console.log(e)
  }
  return (
    <div className="app" >
      <h2>Test renderings</h2>
      <p>Version 2.0</p>

      <form onSubmit={handleSubmit}>
        <input
          name="email"
          type="email"
          placeholder="Enter email"


          required
        />
        <textarea
          name="message"
          placeholder="Enter message"


          required
        />
        <input type="file" name="file" />
        <input
          name="bot-field"
          type="text"

          style={{ display: "none" }}
        />
        <button type="submit">Send</button>
      </form>

    </div >
  )
}
