import React, { Component } from 'react'
import Me from "../images/profilepic.jpg"
export default class person extends Component {
  
    state = {
        fullName:"",
          bio:"",
          imgSrc:"",
          imgAlt:"",
          profession:"",
          title1:"",
          title2:"",
          title3:"",
          hideorshow:"",
          isactivate:"false",
        
         
         }
         showHandler = ()=>{
             
            this.setState({
                isactivate: true,
                fullName:"emna hammami",
                bio:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cras ornare arcu dui vivamus arcu felis bibendum ut. Quam viverra orci sagittis eu volutpat odio facilisis mauris sit. Dignissim suspendisse in est ante in. Ullamcorper malesuada proin libero nunc consequat interdum varius sit. Consequat mauris nunc congue nisi",
                imgSrc:Me,
                imgAlt:"me",
                profession:"student",
                title1:"fullname",
                title2:"profession ",
                title3:"bio",
               
            })
            
        }

        hideHandler = ()=>{
            this.setState({
                isactivate: false,
            
            })
        }

  render() {
    return (
       <div>{this.state.isactivate? <div><img src={this.state.imgSrc} alt={this.state.imgAlt} /><h2>{this.state.title1}</h2><span>{this.state.fullName}</span>
       <h2>{this.state.title2}</h2><span>{this.state.profession}</span>
       <h2>{this.state.title3}</h2><span>{this.state.bio}</span>
       
       
     
       </div> :       null
  }
         <button onClick={this.showHandler}>show</button>
       <button onClick={this.hideHandler}>hide</button>

       </div>
          
          
        

    )
  }
}
