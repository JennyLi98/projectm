import React from 'react';
import TestImage from './TestImage';

const ResultList = ({test, study}) =>{
  console.log(test);
  console.log(study);
  const cardComponent = test.map((user, i) => {
    return <TestImage key={i + 1 } turl={test[i]} surl={study[i]}/>
  });
  return (
    <div>
      {cardComponent}
    </div>
  );
}

export default ResultList;
