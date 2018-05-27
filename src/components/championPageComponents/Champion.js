import React, {Component} from 'react';
import {Button, Input, FormGroup, Row, Col, Container} from 'reactstrap';
import { inject, observer } from 'mobx-react';
import ChampionCarousel from './ChampionCarousel';
import ChampionStats from './ChampionStats';

class Champion extends Component {
  constructor(props) {
    super(props);

    this.callChangeSingleChampionID = this.callChangeSingleChampionID.bind(this);
    this.callQuerySingleChampion = this.callQuerySingleChampion.bind(this);
  }


  callChangeSingleChampionID(event) {
    this.props.championStore.changeSingleChampionID(event.target.value);
  }

  callQuerySingleChampion(){
    this.props.championStore.querySingleChampion();
  }

//add function to check and return appropriate tags


  render() {
    console.log(this.props.championStore.singleChampionData);
    return (
      <div>
      <FormGroup>
        <Input type="text" name="championSearchID" id="championSearchID" placeholder="Enter a champion"  onChange={this.callChangeSingleChampionID}/>
      </FormGroup><Button onClick={this.callQuerySingleChampion}>Click</Button>


      <Container className="border">
        <Row>
        <ChampionCarousel data={this.props.championStore.singleChampionSkins}/>
        </Row>
        <Row>
        <Col sm={{size: "3", offset: 3}}></Col> <Col sm={{size: "4", offset: 2}}></Col>
        <ChampionStats data={this.props.championStore.singleChampionData}/>
        </Row>
      </Container>




      </div>
    )
  }
}
Champion = inject('championStore')(observer(Champion))

export default Champion;
