import './App.css'
import data from './data'
import Testimonials from './Components/Testimonials'

function App () {
  return (
    <div className='mainDiv'>
      <div className='Testimonial'>
        <h1 style={{fontWeight:'500'}}>Our Testimonials</h1>
        <div style={{height:'4px', backgroundColor:'violet', width:'234px'}}></div>
        <Testimonials data={data}></Testimonials>
      </div>
    </div>
  )
}

export default App
