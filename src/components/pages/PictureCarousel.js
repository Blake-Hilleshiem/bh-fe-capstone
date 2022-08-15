/* 
Logic: 
  display
  on click change state of image based on which button 

Cool things to add: 
  Zoom up on image on click
  field to add link to append to list of images

*/

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleLeft,
  faChevronCircleRight,
} from "@fortawesome/free-solid-svg-icons";

function PictureCarousel() {
  const [leftImageObjId, setLeftImageObjId] = useState(1);
  const [centerImageObjId, setCenterImageObjId] = useState(2);
  const [rightImageObjId, setRightImageObjId] = useState(3);

  const lstOfImageObjs = [
    {
      image:
        "https://images.unsplash.com/photo-1555169062-013468b47731?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      altText: "paraket on branch",
    },
    {
      image:
        "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=766&q=80",
      altText: "canal in venice with boats on water",
    },
    {
      image:
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
      altText: "bowl with salad in it",
    },
    {
      image:
        "https://images.unsplash.com/photo-1605722625766-a4c989c747a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      altText: "poleroid camera on white background",
    },
    {
      image:
        "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80",
      altText: "white cake with chocolate frosting",
    },
  ];

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
      <h1>Hello from Picture Carousel</h1>
      <div className="carousel-wrapper">
        <div>
          <FontAwesomeIcon
            icon={faChevronCircleLeft}
            onClick={handleClickToLeft}
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
          />
        </div>
      </div>
    </div>
  );
}

export default PictureCarousel;
