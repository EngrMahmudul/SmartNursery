import Link from 'next/link'

export default function ProductCard({ product }){
  return (
    <article className="bg-white rounded-2xl shadow p-4">
      <img src={product.image || '/placeholder.jpg'} alt={product.name} className="w-full h-44 object-cover rounded-lg" />
      <h3 className="mt-3 font-semibold">{product.name}</h3>
      <p className="text-sm text-gray-600 line-clamp-2">{product.description}</p>
      <div className="mt-3 flex items-center justify-between">
        <span className="font-bold">৳{product.price}</span>
        <Link href={`/products/${product.slug}`}><a className="px-3 py-1 border rounded">View</a></Link>
      </div>
    </article>
  )
}
