export default function ProductCard({ p }){
  return (
    <div className='bg-white rounded-2xl shadow p-4'>
      <img src={p.image} className='w-full h-48 object-cover rounded-lg' />
      <h3 className='mt-3 text-lg font-semibold'>{p.name}</h3>
      <p className='text-gray-600 text-sm mt-1'>{p.desc}</p>
      <div className='mt-3 flex justify-between items-center'>
        <span className='text-green-700 font-bold'>৳{p.price}</span>
        <button className='px-3 py-1 bg-green-700 text-white rounded-md text-sm'>Add</button>
      </div>
    </div>
  )
}
