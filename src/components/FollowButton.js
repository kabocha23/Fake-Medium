import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  follow,
  toggleOpen
} from './../redux/actions/actions';


/** renders bg white when user not follow, render green when followed */
class FollowButton extends Component {
  constructor(props) {
    super(props)
  };

  followUser = () => {
    const { _user, user, to_follow, follow, toggleOpen } = this.props;
    // check if user is signed in.
    if (Object.keys(_user).length > 0) {
      // check if user is not the same person to follow
      if (_user._id !== to_follow) {
        // check if you are not already following him
        if (user.indexOf(to_follow) === -1) {
          follow(_user._id,to_follow)
        }
      }
    } else {
      toggleOpen()
    };
  };
  render() {
    const { user, to_follow } = this.props;
    let following = user;
    const f = following.indexOf(to_follow);
    return ( 
      <div>
        <div>
          <div onClick={this.followUser} data-reactroot="">
            <a className={f === -1 ? "button green-border-button follow-button" : "button green-inner-button follow-button"} href="javascript:void(0);">
              {f === -1 ? 'Follow':'Following'}
            </a>
          </div>
        </div>
      </div>
    );
  };
};

const mapStateToProps = state => {
    return {
        _user: state.authUser.user,
    };
};

export default connect(
  mapStateToProps, 
  { 
    follow,
    toggleOpen
  }
)(FollowButton);