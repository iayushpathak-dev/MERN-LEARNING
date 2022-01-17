import React from "react";
import { useSelector } from "react-redux";

import Post from "../Posts/Post/Post";
import useStyles from "./styles";

const Posts = () => {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();

  console.log(posts);
  return (
    <>
      <h1> hi this is a posts</h1>
      <Post />
      <Post />
    </>
  );
};

export default Posts;
