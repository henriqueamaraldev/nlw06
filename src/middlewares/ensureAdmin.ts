import { Request, Response, NextFunction } from 'express';
import { getCustomRepository } from 'typeorm';
import { UsersRepositories } from '../repositories/UsersRepositories';

export async function ensureAdmin(request: Request, response: Response, next: NextFunction){
    
    // Buscar as informações do sistema
    const { user_id } = request;

    const usersRepositories = getCustomRepository(UsersRepositories);

    const { admin } = await usersRepositories.findOne(user_id);

    // verifica se o usuario é um admin

    if (admin) {
        return next();
    }

    return response.status(401).json({
        error: 'Acess denied. Only Admins can do this request!'
    });
}
