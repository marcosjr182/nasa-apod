import React, { FunctionComponent } from 'react';
import './Card.css';

type CardProps = {
  className?: string
}

const Card: FunctionComponent<CardProps> = ({ children, className = '' }) => {
  return (
    <div className={`Card ${className}`}>
      <div className="col-12">
        {children}
      </div>
    </div>
  )
}

export default Card;
