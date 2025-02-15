import Navbar from './components/navbar'
import Offer from './components/offer'
import Banner from './components/banner'
import Sidebar from './components/sidebar'
import About from './components/about'
import Papular from './components/papularcards'
function App() {

  return (
    <>
      <div>
        <Offer/>
      </div>
      <div>
        <Navbar/>
      </div>
      <div>
        <Sidebar/>
      </div>
      <div>
        <Banner/>
      </div>
      <div>
        <About/>
      </div>
      <div>
        <Papular/>
      </div>
    </>
  )
}

export default App
