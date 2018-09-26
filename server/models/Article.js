const mongoose = require('mongoose');

let ArticleSchema =  new mongoose.Schema(
  {
    text: String,
    title: String,
    description: String,
    feature_img: String,
    claps: Number,
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    comments: [
      {
        author: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User'
        },
        text: String
      }
    ]
  }
);

ArticleSchema.methods.clap = () => {
  claps++;
  return save();
};

ArticleSchema.methods.comment = (comm) => {
  comments.push(comm);
  return save();
};

ArticleSchema.methods.comment = (author_id) => {
  author = author_id;
  return save();
};

ArticleSchema.methods.getUserArticle = (_id) => {
  Article.find(
    {
      'author': _id
    }
  ).then(
    (article) => {
      return article;
    }
  );
};

module.exports = mongoose.model('Article', ArticleSchema);