import React, { FunctionComponent } from 'react';
import { Picture } from '../../interfaces/Picture';

type FeaturedPictureProps = {
  picture?: Picture
}

const FeaturedPicture: FunctionComponent<FeaturedPictureProps> = ({ picture }) => {
  if (!picture) return null;

  const { url, title, explanation } = picture;

  return (
    <React.Fragment>
      <div className="col-12 text-center">
        <img className="align-center" height="600" src={url} alt="Nasa's APOD" />
      </div>

      <footer className="mastfoot mt-auto">
        <h3 className="masthead-brand">{title}</h3>
        <div className="inner">
          <p>{explanation}</p>
        </div>
      </footer>
    </React.Fragment>
  );
}

export default FeaturedPicture;
