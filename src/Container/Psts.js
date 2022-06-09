import React from "react";
class Psts extends React.Component {
   
    // Constructor 
    constructor(props) {
        super(props);
   
        this.state = {
            items: [],
            DataisLoaded: false
        };
    }
   
    // ComponentDidMount is used to
    // execute the code 
    componentDidMount() {
        fetch("https://gorest.co.in/public/v2/posts/2034")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })
    }
    render() {
      //const { DataisLoaded, items } = this.state;
      //if (!DataisLoaded) return 
      <div>
          <h1> Please wait some time.... </h1> </div> ;
 
      return (
      <div className = "psts"> 
          <h2> resource not found</h2>      
          
      </div>
  );
}
}
 
export default Psts;