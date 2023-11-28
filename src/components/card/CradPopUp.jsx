import React from "react";
import Popup from "reactjs-popup";
import "./CardPopUp.scss";

const CradPopUp = (props) => {
  const repo = props.props;
  // console.log(repo);
  return (
    <Popup
      trigger={<button className="nes-btn is-warning"> Plus d'infos </button>}
      modal
      nested
    >
      {(close) => (
        <div className="modal nes-container is-rounded ">
          <button className="close" onClick={close}>
            &times;
          </button>
          <img src={repo.logoUrl} alt="" />
          <div className="bar-bottom"></div>

          <div className="content ">
            {repo.description}
            <br />
            <ul className="skills-container ">
              {repo.topics.map((topic, index) => {
                return (
                  <li key={index} className="skill ">
                    {topic.charAt(0).toUpperCase() + topic.slice(1)}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </Popup>
  );
};

export default CradPopUp;
