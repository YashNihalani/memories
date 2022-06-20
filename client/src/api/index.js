import axios from "axios";

const url = "http://localhost:5000/posts";

export const fetchPosts = () => axios.get(url);
export const createPost = (newPosts) =>
  axios.post("http://localhost:5000/posts", newPosts);
export const updatePost = (id, updatedPost) =>
  axios.patch("http://localhost:5000/posts/" + id, updatedPost);
export const deletePost = (id) =>
  axios.delete("http://localhost:5000/posts/" + id);
export const likePost = (id, Post) =>
  axios.patch("http://localhost:5000/posts/" + id + "/likePost");
