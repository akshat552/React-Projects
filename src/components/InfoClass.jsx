import React from "react";

class InfoClass extends React.Component{

  constructor(props){
    super(props);

    this.state={
      count:0,
      count2:4,
    }
  }

  


render(){
  const {name, phone} = this.props;
  const {count, count2} =this.state;
 return(
  <div className="info">
    <h2>count={count}</h2>
    <button onClick={()=>{
      this.setState({
        count: this.state.count+1
      })
    }}>Click me</button>
    <h2>{name}</h2>
    <h3>{phone}</h3>
  </div>
) 
}

}

export default InfoClass;
