import { default as React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as dateHelpers from '../../helpers/date'
import FeaturedControls from './FeaturedControls';
import nasaService from '../../services/nasa';
import { Picture } from '../../interfaces/Picture';
import Loading from '../../components/Loading';
import FeaturedPicture from './FeaturedPicture';

interface FeaturedPageParams {
  date: string | undefined
}

function FeaturedPage() {
  const [picture, setPicture] = useState<Picture>();
  const [error, setError] = useState(null)

  const { date } = useParams<FeaturedPageParams>();
  const targetDate = dateHelpers.parse(date);
  const stringDate = dateHelpers.stringify(targetDate);

  useEffect(() => {
    nasaService.fetchAPOD(stringDate)
      .then((data: Picture) => setPicture(data))
      .catch((err) => setError(err))
  }, [stringDate]);

  if (!picture && !error) {
    return <Loading />
  }

  return (
    <div className="container my-3 mx-auto">
      <div className="d-flex flex-column flex-end">
        <FeaturedPicture picture={picture} />
        <FeaturedControls date={targetDate} />
      </div>
    </div>
  );
}

export default FeaturedPage;
