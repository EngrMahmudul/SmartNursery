import { useRouter } from 'next/router'
import Header from '../../components/Header'

export default function ProductDetail({ product }){
  const router = useRouter()
  if(router.isFallback) return <div>Loading...</div>
  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <img src={product.image || '/placeholder.jpg'} alt={product.name} className="w-full h-96 object-cover rounded" />
          <div>
            <h1 className="text-2xl font-bold">{product.name}</h1>
            <p className="text-green-700 font-bold mt-2">৳{product.price}</p>
            <p className="mt-4 text-gray-700">{product.description}</p>
            <button className="mt-6 px-4 py-2 bg-green-600 text-white rounded">Add to cart</button>
          </div>
        </div>
      </main>
    </>
  )
}

export async function getStaticPaths(){
  return { paths: [], fallback: 'blocking' }
}

export async function getStaticProps({ params }){
  const slug = params.slug
  const demo = [{ id:1, slug:'money-tree', name:'Money Tree', price:450, image:'/placeholder.jpg', description:'Easy-care plant.' }]
  const product = demo.find(d => d.slug === slug) || null
  if(!product) return { notFound: true }
  return { props: { product }, revalidate: 60 }
}
