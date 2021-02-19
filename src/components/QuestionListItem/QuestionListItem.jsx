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
  <div className=' card  '>
    <div className="card-header">
      <h2 className="card-title">{props.question.body}</h2>
      <Link className="btn btn-xs" to={{
        pathname:'question/edit',
        state: {question: props.question}
      }}>Edit Question</Link>
      <button className="btn btn-xs" onClick={handleDelete}>Delete Question</button>
    </div>
  </div>
)}

export default QuestionListItem;