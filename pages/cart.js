import Header from '../components/Header'

export default function Cart(){
  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto p-4">
        <h2 className="text-xl font-bold">Your cart</h2>
        <p className="mt-4">This demo uses client-side cart. You can integrate Stripe or PayPal later.</p>
      </main>
    </>
  )
}
