import React, { FunctionComponent } from 'react';
import { Picture } from '../../interfaces/Picture';

type FeaturedPictureProps = {
  picture?: Picture
}

const FeaturedPicture: FunctionComponent<FeaturedPictureProps> = ({ picture }) => {
  if (!picture) return null;

  const { url, title, explanation } = picture;

  return (
    <div className="d-flex flex-column h-100 align-items-end">
      <header className="masthead mb-auto">
        <div className="inner">
          <h3 className="masthead-brand">{title}</h3>
        </div>
      </header>

      <img width="50%" height="50%" src={url} alt="Nasa's APOD" />

      <footer className="mastfoot mt-auto">
        <div className="inner">
          <p>{explanation}</p>
        </div>
      </footer>
    </div>
  );
}

export default FeaturedPicture;
