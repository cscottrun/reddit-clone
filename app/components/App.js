const React = require ('react');
const PropTypes = require ('prop-types');
const NewPostForm = require ('./NewPostForm');
const PostList = require ('./Postlist')

//actual header
function Header () {
  return (
    <div className = 'header'>
      <h1>Reddit Clone</h1>
    </div>
  )
}

function NewPostBtn (props) {
  return (
    <button 
      className='newPostBtn'
      onClick = {props.makePost}>
      New post
    </button>
  )
}


//filter input box
// add timestamp onSubmit


class App extends React.Component {
  constructor (props) {
    super (props) 

    this.state = {
      makingPost: false,
      postCounter: 3,
      posts: {1: {
        id: 1,
        title: 'I heart bananas',
        body: 'bananas are my favorite fruit',
        author: 'Zubair',
        img: 'https://media.licdn.com/dms/image/C4D03AQGDsySczUr_sw/profile-displayphoto-shrink_800_800/0?e=1547078400&v=beta&t=AZozQ7cXLfTayXPXj2IsXMUmYxfSLgkIPJ_XdPIAD3k',
        votes: 4
      },
      2: {
        id: 2,
        title: 'My love of posts',
        body: 'this is my second post',
        author: 'carrie',
        img: 'https://www.noelgay.com/wp-content/uploads/2017/10/Carrie-Scott-2-185x230.jpg',
        votes: 2
      }}
    }
    this.openForm = this.openForm.bind(this);
    this.import = this.import.bind(this);
    this.upvote = this.upvote.bind(this);
    this.downvote = this.downvote.bind(this);
    
  }
  openForm () {
    this.setState ( (prevState) => ({
      makingPost: !prevState.makingPost
    }))
  }
  import(data) {
    let id = this.state.postCounter;
    let newPost = {
      id: id,
      title: data.title, 
      body: data.body,
      author: data.author,
      img: data.img,
      votes: null
    }
    this.setState( (prevstate) => {
      prevstate.posts[id] = newPost;
      prevstate.postCounter = prevstate.postCounter + 1;
      prevstate.makingPost = false;
      return prevstate;
    })
  }
  upvote(e,id) {
    this.setState ( (prevstate) => {
      prevstate.posts[id].votes = prevstate.posts[id].votes +1;
      return prevstate;
    })
  }
  downvote(e,id) {
    this.setState ( (prevstate) => {
      if (prevstate.posts[id].votes > 0) {
      prevstate.posts[id].votes = prevstate.posts[id].votes -1
      };
      return prevstate;
    })
  }
  

  render () {
    return (
      <div className = 'container'>
        < Header />
        < NewPostBtn 
          makePost = {this.openForm} />
        
        {this.state.makingPost && 
        < NewPostForm
          id = {this.postCounter}
          export = {this.import}
          />}
        < PostList 
          posts = {this.state.posts}
          upvote = {this.upvote}
          downvote = {this.downvote}
        
        />

      </div>
    )
  }
}




module.exports = App;