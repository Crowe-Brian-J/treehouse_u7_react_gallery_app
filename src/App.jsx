import { useState } from 'react'
// import API Key
import apiKey from './config'

// import components
import Nav from './components/Nav'
import Search from './components/Search'
import PhotoList from './components/PhotoList'

const App = () => {
  const [count, setCount] = useState(0)

  // So the search bar doesn't break for now
  const fetchData = (query) => {
    console.log('Fetching Data for: ', query)
  }

  return (
    <div className="container">
      <Search fetchData={fetchData} />
      <Nav />
      <PhotoList />
    </div>
  )
}

export default App
