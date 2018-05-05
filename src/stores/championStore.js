import {observable, action, decorate} from 'mobx';
import agent from '../agent';

class ChampionStore {
  singleChampionID = '';

  changeSingleChampionID(id) {
    this.singleChampionID = id;
  }

  querySingleChampion(){
    console.log(this.singleChampionID);
    agent.Champions.getSingleChampion(this.singleChampionID).then((body)=>{
      console.log(body);
    });
  }
}

decorate(ChampionStore, {
  singleChampionID: observable,
  changeSingleChampionID: action
});

export default new ChampionStore();
