import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Sam"
        timeAgo="Today at 4:45PM"
        text="Nice blog post!"
      />
      <CommentDetail
        author="Judy"
        timeAgo="Today at 2:00PM"
        text="Every day happy!"
      />
      <CommentDetail
        author="David"
        timeAgo="Yesterday at 7:00AM"
        text="Always good!"
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
