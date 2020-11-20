import React, { FunctionComponent, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { SingleDatePicker } from 'react-dates';
import * as dateHelpers from '../../helpers/date';

interface FeaturedControlsProps {
  date: moment.Moment
}

const FeaturedControls: FunctionComponent<FeaturedControlsProps> = ({ date }) => {
  const history = useHistory();
  const [datepickerFocus, setDatepickerFocus] = useState(false);

  const nextDate = (!dateHelpers.isToday(date) && dateHelpers.dayAfter(date));
  const previousDate = dateHelpers.dayBefore(date);

  const handleOnFocusChange = (evt: { focused: boolean }): void => {
    setDatepickerFocus(evt.focused);
  }

  const handleOnChangeDate = (chosenDate: moment.Moment | null): void => {
    if (chosenDate) {
      const targetDate = dateHelpers.stringify(chosenDate);
      history.push(`/featured/${targetDate}`);
    }
  }

  return (
    <div className="FeaturedControls d-flex justify-content-start">
        { previousDate && (
            <Link to={`/featured/${previousDate}`} className="col-4 btn btn-text">
              Previous
            </Link>
          )
        }
      <div className="col-4 text-center">
        <SingleDatePicker
          date={date}
          onDateChange={handleOnChangeDate}
          focused={datepickerFocus}
          onFocusChange={handleOnFocusChange}
          openDirection="up"
          numberOfMonths={1}
          enableOutsideDays={false}
          displayFormat={dateHelpers.DATE_FORMAT}
          isOutsideRange={dateHelpers.isOutsideRange}
          id="featured-controls-date"
        />
      </div>
      { nextDate && (
          <Link to={`/featured/${nextDate}`}  className="col-4 btn btn-primary">
            Next
          </Link>
        )
      }
    </div>
  );
}

export default FeaturedControls;
