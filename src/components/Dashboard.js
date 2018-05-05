import React, {Component} from 'react';
import {Button, Input, FormGroup, Label} from 'reactstrap';
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


inject('championStore')
class Dashboard extends Component {
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



  render() {
    console.log(process.env);
    return (
      <div>
      <FormGroup>
        <Label for="championSearchID">Purchase Order ID</Label>
        <Input type="text" name="championSearchID" id="championSearchID" placeholder="Enter a champion"  onChange={this.callChangeSingleChampionID}/>
      </FormGroup><Button onClick={this.callQuerySingleChampion}>Click</Button>
        <p>LUL</p>
      </div>
    )
  }
}

export default Dashboard;
