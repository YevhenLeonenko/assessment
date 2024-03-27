import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Manufacturer } from './Manufacturer';
import { ColumnNumericTransformer } from '../transformers/ColumnNumericTransformer';

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('numeric', {
    precision: 10,
    scale: 2,
    transformer: new ColumnNumericTransformer(),
  })
  public price: number;

  @Column()
  title: string;

  @ManyToOne(() => Manufacturer, (manufacturer) => manufacturer.products)
  manufacturer: Manufacturer;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: true })
  image: string;
}
