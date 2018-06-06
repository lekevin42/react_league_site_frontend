import React, {Component} from 'react';
import {when} from 'mobx';
import { inject, observer } from 'mobx-react';
import {Container, Row, Col} from 'reactstrap';


class LandingPage extends Component{
  getNewChampionData(){
    this.props.championStore.deleteAllChampionData();
    when(() => this.props.championStore.deletedAllChampionData, () => this.props.championStore.getAllChampions(),);
  }

  createIcons() {
    let columnData = [];

    this.props.championStore.championIconList.map((chunk) => {
      chunk.map((url) => {
        columnData.push(<img src={url} className="championIcon"/>)
      })
    })

    return columnData;
  }

  componentDidMount(){
    this.props.championStore.getChampionHeaderData();
  }

  render(){
    return (

      <Container>
        <div>LandingPage</div>

        {this.createIcons()}
      </Container>
    )
  }
}

LandingPage = inject('championStore')(observer(LandingPage))

export default LandingPage;
