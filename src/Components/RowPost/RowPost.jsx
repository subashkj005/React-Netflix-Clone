import React,{useEffect, useState, useRef} from 'react'
import './RowPost.css'
import Youtube from 'react-youtube'
import { API_KEY, imageUrl} from '../Constants/constants'
import axios from '../../Components/axios'
import Swal from 'sweetalert2'




function RowPost(props) {

    const [movies, setMovies] = useState([])
    const [movieUrl, setMovieUrl] = useState ()


    useEffect(() => {
        axios.get(props.url)
        .then(response=>{
            setMovies(response.data.results)
        })
        .catch(err=>{
            // alert('Network Issue.. !')
        })
    }, [])

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };

      const handleMovieTrailer = (id) => {
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
        .then(response=>{
            if(response.data.results.length !== 0){
                console.log(response.data.results[0]);
                setMovieUrl(response.data.results[0])
            }else{
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Not Available!',
                    
                  })
            }
        })
      }
      
    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className='posters'>
                {movies.map((obj)=>
                    <>
                     <img src={`${imageUrl+obj.backdrop_path}`}
                    onClick={()=>handleMovieTrailer(obj.id)}
                     alt="poster" className={props.isSmall ? "smallPoster" : 'poster'}
                      key={obj.id}/>
                    
                    </>
                )}
                
            </div>
            
            { movieUrl && < Youtube videoId={movieUrl.key} opts={opts} />}
        </div>
    )
}

export default RowPost