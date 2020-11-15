import React from 'react';
import { Link } from 'react-router-dom';
import * as dateHelpers from '../../helpers/date'

interface FeaturedControlsProps {
  date: moment.Moment
}

function FeaturedControls({ date }: FeaturedControlsProps) {
  const nextDate = (!dateHelpers.isToday(date) && dateHelpers.dayAfter(date));
  const previousDate = dateHelpers.dayBefore(date);

  return (
    <div className="FeaturedControls">
      { previousDate && (
          <Link to={`/featured/${previousDate}`}>
            Previous
          </Link>
        )
      }
      { nextDate && (
          <Link to={`/featured/${nextDate}`}>
            Next
          </Link>
        )
      }
    </div>
  );
}

export default FeaturedControls;
