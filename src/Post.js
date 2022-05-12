import { Component } from "react";
import "./post.css";

class Post extends Component {
  state = {
    post_input: "",
    post_list: []
  };

  onChangeText = (e) => {
    this.setState({
      post_input: e.target.value
    });
  };

  updatePosts = () => {
    const { post_input, post_list } = this.state;
    this.setState({
      post_list: [post_input, ...post_list]
    });
  };

  render() {
    const { post_input, post_list } = this.state;
    console.log(post_list);
    return (
      <>
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
        <button onClick={this.updatePosts}>Post</button>
        <ul>
          {post_list.map((e) => {
            return <li>{e}</li>;
          })}
        </ul>
      </>
    );
  }
}

export default Post;
