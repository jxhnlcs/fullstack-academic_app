import express, { Router } from 'express';
import { fazerLogin, cadastrarUsuario } from '../controllers/loginController';
import { getAllUsersController } from '../controllers/userController';
import { getAllCoursesController, createCourseController, updateCourseController, deleteCourseController } from '../controllers/CourseController';

const router: Router = express.Router();

// Rotas de Login e Cadastro
router.post('/login', fazerLogin);
router.post('/cadastrar', cadastrarUsuario);

// Rota de Usuários
router.get('/users', getAllUsersController);

// Rotas de Cursos
router.get('/courses', getAllCoursesController);
router.post('/courses', createCourseController);
router.put('/courses/:id', updateCourseController);
router.delete('/courses/:id', deleteCourseController);

export default router;