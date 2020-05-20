import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    JoinColumn,
} from 'typeorm';

import User from '@modules/users/infra/typeorm/entities/Users';

@Entity('appointments') // Declarando qual tabela a informação deve ser salva
class Appointment {
    @PrimaryGeneratedColumn('uuid') // Declarando a coluna e o tipo de dado
    id: string;

    @Column() // Declarando a coluna e o tipo de dado => () = 'varchar'
    provider_id: string;

    @ManyToOne(() => User) // Declarando o relacionamento entre tabelas
    @JoinColumn({ name: 'provider_id' }) // Declarando qual coluna se relaciona com a outra tabela
    provider: User;

    @Column('time with time zone') // Declarando a coluna e o tipo de dado
    date: Date;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default Appointment;
