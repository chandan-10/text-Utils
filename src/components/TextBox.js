import React, { useState } from "react";

export default function TextBox(props) {
  const [text, setText] = useState("");

  const replace = () => {
    let oldWord = document.getElementById("x").value;
    let newWord = document.getElementById("y").value;
    setText(text.replaceAll(oldWord, newWord));
    props.showAlert("Successfully replaced");
  };
  const reverse = () => {
    setText(text.split("").reverse().join(""));
    props.showAlert("Text Reversed");
  };
  const removeExtraSpace = () => {
    let temp = text.replace(/\s+/g, " ").trim();
    setText(temp);
    props.showAlert("Extra Spaces Removed");
  };
  const speak = () => {
    let utterance = new SpeechSynthesisUtterance(text);
    const voices = speechSynthesis.getVoices();
    utterance.voice = voices[1];
    speechSynthesis.speak(utterance);
    utterance.pitch = 2;
    utterance.volume = 1;
    utterance.rate = 2;
  };
  const removeSpecialChars = () => {
    let temp = text.replace(/[^a-zA-Z ]/g, "");
    setText(temp);
    props.showAlert("Spacial Characters Removed");
  };
  const toUpper = () => {
    console.log("toUpperCase buton was clicked.");
    let temp = text.toUpperCase();
    setText(temp);
    props.showAlert("Converted to Upper Case");
  };

  const clear = () => {
    let temp = "";
    setText(temp);
    props.showAlert("Text Cleared");
  };

  const toLower = () => {
    console.log("toLowerCase buton was clicked.");
    let temp = text.toLowerCase();
    setText(temp);
    props.showAlert("Converted to Lower Case");
  };

  const onSomeChange = (event) => {
    console.log("Something was changed.");
    setText(event.target.value);
  };
  return [
    <div className="container my-6" id="mainArea">
      <div className="form-group">
        <textarea
          className="form-control"
          value={text}
          onChange={onSomeChange}
          id="exampleFormControlTextarea1"
          rows="3"
          cols="2"
        ></textarea>
      </div>
      <div className="text-center">
        <button
          disabled={text.length === 0}
          className="btn btn-danger mx-2 my-2"
          onClick={toLower}
        >
          Lower Case
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-danger mx-2 my-2"
          onClick={clear}
        >
          Clear
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-danger mx-2 my-2"
          onClick={removeExtraSpace}
        >
          Remove Extra Spaces
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-danger mx-2 my-2"
          onClick={removeSpecialChars}
        >
          Remove spacial characters
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-danger mx-2 my-2"
          onClick={toUpper}
        >
          Upper Case
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-danger mx-2 my-2"
          onClick={speak}
        >
          Speak
        </button>

        <div className=" form-group mt-2">
          <button
            disabled={text.length === 0}
            className="btn btn-danger mx-2 my-2"
            onClick={reverse}
          >
            Reverse
          </button>
          <b className="mx-2">Replace</b>
          <input type="text" id="x" />
          <b className="mx-2">With</b> <input type="text" id="y" />
          <button
            disabled={text.length === 0}
            onClick={replace}
            className="mx-4 btn btn-danger mx-2 my-4"
          >
            Replace
          </button>
        </div>
      </div>
    </div>,

    <div className="container my-2 text-center">
      <div></div>{" "}
      <h5 className="mt-4">
        Your text has{" "}
        <b>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }
        </b>{" "}
        words and <b>{text.length} </b> characters
      </h5>
    </div>,
  ];
}
