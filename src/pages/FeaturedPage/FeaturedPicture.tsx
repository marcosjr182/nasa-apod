import React, { FunctionComponent } from 'react';
import Loading from '../../components/Loading';
import { Picture } from '../../interfaces/Picture';

type FeaturedPictureProps = {
  picture: Picture | null
}

const FeaturedPicture: FunctionComponent<FeaturedPictureProps> = ({ picture }) => {
  if (!picture) return <Loading />;

  const { url, title, explanation } = picture;

  return (
    <React.Fragment>
      <div className="col-12 text-center">
        <img className="align-center" height="600" src={url} alt="Nasa's APOD" />
      </div>

      <footer className="my-4">
        <h3 className="masthead-brand">{title}</h3>
        <div className="inner">
          <p>{explanation}</p>
        </div>
      </footer>
    </React.Fragment>
  );
}

export default FeaturedPicture;
