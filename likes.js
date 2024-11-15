const Likes = sequelize.define('Likes', {});

// Many-to-many relationship
User.belongsToMany(Post, { through: Likes, as: 'likedPosts', foreignKey: 'userId' });
Post.belongsToMany(User, { through: Likes, as: 'likes', foreignKey: 'postId' });

module.exports = Likes;
