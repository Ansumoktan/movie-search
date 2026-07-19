import React, { useState } from 'react'
 import './movie.css'

const movie = () => {
  const [input,setinput] = useState("")
const [movies, setMovies] = useState([]);


// const movie = [
// {
//   title: "MONSTER ",
//     poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1tXjNhBgWGSiJ-fc0EF_l25HHJM2MT8gO38lYSPEG3Q&s"
// },
// {
//   title:" BHOLA",
//   poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-xULuOTApe4ibW14wHgzhG_fe8BHAEy5vtAkVoFWMDA&s=10"
// },
// {
//   title:"MOONLIGHT",
//   poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhuaNEMOMNa9ztzn3KxLcEiXhm_cMmw_dIBf5JednCCQ&s=10"
// },
// {
//   title:"BLACK ADAM",
//   poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHkzFP8yD6MU7_3FXbsFksqPx68KjOAw27tLbcNo3j5A&s=10"
// }
// ];

const handleSearchNew = async () => {

  const url = `https://www.omdbapi.com/?apikey=af96a6fb&s=${input}`;

  const response = await fetch(url);
  const data = await response.json();

  setMovies(data.Search);
  setinput("");

};
  return (
    
    <div className='container-section'>
        <div className="main">
       <h1>What would you like to  watch</h1>
         <input type="text" placeholder='Movies,Show,Series etc.'
         value ={input}
           onChange={(e) => setinput(e.target.value)}
       onKeyDown={(e)=>{
        if(e.key === "Enter"){
        
          handleSearchNew();
        }}}
          />
        <div className="section">
{
  movies.map((movie,index) => (
    <div className="movie-card" key={index}>
      
      <img 
        className="img-container" 
        src={movie.Poster} 
        alt={movie.Title}
      />

      <h2>{movie.Title}</h2>

    </div>
  ))
}
</div>
    
        </div>
      
    </div>
    
  )
}

export default movie
