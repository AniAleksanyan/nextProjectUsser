'use server'

import SQL from "better-sqlite3"
import { IUser } from "./types"
import { redirect } from "next/navigation"

const db = new SQL('users.db')

export const getAllUsers = async ():Promise<IUser[]> => {
    return db.prepare('SELECT * FROM users')
    .all() as IUser[]
}

export const createUser = async (form: FormData) =>{
    let name = form.get('name');
    let age = form.get('age');
    let salary = form.get('salary');

    const stm = `INSERT INTO users('name', 'age', 'salary') 
                VALUES(?,?,?)`;

    db.prepare(stm).run(name, age, salary);

    redirect('/users')
}

export const getUser = async(id: number):Promise<IUser|null> => {
    return db.prepare('SELECT * FROM users WHERE id = ?').get(id) as IUser
}

export const editUser = async ( id: number, form: FormData) =>{
    let name = form.get('name');
    let age = form.get('age');
    let salary = form.get('salary');

    const stm = `UPDATE users 
                SET name = ?, age = ?, salary = ? 
                WHERE id = `+id;

    db.prepare(stm).run(name, age, salary);

    redirect('/users')
}