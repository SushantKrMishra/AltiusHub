import { useState } from "react";

export const ImageUploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [error, setError] = useState("");

  const MAX_SIZE = 5 * 1024 * 1024; //5MB
  const ALLOWED_TYPES = ["image/jpeg", "image/png"];

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (!ALLOWED_TYPES.includes(file.type)) {
        setError("Only JPEG and PNG files are allowed.");
        setSelectedFile(null);
        setPreviewUrl(null);
        return;
      }
      if (file.size > MAX_SIZE) {
        setError("File size exceeds 5 MB");
        setSelectedFile(null);
        setPreviewUrl(null);
        return;
      }
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
      setError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedFile) {
      setError("Please select a valid Image");
      return;
    }
    alert("Image Uploaded Successfully!");
  };

  return (
    <div>
      <h1>Image Upload</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          accept="image/jpeg, image/png"
          onChange={handleFileChange}
        />
        {error && <p style={{ color: "red" }}>{error}</p>}
        {previewUrl && <img
          src={previewUrl}
          alt="Preview URL"
          style={{width:"200px",marginTop:"20px"}}
      
        />}
        <button type="submit" disabled={!selectedFile}>Upload</button>
      </form>
    </div>
  );
};
