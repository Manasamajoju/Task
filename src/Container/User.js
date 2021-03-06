import React from "react";
class User extends React.Component {
   
    // Constructor 
    constructor(props) {
        super(props);
   
        this.state = {
            items: [],
            DataisLoaded: true
        };
    }
   
    // ComponentDidMount is used to
    // execute the code 
    componentDidMount() {
        fetch("https://gorest.co.in/public/v2/posts/1460")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })
    }
    render() {
      const { DataisLoaded, items } = this.state;
      if (!DataisLoaded) return <div>
          <h1> Pleses wait some time.... </h1> </div> ;
 
      return (
      <div className = "user">
           {
              items.map((item) => ( 
              <ol key = { item.id } >
                  id: { item.id }, 
                  Name: { item.name }, 
                  Email: { item.email },
                  Gender: {item.gender},
                  Status: {item.status}
                  </ol>
              ))
          }

      </div>
  );
}
}
 
export default User;