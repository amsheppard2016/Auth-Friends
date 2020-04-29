// import React from "react";
// import axios from "axios";
// import { axiosWithAuth } from "../utils/axiosWithAuth";

// class AddFriendForm extends React.Component {
//     state = {
//         friend: [
//             {
//                 name: "",
//                 age: Number,
//                 email: "",
//             },
//         ],
//     };

//     handleChange = (e) => {
//         this.setState({
//             friend: {
//                 ...this.state.friend,
//                 [e.target.name]: e.target.value,
//             },
//         });
//     };

//     addFriend = (e) => {
//         e.preventDefault();
//         axiosWithAuth()
//             .post("friends", this.state.friend)
//             .then((res) => {
//                 console.log("addfriendform;addfriend;success;res", res);
//                 getFriendsList();
//             })
//             .catch((err) => console.error(err));
//     };

//     render() {
//         return (
//             <div>
//                 <form onSubmit={this.addFriend}>
//                     <input
//                         type="text"
//                         name="name"
//                         value={this.state.friend.name}
//                         onChange={this.handleChange}
//                     />

//                     <input
//                         type={Number}
//                         name="age"
//                         value={this.state.friend.age}
//                         onChange={this.handleChange}
//                     />

//                     <input
//                         type="email"
//                         name="email"
//                         value={this.state.friend.email}
//                         onChange={this.handleChange}
//                     />
//                 </form>
//             </div>
//         );
//     }
// }
