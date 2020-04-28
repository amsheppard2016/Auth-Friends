import React from "react";

import { axiosWithAuth } from "../utils/axiosWithAuth";

class FriendsList extends React.Component {
    state = {
        friends: [],
    };
    componentDidMount() {
        this.getFriendsList();
    }

    getFriendsList = () => {
        axiosWithAuth()
            .get("friends")
            .then((res) => {
                console.log(
                    "as;frinedslist.js;getfriends;success;res",
                    res.data
                );
                this.setState({ friends: res.data });
            })
            .catch((err) =>
                console.error("as;friendslist.js; getfriends;failure;err", err)
            );
    };

    render() {
        console.log("as;friendslist.js;this.state", this.state);
        return (
            <div className="friendslist">
                <h1>Friend's</h1>
                {this.props.fetchingData && (
                    <div className="key spinner">
                        <p>Loading Data</p>
                    </div>
                )}
                {this.state.friends.length > 0 && (
                    <div className="friends">
                        {this.state.friends.map((friend) => {
                            return (
                                <div className="friends-list" key={friend.id}>
                                    <h1>{friend.name}</h1>
                                    <h3>Age: {friend.age}</h3>
                                    <h3>Email: {friend.email}</h3>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        );
    }
}

export default FriendsList;
