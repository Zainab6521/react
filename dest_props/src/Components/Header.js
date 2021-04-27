import React,{Component} from 'react'

const Header = props => {
    const {name,h1} = props
    return(
        <div>
            <h1>
                hello {name} , this is {h1}
            </h1>
        </div>
    )
}
export default Header