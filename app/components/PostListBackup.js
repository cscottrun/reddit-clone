
// this works, wanted to save before I convert to class
// didn't export

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
            key= {post.title}
            className = 'postBox'>
            <div className = 'postImg'>
              <img id = 'postImg' src={post.img} alt={'img for '+ post.title}/> 
            </div> 
              <div className = 'vote'>
                <img id = 'upvote' 
                    src="app/assets/thumb.png" 
                    alt="upvote"
                    
                    />
                <img id = 'downvote' src="app/assets/thumb.png" alt="downvote"/>
                <h3 id= 'votecount'>{post.votes}</h3>

              </div>
            <div className= 'postTitle'>
              <h2>{post.title}</h2>
            </div>
            <div className= 'postBody'>
              <p>{post.body}</p>
            <div className= 'author'>-{post.author}</div>
            <p className='timestamp'>time stamp</p>
            </div>

          
          </div>
        )
        })}
      </div>
    
    
    
  )
}





