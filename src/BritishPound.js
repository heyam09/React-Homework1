import React, {Component} from 'react'

class BritishPound extends Component {
    constructor(){
        super()
    }
    render() {
        return (
           <div>
            
                <p> The value in British Pound: </p> 
                {( this.props.americanDollar * 6.94)}
                
           </div>
            
        )
    }
}

export default BritishPound;