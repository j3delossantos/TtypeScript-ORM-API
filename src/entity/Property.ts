import { Entity, Column, PrimaryGeneratedColumn,  ManyToOne } from "typeorm";
import { User } from "./User";

@Entity()
export class Property{

    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    address: string;

    @ManyToOne(() => User, user => user.property,{
        eager: true,
        cascade:true
    })
    user: User;
    

}