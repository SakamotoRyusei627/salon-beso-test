import React from 'react'
import Link from 'next/link'

function Menu() {
  return (
    <div>
      <h1>ここはメニューページです</h1>
      <Link href={'/'}>ホームに戻る</Link>
    </div>
  )
}

export default Menu

