import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
} from 'typeorm';
import { Exclude, Expose } from 'class-transformer';

import uploadConfig from '@config/upload';
import upload from '@config/upload';

@Entity('users') // Declarando qual tabela a informação deve ser salva
class User {
    @PrimaryGeneratedColumn('uuid') // Declarando o coluno e o tipo de dado
    id: string;

    @Column() // Declarando o coluno e o tipo de dado => () = 'varchar'
    name: string;

    @Column() // Declarando o coluno e o tipo de dado
    email: string;

    @Column() // Declarando o coluno e o tipo de dado
    @Exclude()
    password: string;

    @Column()
    avatar: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @Expose({ name: 'avatar_url' })
    getAvatarUrl(): string | null {
        if (!this.avatar) {
            return null;
        }

        switch (uploadConfig.driver) {
            case 'disk':
                return `${process.env.APP_API_URL}/files/${this.avatar}`;

            case 's3':
                return `https://${uploadConfig.config.aws.bucket}.s3.amazonaws.com/${this.avatar}`;

            default:
                return null;
        }
    }
}

export default User;
