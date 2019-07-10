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

  getPreviousPage() {
    return this.setState(
      {page: dataModel[this.state.page].PREVIOUSPAGE}
    )
  }

     render () {

        console.log(dataModel[this.state.page].NEXTPAGE)
        return (
            <div>
                <Header title="Kotlin in the real world"></Header>
                <button onClick={this.getNextPage.bind(this)}>NEXT</button>  
                <button onClick={this.getPreviousPage.bind(this)}>BACK</button>
                <Page pageProperties={dataModel[this.state.page]}></Page>  
            </div>
            )
     }

}