import React, {Component} from 'react';
import {when} from 'mobx';
import { inject, observer } from 'mobx-react';
import {Button, Container, Row, Col} from 'reactstrap';


class LandingPage extends Component{
  constructor(props){
    super(props);


  }

  getNewChampionData(){
    this.props.championStore.deleteAllChampionData();
    when(() => this.props.championStore.deletedAllChampionData, () => this.props.championStore.getAllChampions(),);
  }

  componentDidMount(){
    console.log("Loading Data");
    this.getNewChampionData();
  }

  render(){
    return (

      <Container>
        <div>LandingPage</div>
        <Row>
          <Col>a</Col>
          <Col>a</Col>
          <Col>a</Col>
          <Col>a</Col>
          <Col>a</Col>
          <Col>a</Col>
        </Row>
      </Container>
    )
  }
}

LandingPage = inject('championStore')(observer(LandingPage))

export default LandingPage;
