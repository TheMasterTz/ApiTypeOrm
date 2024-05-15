import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { AppDataSources } from "../database/connection";

@Entity({ name: 'users' })
export class Users {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column({ unique: true })
  email!: string;

  @Column()
  password!: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at!: Date;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP'
  })
  updated_at!: Date;
}

export const userRepository = AppDataSources.getRepository(Users)
