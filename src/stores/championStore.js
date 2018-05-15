import {observable, action, decorate} from 'mobx';
import agent from '../agent';

class ChampionStore {
  singleChampionID = '';
  singleChampionData = { championData : {
    'name': '',
    'championArt': '',
    'image': {'full': ''}

  }};
  singleChampionSkins = [];

  changeSingleChampionID(id) {
    this.singleChampionID = id;
  }

  querySingleChampion(){
    agent.Champions.getSingleChampion(this.singleChampionID).then((data)=>{
      this.singleChampionData = data;
      this.createSkinList();
    });

  }
  createSkinList() {
    const championName = this.singleChampionData.championData.image.full.split(".")[0];

    const {skins, title} = this.singleChampionData.championData;
    //console.log(skins.length);
    for(var i = 0; i < skins.length; i++){
      this.singleChampionSkins.push({src:'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/' + championName + '_' + i + '.jpg', caption: title, header: skins[i].name, altText: ''});
    }
    this.singleChampionSkins[0].name = this.singleChampionData.championData.name;
 }
}



decorate(ChampionStore, {
  singleChampionID: observable,
  singleChampionData: observable,
  singleChampionSkins: observable,
  changeSingleChampionID: action
});

export default new ChampionStore();
