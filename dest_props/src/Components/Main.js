import React,{Component} from 'react'
import Header from './Header'
// import Footer from './Footer'
import Hello from './HelloWorld'
import Car from './Car'
import Garage from './Car'

class main extends Component{
    render(){
        return(
            <div className="main">
                <h3><Header name="zainab" h1="header."/></h3>
<Hello />
<Car />
{/* <Garage /> */}
                {/* <h1><Footer name1="khan" h2="footer."/></h1> */}
            
            </div>
        )
    
    }

}
export default main