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

class PostItem extends React.Component {
  render () {
    return (
      
      <div 
      className = 'postBox'>
      <div className = 'postImg'>
        <img id = 'postImg' src={this.props.post.img} alt={'img for '+ this.props.post.title}/> 
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
      <p className='timestamp'>{this.props.post.comments} comment{this.props.post.comments !==1 ? 's' : ''} </p>
      <p className= 'timestamp'>{displayAge(timeDifference(new Date(), this.props.post.timestamp))}</p>
      </div>

    
    </div>

    )
  }
}

   /// PROPS that went to postList that now need to go to postItem
{/*  PostList 
        sortedPosts = {this.handleSort(this.props)}
        upvote = {this.props.upvote}
        downvote = {this.props.downvote}
        filter = {this.props.filter}
       */}


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

  