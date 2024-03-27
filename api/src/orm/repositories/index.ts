import { DataSource } from '../dataSource';
import { Product } from '../entities/Product';
import { Manufacturer } from '../entities/Manufacturer';


export const ProductRepository = DataSource.getRepository(Product)
export const ManufacturerRepository = DataSource.getRepository(Manufacturer)
