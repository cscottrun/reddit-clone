comments

this is a component that informs App.state.posts
It's rendered in postlist, but only when it's symbol is pressed. 
there will need to be state to track if postlist is being displayed
comments can live as an array


maybe each post-item of postList should be it's own component and handle it's state of whether or not it's
displaying the post thing
this adds another layer of abstraction for the post list, but maybe that's not a bad thing because it keeps components
small and simple

I think this is good because as it is, postlist as a list should not keep track of all the different items temproary state of showing the comment thing. 

And no parent should care whether or not the kid is showing their comments. 

only thing is that once a new comment is submitted, it has to pass through postlist, sort, and then to App
  