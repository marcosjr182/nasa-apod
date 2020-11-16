import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import * as dateHelpers from '../../helpers/date';

interface FeaturedControlsProps {
  date: moment.Moment
}

const FeaturedControls: FunctionComponent<FeaturedControlsProps> = ({ date }) => {
  const nextDate = (!dateHelpers.isToday(date) && dateHelpers.dayAfter(date));
  const previousDate = dateHelpers.dayBefore(date);

  return (
    <div className="FeaturedControls d-flex justify-content-between">
      { previousDate && (
          <Link to={`/featured/${previousDate}`} className="btn btn-secondary">
            Previous
          </Link>
        )
      }
      { nextDate && (
          <Link to={`/featured/${nextDate}`}  className="btn btn-primary">
            Next
          </Link>
        )
      }
    </div>
  );
}

export default FeaturedControls;
