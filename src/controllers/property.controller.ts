import { Request, Response } from "express";

import { getRepository } from "typeorm";
import { User } from "../entity/User";
import { Property } from "../entity/Property";


//Insert Property into DB
export const createProperty = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    
    const newProperty = getRepository(Property).create(req.body);
    const results = await getRepository(Property).save(newProperty);
    return res.json(results);
  };