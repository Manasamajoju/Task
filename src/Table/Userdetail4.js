import React from "react";
import "./User.css";

class Userdetail4 extends React.Component {
    state = {
        loading: true,
        person: null,
    };
    async componentDidMount() {
        const url = "https://gorest.co.in/public/v2/posts/1312/comments";
        fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-TYpe': 'application/json',
            }
        }).then((result) => {
            result.json().then((resp) => {
                console.warn(resp);
                this.setState({ data: resp })
            })
        })


    }
    render() {
        const data = this.state.data;
        console.warn(data);
        return (
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

                                    <ol key={data.id} >

                                        User_id: {data.user_id},<br />

                                        User_title: {data.title},<br />

                                        User_Body: {data.body},<br />

                                        User_comments: {data.body},<br />

                                    </ol>

                                ))

                            }
                        </div>
                        : <p>PLease wait..</p>

                }

            </div>
        )

    }
}
export default Userdetail4;