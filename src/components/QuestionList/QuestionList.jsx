import React  from 'react';
import { Link } from 'react-router-dom';
import questionService from '../../utils/questionService';


const QuestionList = (props) => (
  
  <div className='panel panel-default'>
    <div className="panel-heading">
      <h2 className="panel-title">{props.question.body}</h2>
      <Link className="btn btn-xs" to={{
        pathname:'question/edit',
        state: {question: props.question}
      }}>Edit Question</Link>
      <button className="btn btn-xs" onClick={() => questionService.deleteOne(props.question._id)}>Delete Question</button>
    </div>
  </div>
)

export default QuestionList;