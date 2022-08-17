import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleLeft,
  faChevronCircleRight,
} from "@fortawesome/free-solid-svg-icons";

import lstOfImageObjs from "../../data/listPictureLinks";

function PictureCarousel() {
  const [leftImageObjId, setLeftImageObjId] = useState(1);
  const [centerImageObjId, setCenterImageObjId] = useState(2);
  const [rightImageObjId, setRightImageObjId] = useState(3);

  function handleClickToLeft() {
    if (leftImageObjId !== 0) {
      setRightImageObjId(centerImageObjId);
      setCenterImageObjId(leftImageObjId);
      setLeftImageObjId(leftImageObjId - 1);
    } else {
      setRightImageObjId(centerImageObjId);
      setCenterImageObjId(leftImageObjId);
      setLeftImageObjId(lstOfImageObjs.length - 1);
    }
  }

  function handleClickToRight() {
    if (rightImageObjId !== lstOfImageObjs.length - 1) {
      setLeftImageObjId(centerImageObjId);
      setCenterImageObjId(rightImageObjId);
      setRightImageObjId(rightImageObjId + 1);
    } else {
      setLeftImageObjId(centerImageObjId);
      setCenterImageObjId(rightImageObjId);
      setRightImageObjId(0);
    }
  }

  return (
    <div className="widget-page-content-container">
      <h1>Picture Carousel:</h1>
      <div className="carousel-wrapper">
        <div>
          <FontAwesomeIcon
            icon={faChevronCircleLeft}
            onClick={handleClickToLeft}
            className="slider-button"
          />
        </div>
        <div className="image-left">
          <img
            src={lstOfImageObjs[leftImageObjId].image}
            alt={lstOfImageObjs[leftImageObjId].altText}
          />
        </div>
        <div className="image-center">
          <img
            src={lstOfImageObjs[centerImageObjId].image}
            alt={lstOfImageObjs[centerImageObjId].image}
          />
        </div>
        <div className="image-right">
          <img
            src={lstOfImageObjs[rightImageObjId].image}
            alt={lstOfImageObjs[rightImageObjId].altText}
          />
        </div>
        <div>
          <FontAwesomeIcon
            icon={faChevronCircleRight}
            onClick={handleClickToRight}
            className="slider-button"
          />
        </div>
      </div>
    </div>
  );
}

export default PictureCarousel;
