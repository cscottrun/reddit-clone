const React = require ('react');
const PropTypes = require ('prop-types');
const PostList = require ('./PostList');

//this will be rendered by App and passed the app.state.sort value
// if default, then sort by votes
// this comp wil render Postlist, passing Postlist an array of posts, presorted
// this comp will have to handle voting, passing it up to App. state, then resorting

    //PrOPS (== upvote and downwvote are functions effect state on APP)
      //posts = {this.state.posts}
      //upvote = {this.upvote}
      //downvote = {this.downvote}
      //sort = {this.state.sort}  < -- how it's being sorted  ex. 'top votes'

function sortTopVotes(a,b) {
  if (a.votes > b.votes)
  return -1;
  if (a.votes < b.votes)
  return 1;
  return 0;
}

class Sort extends React.Component {

  handleSort () {
    if (this.props.sort === 'top votes') {
      return sortedPosts = Object.values(this.props.posts).sort(sortTopVotes);
    }
    return sortedPosts = 'not sorting by top votes- other sorting method';
  }

  render() {

    return (

      < PostList 
        sortedPosts = {this.handleSort(this.props)}
      />
      
    )
  }



}



module.exports = Sort;