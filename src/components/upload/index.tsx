import React, { useState } from 'react';
import { FileUploader } from 'react-drag-drop-files';

const fileTypes = ['JPG', 'PNG'];

function DragDrop() {
  const [file, setFile] = useState(null);
  const handleChange = (choseFile: React.SetStateAction<null>) => {
    setFile(choseFile);
  };

  return (
    <FileUploader handleChange={handleChange} name="file" types={fileTypes} />
  );
}

export default DragDrop;
