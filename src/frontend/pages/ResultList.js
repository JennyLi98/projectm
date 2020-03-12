import React from 'react';
import TestImage from './TestImage';
import {Container, Col, Row, Button} from 'react-bootstrap';

const ResultList = ({test, study}) =>{
  console.log(test);
  console.log(study);
  const cardComponent = test.map((user, i) => {
    return <TestImage key={i + 1 } turl={test[i]} surl={study[i]}/>
  });
  return (
    <div>
    <div className='test-page'>
      <Row>
        <Col md={6} className="text-right">
          <p className="resulttextDisplayl">Here is what you saw for "indoor" and "outdoor" judgements</p>
        </Col>
        <Col md={6} className="text-left">
          <p className="resulttextDisplayl">Here is what you saw for "old" and "new" judgements</p>
        </Col>
      </Row>
    </div>
      {cardComponent}
    </div>
  );
}

export default ResultList;
