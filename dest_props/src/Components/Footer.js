import React,{Component} from 'react'

const Footer = props => {
    const {name1,h2} = props
    return(
        <div>
            <h1>
                hello {name1} , this is {h2}.
            </h1>
        </div>
    )
}
export default Footer