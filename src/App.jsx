import {Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import HomePage from './components/HomePage'
import Item from './components/Item'

export default function App() {

  return (
    <>
    <Header />
    <Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/item/:id" element={<Item />} />
		</Routes>
    </>
  )
}

// export default App
