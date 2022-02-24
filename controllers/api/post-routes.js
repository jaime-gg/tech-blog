const router = require('express').Router();
const { Post, User, Comment } = require('../../models');

// GET ALL POSTS | /API/POSTS
router.get('/', (req, res) => {
    Post.findAll({
      attributes: [
        'id',
        'body',
        'title',
        'created_at'
      ],
      order: [['created_at', 'DESC']],
      include: [
        {
          model: Comment,
          attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
          include: {
            model: User,
            attributes: ['username']
          }
        },
        {
          model: User,
          attributes: ['username']
        }
      ]
    })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// CREATE A NEW POST | /API/POSTS
router.post('/', (req, res) => {
    Post.create({
      title: req.body.title,
      body: req.body.body,
      user_id: req.session.user_id
    })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});



module.exports = router;