import React from "react";
function FaceReconition({ input, box }) {
  return (
    <div className="center ma">
      <div className="absolute mt2">
        <img
          id="inputimage"
          src={input}
          alt={input}
          width={"500px"}
          height={"auto"}
        />
      </div>
    </div>
  );
}

export default FaceReconition;
