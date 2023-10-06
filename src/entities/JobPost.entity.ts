import { Entity, PrimaryGeneratedColumn, Column ,BaseEntity} from "typeorm"

@Entity()
export class JobPost  extends BaseEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'company_id' })
  companyId: number;

  @Column()
  position: string;

  @Column()
  reward: number;

  @Column('text')
  description: string;

  @Column()
  techStack: string;
}
