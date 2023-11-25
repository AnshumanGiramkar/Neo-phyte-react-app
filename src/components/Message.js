import React from "react";

const Message = ({ type }) => {
  return (
    <div id="access-msg" className={type}>
      {type === "denied" ? "Access Denied" : "Access Granted"}
    </div>
  );
};

export default Message;
