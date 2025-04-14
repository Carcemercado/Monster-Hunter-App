
import './App.css';

function Header(props) {

  return (
    <>
      <div>
        <header>
          <h1>{props.title}</h1>
          <img
            src={props.imgUrl}
            alt={props.imgAlt}
          />
        </header>
        
      </div>
      
      
    </>
  )
}

export default Header;
