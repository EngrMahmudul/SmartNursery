import Link from 'next/link'

export default function Header(){
  return (
    <header className="bg-white/90 backdrop-blur sticky top-0 z-40 border-b">
      <div className="page-container flex items-center justify-between py-3">
        <Link href="/"><a className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-700 to-green-400 flex items-center justify-center text-white font-bold">GN</div>
          <span className="text-xl font-bold text-[color:var(--brand-green)]">GreenNest</span>
        </a></Link>

        <nav className="flex items-center gap-4">
          <Link href="/"><a className="text-sm text-gray-700 hover:text-[color:var(--brand-green)]">Home</a></Link>
          <Link href="/cart"><a className="px-3 py-1 rounded-md border text-sm hover:bg-green-50">Cart</a></Link>
        </nav>
      </div>
    </header>
  )
}

