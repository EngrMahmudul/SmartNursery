import Link from 'next/link'

export default function Header(){
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/">
          <a className="text-2xl font-bold text-green-700">GreenNest</a>
        </Link>
        <nav>
          <Link href="/cart"><a className="px-3">Cart</a></Link>
        </nav>
      </div>
    </header>
  )
}
