import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { SingleDatePicker } from 'react-dates';
import * as dateHelpers from '../../helpers/date';

interface FeaturedControlsProps {
  date: moment.Moment
}

const FeaturedControls: FunctionComponent<FeaturedControlsProps> = ({ date }) => {
  const nextDate = (!dateHelpers.isToday(date) && dateHelpers.dayAfter(date));
  const previousDate = dateHelpers.dayBefore(date);

  return (
    <div className="FeaturedControls d-flex justify-content-between">
      <div className="col-4">
        { previousDate && (
            <Link to={`/featured/${previousDate}`} className="btn btn-secondary">
              Previous
            </Link>
          )
        }
      </div>
      <div className="col-4">
        <SingleDatePicker
          date={date} // momentPropTypes.momentObj or null
          onDateChange={() => {}} // PropTypes.func.isRequired
          focused={false} // PropTypes.bool
          onFocusChange={({ focused }) => { }} // PropTypes.func.isRequired
          id="featured-controls-date" // PropTypes.string.isRequired,
        />
      </div>
      <div className="col-4">
        { nextDate && (
            <Link to={`/featured/${nextDate}`}  className="btn btn-primary">
              Next
            </Link>
          )
        }
      </div>
    </div>
  );
}

export default FeaturedControls;
