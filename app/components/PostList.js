const React = require ('react');
const PropTypes = require ('prop-types');

function timeDifference (newTime,oldTime) {
  let difference = newTime - oldTime;
  let age = {};
  age['days'] = Math.floor(difference/1000/60/60/24);
    difference -= age.days*1000*60*60*24
  age['hours'] = Math.floor(difference/1000/60/60);
    difference -= age.hours*1000*60*60
  age['minutes'] = Math.floor(difference/1000/60);
    difference -= age.minutes*1000*60
  age['seconds'] = Math.floor(difference/1000);
    return age;
}

function displayAge (age) {
	if (age.minutes < 1) {
		return (age.seconds + ' second' + (age.seconds < 2 ? ' ago': 's ago'))
	} else if (age.hours < 1) {
		return (age.minutes + ' minute' + (age.minutes < 2 ? ' ago' : 's ago'))
	} else if (age.days < 1) {
		return (age.hours + ' hour' + (age.hours < 2 ? ' ago' : 's ago'))
	} else {
		return (age.days + ' day' + (age.days < 2 ? ' ago' : 's ago'))
	}
}

class Comments extends React.Component {
  render() {
    return (
      this.props.comments.map ( comment => {
        return (
          <div 
          key = {comment}
          className = 'comments-div'>
            <h5>{comment}</h5>
          </div>
        )
      })
    
    )
  }
}


class PostItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showComments: false,
    }
    this.openComments = this.openComments.bind(this)
  }

  openComments () {
    this.setState ( (prevState) => ({
      showComments: !prevState.showComments
    }))
  }
  render () {
    return (
      
      <div 
      className = 'postBox'>
      
      <div className = 'postImg'>
        <img className = 'postImg' src={this.props.post.img} alt={'img for '+ this.props.post.title}/> 
      </div> 
        
        <div className = 'vote'>
          <img id = 'upvote' 
              src="app/assets/thumb.png" 
              alt="upvote"
              onClick = {(e) => this.props.upvote(e,this.props.post.id)}
              />
          <img id = 'downvote' 
              src="app/assets/thumb.png" 
              alt="downvote"
              onClick = {(e) => this.props.downvote(e,this.props.post.id)}
              />
          <h3 id= 'votecount'>{this.props.post.votes}</h3>
        </div>

      <div className= 'postTitle'>
        <h2>{this.props.post.title}</h2>
      </div>

      <div className= 'postBody'>
        <p>{this.props.post.body}</p>
      <div className= 'author'>-{this.props.post.author}</div>

      <p className='timestamp'>
      <img src="/app/assets/comments-icon.png" 
      alt="comments-icon"
      className= 'comments-icon'
      onClick = {this.openComments}
      />
        {this.props.post.comments.length} comment{this.props.post.comments.length !==1 ? 's' : ''} 
      </p>

      <p className= 'timestamp'>{displayAge(timeDifference(new Date(), this.props.post.timestamp))}</p>
      </div>

      <div className = 'comments-box'>
        {this.state.showComments && 
        < Comments
          comments = {this.props.post.comments} />}
      </div>
      
    </div>

    )
  }
}


class PostList extends React.Component {
  render() {
    return (
    this.props.sortedPosts.map( post => {
      return (
       < PostItem
          key = {post.id}
          post = {post}
          upvote = {this.props.upvote}
          downvote = {this.props.downvote}
           />
      )
    })
  )}
}





module.exports = PostList;

  