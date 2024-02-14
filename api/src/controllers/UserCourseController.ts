import { Request, Response } from 'express';
import { associateUserWithCourse, getUserCourses } from '../models/UserCourseModel';

const associateUserWithCourseController = (req: Request, res: Response) => {
  const { userID, courseID } = req.body;

  associateUserWithCourse(userID, courseID, (err) => {
    if (err) {
      console.error('Erro ao associar usuário com curso:', err);
      return res.status(500).json({ message: 'Erro interno do servidor' });
    }

    return res.status(201).json({ message: 'Associação realizada com sucesso' });
  });
};

const getUserCoursesController = (req: Request, res: Response) => {
  const userID = parseInt(req.params.userID);

  getUserCourses(userID, (err, result) => {
    if (err) {
      console.error('Erro ao obter cursos do usuário:', err);
      return res.status(500).json({ message: 'Erro interno do servidor' });
    }

    return res.status(200).json(result);
  });
};

export { associateUserWithCourseController, getUserCoursesController };