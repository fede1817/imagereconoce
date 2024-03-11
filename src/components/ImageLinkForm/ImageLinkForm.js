import React from "react";
import "./ImageLinkForm.css";
function ImageLinkForm({ setInput, input, interruptor, setInterruptor }) {
  return (
    <div>
      <p className="f3 white">
        {"This Magic Brain will detect faces in your pictures, Git it a try."}
      </p>
      <div className="center">
        <div className="form center pa4 br3 shadow-5">
          <input
            type="text"
            className="f4 pa2 w-70 center"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            onClick={() => {
              setInterruptor(!interruptor);
            }}
            className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple"
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
}

export default ImageLinkForm;
