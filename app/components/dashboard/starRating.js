import React, { Component } from "react";

export default class StarRating extends Component {

  constructor(props) {
    super(props);
  }

  render() {
   let rating = this.props.rating
   let ratingStars=[];
   for(let i=0; i<5; i++){
      if(i<=rating){
        ratingStars.push(<label className="fa fa-star" key={i}></label> )
      }else{
        ratingStars.push(<label className="fa fa-star-o" key={i}></label>)  
      }
      
   }
    return (
          <span>
           {ratingStars}
          </span>     
    );
  }
}