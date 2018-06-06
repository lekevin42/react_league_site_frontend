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
  deletedAllChampionData = false;
  loadedChampionHeader = false;
  championHeaderData = {};
  championIconList = [];

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

    for(var i = 0; i < skins.length; i++){
      this.singleChampionSkins.push({src:'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/' + championName + '_' + i + '.jpg', caption: title, header: skins[i].name, altText: ''});
    }
    this.singleChampionSkins[0].name = this.singleChampionData.championData.name;
 }

 getAllChampions() {
   agent.Champions.getAllChampions().then((data) => {
     console.log(data);
   });
 }

 deleteAllChampionData() {
   this.deletedAllChampionData = false;
   agent.Champions.deleteAllChampions().then(() => {
     this.deletedAllChampionData = true;
   });
 }

 getChampionHeaderData() {
   this.loadedChampionHeader = false;
   let counter = 0;
   agent.Champions.getChampionHeaderData().then((championHeaderData) => {
     this.championHeaderData = championHeaderData.success.header[0];


     let tempList = [];
     Object.keys(this.championHeaderData.keys).map((key) => {
       if (counter % 6 === 0){
         this.championIconList.push(tempList);
         tempList = [];
       }
       tempList.push('http://ddragon.leagueoflegends.com/cdn/' + this.championHeaderData.version + '/img/champion/' + this.championHeaderData.keys[key] + '.png');
       counter += 1;
     })

     if (tempList.length > 0) this.championIconList.push(tempList);
   }).finally(action(()=> {
     this.loadedChampionHeader = true;
   }));
 }

}



decorate(ChampionStore, {
  singleChampionID: observable,
  singleChampionData: observable,
  singleChampionSkins: observable,
  deletedAllChampionData: observable,
  loadedChampionHeader: observable,
  championIconList: observable,
  changeSingleChampionID: action
});

export default new ChampionStore();
