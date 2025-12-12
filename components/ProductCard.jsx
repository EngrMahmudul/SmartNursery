import Link from 'next/link'

export default function ProductCard({ product }){
  return (
    <article className="card p-4 flex flex-col h-full">
      <div className="w-full h-52 rounded-lg overflow-hidden">
        <img src={product.image || '/placeholder.jpg'} alt={product.name} className="img-cover" />
      </div>
      <div className="mt-3 flex-1 flex flex-col">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-sm text-[color:var(--muted)] mt-2 line-clamp-3">{product.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-bold text-[color:var(--brand-green)]">৳{product.price}</span>
          <div className="flex items-center gap-2">
            <Link href={`/products/${product.slug}`}><a className="px-3 py-1 border rounded-md text-sm">View</a></Link>
            <button aria-label={`Add ${product.name}`} className="px-3 py-1 bg-green-600 text-white rounded-md text-sm">Add</button>
          </div>
        </div>
      </div>
    </article>
  )
}
