import { db } from './db';

const getAllCourses = (callback: any) => {
  const query = `
    SELECT * FROM Courses
  `;

  db.query(query, (err, result) => {
    if (err) {
      return callback(err, null);
    }

    return callback(null, result);
  });
};

const createCourse = (course: any, callback: (err: Error | null) => void) => {
  const { Title, Description, Price, Type, Model, Category } = course;
  const query = `
    INSERT INTO Courses (Title, Description, Price, Type, Model, Category)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  db.query(query, [Title, Description, Price, Type, Model, Category], (err) => {
    if (err) {
      return callback(err);
    }

    return callback(null);
  });
};

const updateCourse = (courseId: string, updatedCourse: any, callback: (err: Error | null) => void) => {
  const { Title, Description, Price, Type, Model, Category } = updatedCourse;
  const query = `
    UPDATE Courses
    SET 
      Title = IFNULL(?, Title),
      Description = IFNULL(?, Description),
      Price = IFNULL(?, Price),
      Type = IFNULL(?, Type),
      Model = IFNULL(?, Model),
      Category = IFNULL(?, Category)
    WHERE CourseID = ?
  `;

  db.query(query, [Title, Description, Price, Type, Model, Category, courseId], (err) => {
    if (err) {
      return callback(err);
    }

    return callback(null);
  });
};

const deleteCourse = (courseId: string, callback: (err: Error | null) => void) => {
  const query = `
    DELETE FROM Courses
    WHERE CourseID = ?
  `;

  db.query(query, [courseId], (err) => {
    if (err) {
      return callback(err);
    }

    return callback(null);
  });
};

export { getAllCourses, createCourse, updateCourse, deleteCourse };