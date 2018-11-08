const React = require ('react');
const PropTypes = require ('prop-types');
      
function sort(a,b) {
  if (a.votes > b.votes)
  return -1;
  if (a.votes < b.votes)
  return 1;
  return 0;
}



function PostList (props) {
  let postSorted = Object.values(props.posts).sort(sort);
  return (
    <div className = 'postList'>
        {postSorted.map( post => {return(
          
          
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
                    onClick = {(e) => props.upvote(e,post.id)}
                    />
                <img id = 'downvote' 
                    src="app/assets/thumb.png" 
                    alt="downvote"
                    onClick = {(e) => props.downvote(e,post.id)}
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
        })}
      </div>
    
    
    
  )
}



module.exports= PostList;