import React from "react";

export default function Alert(props) {
  return (
    props.alert && (
      <div className="my-4 alert-box">
        <div
          className="alert alert-warning alert-dismissible fade show"
          role="alert"
        >
          <strong id="msg">{props.alert}</strong>
          <button
            type="button"
            className="close"
            data-dismiss="alert"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      </div>
    )
  );
}
