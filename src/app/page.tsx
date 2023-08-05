'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import ClipboardJS from 'clipboard';

export default function Home() {
  const [value, setValue] = useState('')
  let proxyUrl = ''
  if (value) {
    proxyUrl = `${location.origin}/api/proxy?url=${encodeURIComponent(value)}`
  }

  useEffect(() => {
        const clipboard = new ClipboardJS('#btn')
        clipboard.on('success', () => {
          alert('Copied to clipboard')
        })
        clipboard.on('error', (e) => {
          console.log("%c Line:31 🌮 e", "color:#b03734", e);
          console.log('Failed to copy')
        })
  }, []);
  return (
    <main className="flex flex-col items-center justify-center w-screen h-screen">
      <div className='border-solid rounded-sm'>
      <label htmlFor="url"> URL </label>
      <input type="text" className="w-96 h-12 block p-5 rounded-md border-solid border-2 border-indigo-600" name='url' id='url' onChange={(e) => setValue(e.target.value)} />
      </div>
      <div className='flex flex-row justify-start m-12' >
      <div className='border-solid rounded-l-lg border-indigo-200 border-2 p-2' id='copy'>
        {proxyUrl}
      </div>
      <button className='relative border-solid rounded-r-lg color-primary border-2 p-2'
      id='btn'
      data-clipboard-target="#copy"
      onClick={() => {
      }}
      >Copy</button></div>
    </main>
  )
}
