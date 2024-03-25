// components/ManageFiles.js
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import fileService from '../services/fileService';

const ManageFiles = ({ user }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const { register, handleSubmit, errors } = useForm();

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append('file', selectedFile);
    formData.append('userId', user.id);
    
    try {
      await fileService.uploadFile(formData);
      console.log('File uploaded successfully');
      // You can add additional logic here, such as displaying a success message
    } catch (error) {
      console.error('Error uploading file:', error);
      // You can handle the error here, such as displaying an error message to the user
    }
  };

  return (
    <div>
      <h2>Manage Files</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="file">Upload File:</label>
          <input
            type="file"
            id="file"
            name="file"
            accept=".json,.kml"
            onChange={handleFileChange}
            ref={register({ required: true })}
          />
          {errors.file && <span>File is required</span>}
        </div>
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default ManageFiles;
