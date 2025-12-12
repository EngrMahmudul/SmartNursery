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

      <main className="page-container py-10">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-10">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">Bring green home — healthy plants, expert care</h1>
            <p className="mt-4 text-lg text-[color:var(--muted)]">
              Browse our curated selection of easy-care indoor plants, and get personalised care guides and local delivery.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="#catalog" className="inline-block px-5 py-3 bg-[color:var(--brand-green)] text-white rounded-lg shadow">Shop plants</a>
              <a href="#learn" className="inline-block px-5 py-3 border rounded-lg text-sm">Plant care guides</a>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="w-full h-80 rounded-xl overflow-hidden card">
              <img src="/placeholder.jpg" alt="plants" className="img-cover" />
            </div>
          </div>
        </section>

        <section id="catalog">
          <h2 className="text-2xl font-bold mb-4">Popular plants</h2>
          <ProductGrid products={products} />
        </section>
      </main>
    </>
  )
}
