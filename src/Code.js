import React from 'react';

export class Code extends React.Component {
    
    constructor(props) {
        super(props)
    }
    
    render() {
        console.log(this.props)
        return (
            <div>
                {this.props.code && this.props.code.map((item, index) => (
                    <code key={index}>{item}</code>
                ))}
            </div>
            )
    }

} 



