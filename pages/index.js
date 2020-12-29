import Head from 'next/head'
import { useState } from "react"

export default function Home() {
  const [addCard, setAddCard] = useState(false)
  return (
    <div>
      <Head>
        <title>Next Study Board</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container bg-gray-100 min-h-screen mx-auto px-4">
        <div onClick={() => setAddCard(!addCard)}>add</div>
        {addCard ?
          <div className="w-96 bg-white border rounded-md border-gray-200 px-4 py-2">
            add title
          </div>
        : null
        }
      </main>
    </div>
  )
}
