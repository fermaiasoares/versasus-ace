import { getRepository, Repository } from 'typeorm';

import Instancia from 'database/entities/Instancia';
import ICreateInstaciaDTO from './DTOs/ICreateInstaciaDTO';
import IInstaciasRepository from './implementations/IInstanciasRepository';

class InstanciasRepository implements IInstaciasRepository {
  protected repository: Repository<Instancia>;

  constructor() {
    this.repository = getRepository(Instancia);
  }

  async create({ nome, cidade }: ICreateInstaciaDTO): Promise<Instancia> {
    const instacia = this.repository.create({
      cidade,
      nome
    })
    await this.repository.save(instacia);

    return instacia;
  }

  async findById(id: number): Promise<Instancia | undefined> {
    return await this.repository.findOne(id);
  }

  async findByNome(nome: string): Promise<Instancia | undefined> {
    return await this.repository.findOne({ where: { nome } });
  }

  async listAll(): Promise<Instancia[] | undefined> {
    return await this.repository.find();
  }
}

export default InstanciasRepository;