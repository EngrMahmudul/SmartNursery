import ProductCard from './ProductCard';

const items = [
  { id:1, name:'Money Tree', price:450, desc:'Great for beginners', image:'/plant.jpg' },
  { id:2, name:'Snake Plant', price:350, desc:'Low maintenance', image:'/plant.jpg' },
  { id:3, name:'Aloe Vera', price:280, desc:'Medicinal plant', image:'/plant.jpg' }
];

export default function Products(){
  return (
    <section id='products' className='max-w-6xl mx-auto px-4 py-10'>
      <h2 className='text-2xl font-bold mb-6'>Popular Plants</h2>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-6'>
        {items.map(p => <ProductCard key={p.id} p={p} />)}
      </div>
    </section>
  );
}
