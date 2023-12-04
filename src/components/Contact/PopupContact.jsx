import React, { useState } from "react";
import Popup from "reactjs-popup";
import "./PopupContact.scss";
import useWindowSize from "../../CustomHook";
import { CiCircleCheck } from "react-icons/ci";

const PopupContact = ({ isOpen, onClose }) => {
  const windowSize = useWindowSize();

  return (
    <Popup open={isOpen} onClose={onClose} modal nested>
      <div
        className={`modal nes-container is-rounded ${
          windowSize <= 768 ? "mobile" : ""
        }`}
      >
        <button className="close" onClick={onClose}>
          &times;
        </button>
        <div className="msg-container">
          <p>Message envoyé</p>
          <i>
            <CiCircleCheck />
          </i>
        </div>
      </div>
    </Popup>
  );
};

export default PopupContact;
