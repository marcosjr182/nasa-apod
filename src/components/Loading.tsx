import React from  'react';
import './Loading.css'

function Loading() {
  return (
    <div className="Loading d-flex align-items-center justify-content-center text-center">
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  )
}

export default Loading;
