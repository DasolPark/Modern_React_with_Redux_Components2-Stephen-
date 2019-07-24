import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard />
      <CommentDetail
        author="Sam"
        timeAgo="Today at 4:45PM"
        content="Nice blog post!"
      />
      <CommentDetail
        author="Judy"
        timeAgo="Today at 2:00PM"
        content="Every day happy!"
      />
      <CommentDetail
        author="David"
        timeAgo="Yesterday at 7:00AM"
        content="Always good!"
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
