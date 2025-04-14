
import './App.css'

function Body(props) {

  return (
    <>
      <div>

        <h2>{props.videoTitle}</h2>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/-26NJbM97hY?si=eU19cQCyk6LMJo56" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        
      </div>
      
      
    </>
  )
}

export default Body;
