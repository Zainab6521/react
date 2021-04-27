import React,{Component} from 'react'
import Header from './Header'
import Footer from './Footer'
import Inputs from './Inputs'

class main extends Component{
    render(){
        return(
            <div className="main">
                <h1><Header name="zainab" h1="header."/></h1>
                <Inputs/>
                <h1><Footer name1="khan" h2="footer."/></h1>
            </div>
        )
    
    }

}
export default main