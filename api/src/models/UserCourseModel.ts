import { db } from './db';

const associateUserWithCourse = (userID: number, courseID: number, callback: (err: Error | null) => void) => {
  const query = `
    INSERT INTO UserCourses (UserID, CourseID)
    VALUES (?, ?)
  `;

  db.query(query, [userID, courseID], (err) => {
    if (err) {
      return callback(err);
    }

    return callback(null);
  });
};

const getUserCourses = (userID: number, callback: (err: Error | null, result: any) => void) => {
  const query = `
    SELECT Courses.*
    FROM UserCourses
    JOIN Courses ON UserCourses.CourseID = Courses.CourseID
    WHERE UserCourses.UserID = ?
  `;

  db.query(query, [userID], (err, result) => {
    if (err) {
      return callback(err, null);
    }

    return callback(null, result);
  });
};

export { associateUserWithCourse, getUserCourses };