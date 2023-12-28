import React, { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import axios from "axios";

function App() {
  const [file, setFile] = useState<File | null>(null);
  const [image, setImage] = useState({});
  const [imageSrc, setImageSrc] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!file) {
      return;
    }
    return setImageSrc(URL.createObjectURL(file));
  }, [file]);

  const handleUpload = () => {
    axios.post("http://localhost:4000/isthisacat", image).then((res) => {
      console.log("Axios response: ", res);
    });
    // Clears preview image
    setImageSrc("");
  };

  const handleClick = (e: any) => {
    if (inputRef.current != null) {
      inputRef.current.click();
    }
  };

  const handleFileInput = (e: any) => {
    const formData = new FormData();
    if (e.target.files) {
      formData.append(
        "my-image-file",
        e.target.files[0],
        e.target.files[0].name,
      );
      setFile(e.target.files[0]);
    }
    setImage(formData);
    // Resets file input post upload
    e.target.value = null;
  };

  return (
    <div className="App">
      <StyledRow>
        <h1>Image Upload</h1>
      </StyledRow>
      <StyledRow>
        <StyledImageContainer>
          {!imageSrc ? (
            <StyledPlaceholderImage alt="preview" src="./image-icon.png" />
          ) : (
            <StyledUploadImage alt="preview" src={imageSrc} />
          )}
        </StyledImageContainer>
      </StyledRow>
      <StyledRow>
        <StyledButton onClick={handleUpload}>Upload</StyledButton>
        <StyledButton onClick={handleClick}>Choose File</StyledButton>
        <StyledInput
          type="file"
          accept="image/*"
          onChange={handleFileInput}
          ref={inputRef}
        />
      </StyledRow>
    </div>
  );
}

export default App;

const StyledRow = styled.div(() => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
}));

const StyledImageContainer = styled.div(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: 500,
  height: 500,
  border: "lightGrey 3px dashed",
  borderRadius: 10,
  marginBottom: 50,
}));

const StyledButton = styled.button(() => ({
  width: 200,
  height: 50,
  borderRadius: 2,
  fontSize: 20,
  color: "white",
  backgroundColor: "#145DA0",
  border: "none",
  fontWeight: "bold",
  marginLeft: 40,
}));

const StyledPlaceholderImage = styled.img(() => ({
  width: 300,
  height: 300,
}));

const StyledUploadImage = styled.img(() => ({
  maxWidth: "100%",
  maxHeight: "100%",
}));

const StyledInput = styled.input(() => ({
  display: "none",
}));
