//this comp will render the list of posts
// App will maintain state of posts and pass as props
// Should App sort, or should PostList - I think postlist
// this comp will pass vote counter up to App - should do that directly

// not an array - can't use map - how to loop through all the objects? 
//sortedArr = Object.values(obj.posts).sort(sort);
      // Object.values(obj).forEach( subobj => console.log(subobj.body))
      
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
            <div className= 'postTitle'>
              <h2>{post.title}</h2>
            </div>
            <div className= 'postBody'>
              <p>{post.body}</p>
            </div>

          
          </div>
        )
        })}
      </div>
    
    
    
  )
}





module.exports= PostList;