import css from "./index.css";
import grey from "assets/grey.png";
import { useDropzone } from "react-dropzone";
import React, { useCallback } from "react";
import { GreenButon } from "ui/Buttons";
import { useImageDataURL, usePetData } from "hooks";

export function Dropzone() {
  const [imgData, setImgData] = useImageDataURL();
  const [petData] = usePetData();
  const petImage = petData.img;

  const onDrop = useCallback(
    (acceptedFiles) => {
      for (const file of acceptedFiles) {
        const reader = new FileReader();

        reader.onload = (e) => {
          const results = e.target.result;
          setImgData(results);
        };
        reader.readAsDataURL(file);
      }
    },
    [imgData]
  );

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div className={css.container} {...getRootProps()}>
      <input {...getInputProps()} className={css.input} />

      {location.pathname == "/report-pet" ? (
        <img src={imgData || grey} className={css.img} />
      ) : (
        <img src={imgData || petImage} className={css.img} />
      )}

      <span onClick={(e) => e.preventDefault()}>
        <GreenButon>
          {location.pathname == "/edit-pet" ? "Modificar Foto" : "Agregar Foto"}
        </GreenButon>
      </span>
    </div>
  );
}
