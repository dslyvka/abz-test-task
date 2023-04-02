// React
import { useState } from "react";

// Libraries
import classNames from "classnames";

// Styles
import s from "./InputFile.module.scss";

// Local interface
interface IInputFile {
  onBlur: (e: React.FocusEvent<any, Element>) => void;
  setIsFileValid: (isValid: boolean) => void;
}

// Maximum file size contant
const FILE_SIZE = 5242880;

// Custom input type file
export const InputFile = ({ onBlur, setIsFileValid }: IInputFile) => {
  //File name
  const [file, setFile] = useState("");
  // Error message
  const [error, setError] = useState("");
  // Checking if there was a touch
  const [touched, setTouched] = useState(false);

  // If there was a touch we set touched to true which is needed t odisplay error
  // where error message says user that this field is required
  const onInputTouch: React.MouseEventHandler<HTMLInputElement> = (e) => {
    if (touched) return;
    setTouched(true);
  };

  // Handling file change
  const handleFileChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    // Prevent from app crashing and early return
    if (!e.target.files?.length) return;

    // Checking file size. If file is more than 5mb we display an error and return
    if (e.target.files[0].size > FILE_SIZE) {
      setError("File must be less than 5mb");
      return;
    }

    // Creating new image
    const img = new Image();
    img.src = window.URL.createObjectURL(e.target.files[0]);
    img.onload = () => {
      // Checking image size in pixels. Image must be minimum 70x70px
      if (img.width <= 70 || img.height <= 70) {
        setError("Image minimum size is 70x70px");
        return;
      }

      // Setting file name if everything is ok
      setFile(e.target.files![0].name);

      // Setting file to valid to say parents component that everything is ok
      setIsFileValid(true);
    };
  };

  return (
    <div className={classNames(s.customInputFile)}>
      {/* Input type file */}
      <input
        type="file"
        name="photo"
        accept="image/jpg, image/jpeg"
        className={s.input}
        onChange={handleFileChange}
        onBlur={onBlur}
        onClick={onInputTouch}
      />
      {/* Input type file */}

      <div className={s.textContainer}>
        <span className={classNames("regularText", s.text)}>Upload</span>
      </div>

      <span className={classNames("regularText", s.fileName)}>
        {!file ? "Upload your photo" : file}
      </span>

      {/* Error messages rendering logic */}
      {error && <p className={s.onErrorHelper}>{error}</p>}
      {touched && !file && <p className={s.onErrorHelper}>Required</p>}
    </div>
  );
};
