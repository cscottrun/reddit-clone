const React = require ('react');
const PropTypes = require ('prop-types');


//PROPS
//sortedPosts < -- the array of posts sorted
// upvote function
// downvote function

class PostList extends React.Component {
  render() {
    return (
    this.props.sortedPosts.map( post => {
      return (
       
        <div 
            key= {post.id}
            className = 'postBox'>
            <div className = 'postImg'>
              <img id = 'postImg' src={post.img} alt={'img for '+ post.title}/> 
            </div> 
              <div className = 'vote'>
                <img id = 'upvote' 
                    src="app/assets/thumb.png" 
                    alt="upvote"
                    onClick = {(e) => this.props.upvote(e,post.id)}
                    />
                <img id = 'downvote' 
                    src="app/assets/thumb.png" 
                    alt="downvote"
                    onClick = {(e) => this.props.downvote(e,post.id)}
                    />
                <h3 id= 'votecount'>{post.votes}</h3>

              </div>
            <div className= 'postTitle'>
              <h2>{post.title}</h2>
            </div>
            <div className= 'postBody'>
              <p>{post.body}</p>
            <div className= 'author'>-{post.author}</div>
            <p className='timestamp'>{post.comments} comment{post.comments !==1 ? 's' : ''} </p>
            </div>

          
          </div>



      )
    })
    )}
}

module.exports = PostList;
