const React = require ('react');
const PropTypes = require ('prop-types');
const NewPostForm = require ('./NewPostForm');
const PostList = require ('./PostList');
const Sort = require ('./Sort');

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

// gets passed the value of App.state.sort as sortType
// get passed function to update app.state.sort <-- selectSort
class SortSelector extends React.Component {
  render() {
    return (
      <div>
        <select value={this.props.sortType} name="sort" onChange={this.props.selectSort}>
                <option value="votes">Sort By Votes</option>
                <option value="title">Sort By Title</option>
        </select>
      </div>
    )
  }
}
// ======================================================================
class App extends React.Component {
  constructor (props) {
    super (props) 

    this.state = {
      makingPost: false,
      postCounter: 3,
      sort: 'votes',
      posts: {1: {
        id: 1,
        title: 'I heart bananas',
        body: 'bananas are my favorite fruit',
        author: 'Zubair',
        img: 'https://media.licdn.com/dms/image/C4D03AQGDsySczUr_sw/profile-displayphoto-shrink_800_800/0?e=1547078400&v=beta&t=AZozQ7cXLfTayXPXj2IsXMUmYxfSLgkIPJ_XdPIAD3k',
        votes: 4,
        comments: 1
      },
      2: {
        id: 2,
        title: 'My love of posts',
        body: 'this is my second post',
        author: 'carrie',
        img: 'https://www.noelgay.com/wp-content/uploads/2017/10/Carrie-Scott-2-185x230.jpg',
        votes: 2,
        comments: 3
      }}
    }
    this.openForm = this.openForm.bind(this);
    this.selectSort = this.selectSort.bind(this);
    this.import = this.import.bind(this);
    this.upvote = this.upvote.bind(this);
    this.downvote = this.downvote.bind(this);
    
  }
  openForm () {
    this.setState ( (prevState) => ({
      makingPost: !prevState.makingPost
    }))
  }
  selectSort(e) {
    value = e.target.value
    this.setState ( 
      {sort: value}
    )
  }

  import(data) {
    let id = this.state.postCounter;
    let newPost = {
      id: id,
      title: data.title, 
      body: data.body,
      author: data.author,
      img: data.img,
      votes: null,
      comments: 0,
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
        < SortSelector
          sortType = {this.sort}
          selectSort = {this.selectSort} />
        < NewPostBtn 
          makePost = {this.openForm} />
        
        {this.state.makingPost && 
        < NewPostForm
          id = {this.postCounter}
          export = {this.import}
          />}
        < Sort 
          sort = {this.state.sort}
          posts = {this.state.posts}
          upvote = {this.upvote}
          downvote = {this.downvote}
        
        />

      </div>
    )
  }
}




module.exports = App;