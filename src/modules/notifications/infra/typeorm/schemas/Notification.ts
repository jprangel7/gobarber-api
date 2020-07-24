import { 
    ObjectID, 
    Entity, 
    Column, 
    CreateDateColumn, 
    UpdateDateColumn, 
    ObjectIdColumn 
} from 'typeorm';

@Entity('notifications')
class Notification {
    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    content: string;

    @Column('uuid')
    recipient_id: string;

    @Column()
    read: boolean;

    @CreateDateColumn({ default: false })
    creadted_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default Notification;