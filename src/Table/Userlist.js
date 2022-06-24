import React from "react";
class Userlist extends React.Component{
constructor(){
     super();
     this.state={

      data:false
    }

}
componentDidMount()
{
let url = "https://gorest.co.in/public/1460/v2/users";
fetch(url,{
method: 'GET' ,
headers:{
'Accept' : 'application/json',
'Content-TYpe': 'application/json',
}
}).then((result)=>{
result.json().then((resp)=>

{

console.warn(resp);

this.setState({data:resp})

})

})

}

render(){

const data=this.state.data;

console.warn(data);

return(

<div>

{

data ?

<div>

{/* <p>id:{data.id}</p>

<p>Name: {data.name} </p>

<p>email: {data.email}</p>



<p>gender:{data.gender}</p> */}

{

data.map((data) => (

<ol key = { data.id } >
User_id: {data.id},<br />
User_title: { data.title},<br />
User_body: { data.body },<br />
</ol>
))

}

</div>

:<p>PLease wait..</p>

}

</div>

)

}

}

export default Userlist;