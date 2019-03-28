const Post = require('../models/post');

module.exports = {
    async list(req, res){
        const posts = await Post.find();

        return res.json(posts);
    }, 
    async store(req, res){
        const post = await Post.create({
            name: req.file.originalname,
            size: req.file.size,
            key: req.file.filename,
            url: '',
        })
    
        return res.json(post);
    },
    async delete(req, res){
        const post = await Post.findById(req.params.id);

        await post.remove();
    
        return res.send();
    }
}