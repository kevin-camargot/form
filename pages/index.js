import Head from 'next/head'
import Header from '../components/header'
import { DatePicker } from 'antd';

export default function Home() {
  return (
    <div className="app">
      <Head>
        <title>This page has for form test</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />

      (<DatePicker />


      <form action="#" method='POST'>
        <label>nombre</label>
        <input type="text" placeholder="correo@mysite.com"></input>
        <button type="submit">Enviar</button>
      </form>
    </div>
  )
}
