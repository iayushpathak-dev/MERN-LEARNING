// https://localhost:5000/posts
import express from 'express';
import { getPosts,createPost } from '../controllers/posts.js';

const router = express.Router();
router.get('/', getPosts);
router.post('/', createPost);
// router.put('/', updatePost);
// router.delete('/', deletePost);

export default router;