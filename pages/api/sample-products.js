export default function handler(req, res){
  const products = [
    { id:1, slug:'money-tree', name:'Money Tree', price:450, image:'/placeholder.jpg', description:'Great for beginners.' },
    { id:2, slug:'snake-plant', name:'Snake Plant', price:300, image:'/placeholder.jpg', description:'Low light tolerant.' },
    { id:3, slug:'pothos', name:'Pothos', price:250, image:'/placeholder.jpg', description:'Trailing indoor plant.' }
  ]
  res.status(200).json(products)
}
