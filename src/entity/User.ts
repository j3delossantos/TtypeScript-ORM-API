import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Property } from "./Property";

@Entity()
export class User{

    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    firstname: string;

    @Column()
    lastname: string;

    @OneToMany(() => Property, property => property.user)
    property: Property[];

}