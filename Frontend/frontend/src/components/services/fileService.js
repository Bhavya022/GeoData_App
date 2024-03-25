// services/fileService.js

const BASE_URL = 'http://localhost:8080'; // Assuming your backend server is running on port 5000

export const uploadFile = async (fileData) => {
  try {
    const formData = new FormData();
    formData.append('file', fileData);

    const response = await fetch(`${BASE_URL}/api/upload`, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'File upload failed');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message || 'Failed to upload file');
  }
};

export const getFile = async (fileId) => {
  try {
    const response = await fetch(`${BASE_URL}/api/files/${fileId}`);

    if (!response.ok) {
      throw new Error('File not found');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message || 'Failed to fetch file');
  }
};

// Add more file-related functions as needed (e.g., deleteFile, updateFile, etc.)
