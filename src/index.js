import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>Warning!</h4>
          Are you sure want to do this?
        </div>
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timeAgo="Today at 4:45PM"
          content="Nice blog post!"
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Judy"
          timeAgo="Today at 2:00PM"
          content="Every day happy!"
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="David"
          timeAgo="Yesterday at 7:00AM"
          content="Always good!"
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
