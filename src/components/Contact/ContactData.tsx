"use client";

import { useState } from "react";

type FaClass = `fa-${string}`;

const ContactData = (props: {
  contactKey: string;
  contactValue: string;
  showedValue?: string;
  faClassIcon: FaClass;
}) => {
  const [popupState, setCopyPopup] = useState(false);
  const copyData = () => {
    navigator.clipboard.writeText(props.contactValue);
    setCopyPopup(true);
    setTimeout(() => setCopyPopup(false), 1500);
  };

  return (
    <div className="contact-info-item padd-15">
      <div className="icon">
        <i className={`fa ${props.faClassIcon}`} />
      </div>
      <h4>{props.contactKey}</h4>

      {props.showedValue ? (
        <div>
          <p>{props.showedValue}</p>
          <button className="btn margin-top-15" onClick={copyData}>
            {"Copy"}
          </button>
        </div>
      ) : (
        <p>{props.contactValue}</p>
      )}
      <div className={`popup ${popupState && 'popup-show'}`}>
        <p>
            Copied to the clipboard!
        </p>
      </div>
    </div>
  );
};

export default ContactData;
