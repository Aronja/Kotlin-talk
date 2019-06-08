import React from 'react';
import { Header } from './Header'
import { Page } from './Page'
import { dataModel, DATACLASSES } from './dataModel'

export class Layout extends React.Component {

    constructor (props) {
        super(props)
        this.state = {page: DATACLASSES}
    }

    getNextPage() {
        return this.setState(
            {page: dataModel[this.state.page].NEXTPAGE}
        )
    }

     render () {

        console.log(dataModel[this.state.page].NEXTPAGE)
        return (
            <div>
                <Header title="Kotlin in the real world"></Header>
                <button onClick={this.getNextPage.bind(this)}>NEXT</button>  

                {/* // check the props and create render Correct Component function 
                // InterestingBit Component which also contains code-example
                //  <code>val name = ""</code> */}
                {/* rendered Component mit dem richtigen datamodel */}
                <Page pageProperties={dataModel[this.state.page]}></Page>  
            </div>
            )
     }

}