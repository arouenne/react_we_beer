import React from 'react';

const BeerComponent: React.FunctionComponent<{
  name: string;
  id: number;
}> = (props) => {
  return (
    <li key={props.id}>
      {props.name}
    </li>
  );
};

export default BeerComponent;
