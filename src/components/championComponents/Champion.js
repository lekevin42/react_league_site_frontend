import React, {Component} from 'react';
import {Button, Input, FormGroup, Label, Row, Col, Container, Jumbotron, Carousel} from 'reactstrap';
import { inject, observer } from 'mobx-react';
import {withRouter} from 'react-router-dom';
import {
  observable,
  extendObservable,
  action,
  when,
  toJS,
  isObservable
} from 'mobx';

import ChampionCarousel from './ChampionCarousel';

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



        <ChampionCarousel/>




      </div>
    )
  }
}
Champion = inject('championStore')(observer(Champion))

export default Champion;
