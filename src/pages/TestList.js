import React from 'react';
import TestBrief from './TestBrief';

const TestList = () =>{
  let test = ['', '', ''];
  const cardComponent = test.map((user, i) => {
    return <TestBrief id={i + 1 } />
  });
  return (
    <div>
      {cardComponent}
    </div>
  );
}

export default TestList;
