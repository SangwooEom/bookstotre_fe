import { useState } from 'react'
import Nav from './components/Nav'
import Footer from './components/Footer'
import { RouterProvider } from 'react-router-dom';
import router from './router';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Nav />
      <RouterProvider router={router} />
      <Footer />
    </div>
  )
}

export default App
