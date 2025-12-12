import Head from 'next/head'
import Header from '../components/Header'
import ProductGrid from '../components/ProductGrid'

export default function Home({ products }){
  return (
    <>
      <Head>
        <title>GreenNest - Plants & Nursery</title>
        <meta name="description" content="GreenNest - online plant shop" />
      </Head>
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Popular plants</h1>
        <ProductGrid products={products} />
      </main>
    </>
  )
}

export async function getStaticProps(){
  // Using internal API route for demo in dev. Replace with real DB for production.
  const res = await fetch('http://localhost:3000/api/sample-products').catch(()=> null)
  let products = []
  if(res){
    products = await res.json()
  } else {
    products = [
      { id:1, slug:'money-tree', name:'Money Tree', price:450, image:'/placeholder.jpg', description:'Great for beginners.' },
      { id:2, slug:'snake-plant', name:'Snake Plant', price:300, image:'/placeholder.jpg', description:'Low light tolerant.' },
      { id:3, slug:'pothos', name:'Pothos', price:250, image:'/placeholder.jpg', description:'Trailing indoor plant.' }
    ]
  }
  return { props: { products } }
}
