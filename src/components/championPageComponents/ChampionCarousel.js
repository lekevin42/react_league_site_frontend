import React, {Component} from 'react';
import { UncontrolledCarousel } from 'reactstrap';


class ChampionCarousel extends Component {
  render(){
    console.log(this.props.data);
    return(
      <UncontrolledCarousel interval={10000} items={this.props.data} className="test"/>
    )
  }
}




export default ChampionCarousel;
