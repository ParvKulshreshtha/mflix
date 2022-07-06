import React, {useState} from 'react'
import "./RowItem.css"
import Modal from 'react-modal';


export const RowItem = (props) => {
  
  const [modalOpen, setModelOpen] = useState(false)
  const baseUrl = "https://image.tmdb.org/t/p/w500";
  const imageClickHandler = () =>{
    setModelOpen(true)
  }
  return (
    <>
    
      <Modal isOpen={modalOpen} 
          onRequestClose={() => setModelOpen(false)}
          ariaHideApp={false}
          style={{
            content: {
              background: '#121212',
              borderRadius: '10px'
            }}}>
        <div className='modal'>
          <img className='modal-img' 
               src={`${baseUrl}${props.movie.backdrop_path || props.movie.poster_path}`} 
               alt={props.movie.title || props.movie.name} />
          <section>
            <h2>{props.movie.title || props.movie.name}</h2>
            <h4>{props.movie.overview}</h4>
          </section>
        </div>
      </Modal>
      <div className='card'>
        <img className='img' onClick={imageClickHandler} src={`${baseUrl}${props.movie.poster_path}`} alt={props.movie.title || props.movie.name} />
        <div className="bottom-left white">{props.movie.title || props.movie.name}</div>
        {/* <div className='white'>{props.movie.vote_average}</div> */}
      </div>
    </>
  )
}
