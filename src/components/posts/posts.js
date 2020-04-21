import React from "react";
import Post from "./post";
import postimg1 from "../assets/img/post1.jpg";
import postimg2 from "../assets/img/post2.jpg";
import postimg3 from "../assets/img/post3.jpg";
import postimg4 from "../assets/img/post4.jpg";
import "./posts.css"

class Posts extends React.Component {
  render() {
    return (
      <div className="posts__inner">
        <Post
          avatar="https://www.meme-arsenal.com/memes/f6da12f07ab48e36aeae7e7df5444b9b.jpg"
          name="бабуся Катя"
          nickname="@dart_vader"
          content="Нормально робиш - нормально буде."
          date="26 февр."
          postimg={postimg1}
        />
        <Post
          avatar="https://www.meme-arsenal.com/memes/f6da12f07ab48e36aeae7e7df5444b9b.jpg"
          name="бабуся Катя"
          nickname="@dart_vader"
          content="Лучше один день прожить - волком, чем сто лет - шакалом."
          date="26 февр."
          postimg={postimg3}
        />
        <Post
          avatar="https://www.meme-arsenal.com/memes/f6da12f07ab48e36aeae7e7df5444b9b.jpg"
          name="бабуся Катя"
          nickname="@dart_vader"
          content="Если ты будешь себя жалеть — ты никогда не победишь."
          date="26 февр."
          postimg={postimg4}
        />
      </div>
    );
  }
}
export default Posts;
