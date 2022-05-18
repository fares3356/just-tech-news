const User = require('./User');
const Post = reqiure('./Post');

// create associations
User.hasMany(Post, {
    foreignKey: 'user_id'
});

Post.belongsTo(User, {
    foreignKey: 'user_id',
})

module.exports = { User, Post };