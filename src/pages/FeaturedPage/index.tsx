import { default as React, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import * as dateHelpers from '../../helpers/date'
import nasaService from '../../services/nasa';
import { Picture } from '../../interfaces/Picture';
import Card from '../../components/Card';
import { changePictureAction } from '../../store/featured';
import { RootState } from '../../store';

import FeaturedControls from './FeaturedControls';
import FeaturedPicture from './FeaturedPicture';

interface FeaturedPageParams {
  date: string | undefined
}

function FeaturedPage() {
  const dispatch = useDispatch();
  const { picture } = useSelector(({ featured }: RootState) => featured);

  const { date: paramsDate } = useParams<FeaturedPageParams>();
  const targetDate = dateHelpers.parse(paramsDate);
  const stringDate = dateHelpers.stringify(targetDate);

  useEffect(() => {
    nasaService.fetchAPOD(stringDate)
      .then((data: Picture) => {
        dispatch(changePictureAction(data))
      })
      .catch((err) => {
        // dispatch error
        dispatch(changePictureAction(null))
      })
  }, [stringDate, dispatch]);

  return (
    <div className="container my-3 mx-auto">
      <Card>
        <FeaturedPicture picture={picture} />
        <FeaturedControls date={targetDate} />
      </Card>
    </div>
  );
}

export default FeaturedPage;
