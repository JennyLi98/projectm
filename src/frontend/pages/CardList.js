import React from 'react';
import Card from './card';
import '../css/index.css';
import { withRouter } from 'react-router';

const CardList = ({animals}) =>{
  const cardComponent = animals.map((user, i) => {
    return <Card key={i} name={animals[i].name} description={animals[i].description} url={animals[i].url} imgid={animals[i].imgid} />
  });
  return (
    <div className="block">
      {cardComponent}
    </div>
  );
}

export default withRouter(CardList);
