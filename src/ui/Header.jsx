export default function Header(){
  return (
    <header className='bg-white shadow sticky top-0 z-40'>
      <div className='max-w-6xl mx-auto px-4 py-4 flex justify-between items-center'>
        <h1 className='text-2xl font-bold text-green-700'>GreenNest</h1>
        <nav className='flex gap-4'>
          <a href='#products' className='text-gray-700 hover:text-green-700'>Products</a>
          <a href='#cart' className='px-3 py-1 border rounded hover:bg-green-50'>Cart</a>
        </nav>
      </div>
    </header>
  )
}
