import {observable, action, decorate} from 'mobx';
import agent from '../agent';

class ChampionStore {
  singleChampionID = '';
  singleChampionData = { championData : {
    'name': '',
    'championArt': '',
    'image': {'full': ''}

  }};

  changeSingleChampionID(id) {
    this.singleChampionID = id;
  }

  querySingleChampion(){
    agent.Champions.getSingleChampion(this.singleChampionID).then((data)=>{
      this.singleChampionData = data;
    });

  }
}

decorate(ChampionStore, {
  singleChampionID: observable,
  singleChampionData: observable,
  changeSingleChampionID: action
});

export default new ChampionStore();
