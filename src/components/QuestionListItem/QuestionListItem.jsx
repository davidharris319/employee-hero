import React  from 'react';
import { Link } from 'react-router-dom';
import questionService from '../../utils/questionService';


const QuestionListItem = (props) => {

  const handleDelete = async () => {
    await questionService.deleteOne(props.question._id);
    const updatedList = await questionService.getAllQuestions();
    props.setQuestions(updatedList);
  }
  
  return (

  <div className="OrgPage">
    <div className=' card CardBorder mt-1 CardWidth-Min'>
      <div className="center-form">
        <h3 className="card-title mt-3">{props.question.body}</h3>
        <button className="CancelButton btn mb-3">
          <Link className="CancelLink" to={{
            pathname:'question/edit',
            state: {question: props.question}
          }}>Edit Question</Link>
        </button>
        <button className="CancelButton btn mb-3 mx-3 CancelLink" onClick={handleDelete}>Delete Question</button>
      </div>
    </div>
  </div>

)}

export default QuestionListItem;