import React, { useEffect, useState } from "react";

export const Disclaimer = ({ toggleModal }) => {
  const [showSpinner, setShowSpinner] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSpinner(false);
    }, 2000);
  }, []);
  return (
    <div className="modal-dialog modal-dialog-scrollable">
      <div
        className="modal-dialog"
        style={{
          width: "100%",

          textAlign: "center",
        }}
      >
        {showSpinner === true ? (
          <div
            className="spinner-border my-auto "
            role="status"
            style={{
              color: "#919191",
            }}
          >
            <span className="sr-only">Loading...</span>
          </div>
        ) : (
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Disclaimer
              </h5>
            </div>
            <div
              className="modal-body"
              style={{ textAlign: "justify", textJustify: "inter-word" }}
            >
              Disclaimer The Advocates Act, 1961,the rules framed by Bar Council
              of India, do not permit advertisement or solicitation by Advocates
              in any form or manner. This website and the contents thereof are
              merely for informational purposes and not in the nature of
              solicitation or an advertisement. Similarly, any matter /
              information / content posted on this website shall not be
              construed as legal advice and cannot be substituted by the advice
              of a legal practitioner. My Family Lawyer takes no liability for
              consequences of any action taken by you relying on the matter/
              information / content posted on this website. By entering this
              website, you confirm and acknowledge that you have voluntarily
              sought the information relating to and/or posted by My Family
              Lawyer and there has been no solicitation / advertisement /
              inducement by either My Family Lawyer and/or its partners and/or
              its members
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                onClick={toggleModal}
              >
                Accept
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
