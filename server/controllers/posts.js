
import mongoose from 'mongoose';
import PostMovie from '../models/postMovie.js';

export const getPosts=async(req,res)=>{
  try{
  const postMovies= await PostMovie.find();

  res.status(200).json(postMovies);
  }
  catch(error){
  res.status(404).json({message : error.message});
  }
}
export const createPost=async (req,res)=>{
const post =req.body;
const newPost = new PostMovie(post);
try{
 await newPost.save()
 res.status(201).json(newPost);
}
catch(error){
  error.statys(409).json({message : error.message});
}
};
export const updatePost = async (req, res) => {
  const { id } = req.params;
  const post  = req.body;
  
  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

  const updatedPost = await PostMovie.findByIdAndUpdate(id, post, { new: true });

  res.json(updatedPost); 
}
export const deletePost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

  await PostMovie.findByIdAndRemove(id);

  res.json({ message: "Post deleted successfully." });
}
export const likePost = async (req, res) => {
  const { id } = req.params;

  if (!req.userId) {
      return res.json({ message: "Unauthenticated" });
    }

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
  
  const post = await PostMessage.findById(id);

  const index = post.likes.findIndex((id) => id ===String(req.userId));

  if (index === -1) {
    post.likes.push(req.userId);
  } else {
    post.likes = post.likes.filter((id) => id !== String(req.userId));
  }

  const updatedPost = await PostMessage.findByIdAndUpdate(id, post, { new: true });

  res.status(200).json(updatedPost);
}