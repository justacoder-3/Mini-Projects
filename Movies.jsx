import React from 'react'
import { movies } from './data'
import { useState } from 'react'

const Movies = () => {
  const [movieList, setMovieList] = useState(movies)

  const filteredData = (cat) => {
    if (!cat) {
      return setMovieList(movies);
    }
    else {
      const data = movies.filter((value) => value.category === cat)
      setMovieList(data);
    }
  }

  return (

    <div>
      <div style={{display:'flex', gap:'1rem', justifyContent:'center', marginBottom:'2rem', padding:'1rem 0', position:'sticky', top:'0'}}>
      <div>
        <button onClick={() => filteredData()}>All</button>
      </div>

      <div>
        <button onClick={() => filteredData('Horror')}>Horror</button>
      </div>

      <div>
        <button onClick={() => filteredData('Action')}>Action</button>
      </div>

      <div>
        <button onClick={() => filteredData('Thriller')}>Thriller</button>
      </div>

      <div>
        <button onClick={() => filteredData('Sci-Fi')}>Sci-Fi</button>
      </div>

      <div>
        <button onClick={() => filteredData('Animation')}>Animation</button>
      </div>

      <div>
        <button onClick={() => filteredData('Drama')}>Drama</button>
      </div>
      </div>
    

    <div style={{
      display: 'flex', 
      justifyContent:'center', 
      alignItems:'center',
      flexWrap:'wrap',
      gap:'1rem',
      textAlign:'center',
      width:'1300px',
      margin:'auto'}}>



      {movieList.map((value) => (
        <div key={value.id} style={{maxWidth:'280px',textAlign:'center'}}>
          <div style={{padding:'10px'}} className='hover_effect'>
            <img src={value.poster_path} alt="" style={{
              width:'200px',
              height:'280px',
              borderRadius:'10px',
              border:'2px solid yellow'}}/>
          </div>
          <h3>{value.title}</h3>
          <h5>{value.release_date}</h5>
        </div>))} 
    </div>
    </div>
  )
}

export default Movies