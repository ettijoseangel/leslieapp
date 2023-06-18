import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity('user')
export class User {
@PrimaryGeneratedColumn()
id: number
@Column('text')
f_name: string
@Column('text')
l_name: string
@Column('text')
email: string
@Column('text')
password: string
@Column('bool', {default: true})
estate: boolean
@Column('text')
sex: string
@Column('int')
age: number
}
