import Instancia from "database/entities/Instancia";
import ICreateInstanciaDTO from '../DTOs/ICreateInstaciaDTO';

export default interface IInstaciasRepository {
  create(data: ICreateInstanciaDTO): Promise<Instancia>;
  findById(id: number): Promise<Instancia | undefined>;
  findByNome(nome: string): Promise<Instancia | undefined>;
  listAll(): Promise<Instancia[] | undefined>
}