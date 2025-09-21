import { useState } from 'react'
// import API Key
import apiKey from './config'

// import components
import Nav from './components/Nav'
import Search from './components/Search'
import PhotoList from './components/PhotoList'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <Search />
      <Nav />
      <PhotoList />
    </div>
  )
}

export default App
