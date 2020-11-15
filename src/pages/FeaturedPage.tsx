import React from 'react';
import { useParams } from 'react-router-dom';
import { fallbackDate, validate } from '../helpers/date'

interface FeaturedPageParams {
  date: string|undefined
}

function FeaturedPage() {
  const { date } = useParams<FeaturedPageParams>();
  const targetDate = validate(date) ? date : fallbackDate();

  return (
    <div className="FeaturedPage">
      <div>featured picture of {targetDate}</div>
    </div>
  );
}

export default FeaturedPage;
