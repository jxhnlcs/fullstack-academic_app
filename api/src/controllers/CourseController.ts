import { Request, Response } from 'express';
import { getAllCourses, createCourse, updateCourse, deleteCourse } from '../models/courseModel';

const getAllCoursesController = (req: Request, res: Response) => {
  getAllCourses((err: any, result: any) => {
    if (err) {
      console.error('Erro ao obter todos os cursos:', err);
      return res.status(500).json({ message: 'Erro interno do servidor' });
    }

    return res.status(200).json(result);
  });
};

const createCourseController = (req: Request, res: Response) => {
  const { Title, Description, Price, Type, Model, Category } = req.body;

  const newCourse = { Title, Description, Price, Type, Model, Category };

  createCourse(newCourse, (err) => {
    if (err) {
      console.error('Erro ao criar um novo curso:', err);
      return res.status(500).json({ message: 'Erro interno do servidor' });
    }

    return res.status(201).json({ message: 'Curso criado com sucesso' });
  });
};

const updateCourseController = (req: Request, res: Response) => {
  const courseId = req.params.id;
  const { Title, Description, Price, Type, Model, Category } = req.body;

  const updatedCourse = { Title, Description, Price, Type, Model, Category };

  updateCourse(courseId, updatedCourse, (err) => {
    if (err) {
      console.error('Erro ao atualizar o curso:', err);
      return res.status(500).json({ message: 'Erro interno do servidor' });
    }

    return res.status(200).json({ message: 'Curso atualizado com sucesso' });
  });
};

const deleteCourseController = (req: Request, res: Response) => {
  const courseId = req.params.id;

  deleteCourse(courseId, (err) => {
    if (err) {
      console.error('Erro ao excluir o curso:', err);
      return res.status(500).json({ message: 'Erro interno do servidor' });
    }

    return res.status(200).json({ message: 'Curso excluído com sucesso' });
  });
};

export { getAllCoursesController, createCourseController, updateCourseController, deleteCourseController };