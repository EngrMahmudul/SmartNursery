export default function Hero(){
  return (
    <section className='max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-10 items-center'>
      <div>
        <h2 className='text-4xl font-bold leading-tight'>
          Bring Greenery Home with Smart Nursery
        </h2>
        <p className='mt-4 text-lg text-gray-600'>
          Fresh plants, easy care guides, and a peaceful lifestyle — all in one place.
        </p>
        <a href='#products' className='mt-6 inline-block px-6 py-3 bg-green-700 text-white rounded-lg'>
          Shop Now
        </a>
      </div>
      <div>
        <img src='/plant.jpg' className='rounded-xl shadow-md' />
      </div>
    </section>
  );
}
