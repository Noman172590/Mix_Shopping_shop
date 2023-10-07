import { useEffect, useState } from 'react';
import './App.css'
import Link from './Components/Link/Link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import PriceData from './Components/PriceData/PriceData';
import DeshBoard from './Components/DeshBoard/DeshBoard';


function App() {
  const [open, setOpen] = useState(false)
  const routes = [
    { name: 'Home', id: 1, path: '/Home' },
    { name: 'About', id: 2, path: '/about' },
    { name: 'Contact', id: 3, path: '/contact' },
    { name: 'Services', id: 4, path: '/services' },
    { name: 'Products', id: 5, path: '/products' },
    { name: 'Gallery', id: 6, path: '/gallery' },
    { name: 'Blog', id: 7, path: '/blog' },
    { name: 'Portfolio', id: 8, path: '/portfolio' },
    { name: 'Team', id: 9, path: '/team' },
    { name: 'FAQ', id: 10, path: '/faq' },
    { name: 'Events', id: 11, path: '/events' },
    { name: 'Shop', id: 12, path: '/shop' },
    { name: 'Support', id: 13, path: '/support' },


  ];

  const [product, setProduct] = useState([])
  useEffect(() => {
    fetch('/public/Fake.json')
      .then(res => res.json())
      .then(data => setProduct(data.data))
  })

  return (
    <div className='mx-12'>

      <nav className='bg-purple-400'>
        <div onClick={() => setOpen(!open)} className='md:hidden'>
          <span>{open === true ? <XMarkIcon className="h-6 w-6 text-green-500" /> : <Bars3Icon className="h-6 w-6 text-red-500" />}</span>


        </div>

        <ul className={`md:flex justify-between duration-500 p-8 text-red md:static ml-12 mt-4 absolute ${open ? 'top-6' : '-top-36'}`}>
          {
            routes.map(route => <Link
              key={route.id}
              route={route}></Link>)
          }

        </ul>

      </nav>
      <div>
            <h1 className='bg-purple-500 mt-4 p-8 text-center text-5xl text-white font-normal mb-10'>Awesome Afforable  Price</h1>
      </div>
      <div className="grid  md:grid-cols-3 sm:grid-cols-1 gap-3">
            {
              product.map(products=><PriceData products={products} key={products.id}></PriceData>)
            }
      </div>
<div>
<DeshBoard></DeshBoard>
</div>
      
    </div>

  )
}

export default App
