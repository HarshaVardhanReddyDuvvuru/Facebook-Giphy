import { Component } from "react";
import "./post.css";

const onChangeText = (e) => {
  this.setState({
    post_input: e.target.value
  });
};

class Post extends Component {
  state = {
    post_input: ""
  };

  render() {
    const post_input = this.state;
    return (
      <div className="profile-container">
        <img
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
          className="profile-img"
        />
        <input
          type="text"
          id="firstName"
          placeholder="Write something Here!"
          onChange={this.onChangeText}
          className="input-el"
        />
      </div>
    );
  }
}

export default Post;
