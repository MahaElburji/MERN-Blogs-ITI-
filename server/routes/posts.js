import express from 'express';
import { getPosts, createPost, updatePost, deletePost } from '../controllers/posts.js';

import auth from './../middleware/auth';
const router = express.Router();

 router.get('/', getPosts );
router.post('/', auth, createPost);
router.patch('/:id',auth, updatePost);
router.delete('/:id',auth, deletePost);
// router.get('/',(req, res) => {
//     res.send('works');
// })

export default router;
