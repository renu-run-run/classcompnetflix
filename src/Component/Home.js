import { Component } from 'react';

class Home extends Component{



    render(){
        return <div>
        <div className='home'>
         <div className='home-cover'>
           <div className='home-nav'>
               <div className='title'><img src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png' width={155} height={55} alt="p"/></div>
               <div className='home-button'>
               <button className='button'>Sign In</button>&nbsp;&nbsp;
               <button className='button'>Register</button>
               </div>
           </div>
           <div className='home-text'>
             <h1>Unlimited movies, TV shows and more.</h1><br/>
             <p>Watch anywhere. Cancel anytime.</p><br/>
             <p>Ready to watch? Enter your email to create or restart your membership.</p>
           </div>
        
          </div>
        
        
        </div>
          
          
        </div>
    }
}

export default Home;