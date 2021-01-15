import { Request, Response } from "express";

import { getRepository } from "typeorm";
import { User } from "../entity/User";
import { Property } from "../entity/Property";

//Get all Users From DB
export const getUsers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const users = await getRepository(User).find();
  return res.json(users);
};

//Get One User by id From DB
export const getOneUser = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    const results = await getRepository(User).findOne(req.params.id);
    return res.json(results);
  };

//Insert Users into DB
export const createUsers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  
  const newUser = getRepository(User).create(req.body);
  const results = await getRepository(User).save(newUser);
  return res.json(results);
};

//Update one Users by id
export const updateUser = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    const user = await getRepository(User).findOne(req.params.id);

    if (user) {
        getRepository(User).merge(user, req.body);
        const results = await getRepository(User).save(user);
        return res.json(results)
    }else{
        return res.status(404).json({msg:'Not User Found'});
    }
    
    
  };

  //Delete One User by id From DB
export const deleteOneUser = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    const results = await getRepository(User).delete(req.params.id);
    return res.json(results);
  };
