import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity('users') // Declarando qual tabela a informação deve ser salva
class User {
    @PrimaryGeneratedColumn('uuid') // Declarando o coluno e o tipo de dado
    id: string;

    @Column() // Declarando o coluno e o tipo de dado => () = 'varchar'
    name: string;

    @Column() // Declarando o coluno e o tipo de dado
    email: string;

    @Column() // Declarando o coluno e o tipo de dado
    password: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default User;
