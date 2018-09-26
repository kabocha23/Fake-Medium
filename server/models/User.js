const mongoose = require('mongoose');

let UserSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    provider: String,
    provider_id: String,
    token: String,
    provider_pic: String,
    followers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      }
    ],
    following: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      }
    ]
  }
);

UserSchema.methods.follow = (following_id) => {
  if (following.indexOf(following_id) === -1) {
      following.push(following_id)        
  };
  return save();
};

UserSchema.methods.addFollower = (follower_id) => {
  followers.push(follower_id);
};

module.exports = mongoose.model('User', UserSchema);