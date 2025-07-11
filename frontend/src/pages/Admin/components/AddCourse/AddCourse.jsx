import React from 'react';
import './AddCourse.css'; // Optional styling

const AddCourse = () => {
  return (
    <div className="add-course">
      <h1>Add New Course</h1>

      <form className="flex-col">
        {/* Course Title */}
        <div className="input-group">
          <p>Course Title</p>
          <input type="text" name="title" placeholder="Enter course title" />
        </div>

        {/* Description */}
        <div className="input-group">
          <p>Course Description</p>
          <textarea name="description" placeholder="Enter description" rows={5}></textarea>
        </div>

        {/* Price */}
        <div className="input-group">
          <p>Course Price</p>
          <input type="text" name="price" placeholder="Enter price" />
        </div>

        {/* Thumbnail upload (No empty src) */}
        <div className="input-group">
          <p>Upload Thumbnail</p>
          <input type="file" name="thumbnail" />
        </div>

        {/* Submit button */}
        <button type="submit">Add Course</button>
      </form>
    </div>
  );
};

export default AddCourse;
