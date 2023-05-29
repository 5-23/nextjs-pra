"use client"
import { Inter } from 'next/font/google'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  let [value, change] = useState(0)
  return (
    <div>
      <h1>{value}</h1>
      <input type="button" value="asdf" onClick={() => {change(value+1)}}/>
    </div>
  )
}
