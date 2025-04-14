
import './App.css';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

function App() {

  return (
    <>
      <div>
        <Header 
          title="Monster Hunter App" 
          imgUrl="../public/mhwilds.avif"
          imgAlt="Monster Hunter"
        />
        <Body videoTitle="Current Update Showcase"/>
        <Footer footerText="© 2025 Monster Hunter App by Carlos. All rights reserved." />
        
      </div>
      
    </>
  )
}

export default App;