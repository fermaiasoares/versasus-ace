import api from "./ApiService";

interface IInstancia {
  id: number;
  nome: string;
  cidade: string;
}

interface IItem {
  id: number;
  label: string;
  value: string;
}

class InstanciasService {
  async execute(): Promise<IItem[] | undefined> {
    const registros: IItem[] = [];
      
    const response = await api.get('/instancias');
    const instancias = response.data;

    instancias.map((instancia: IInstancia) => {
      registros.push({
        id: instancia.id,
        label: instancia.nome,
        value: instancia.cidade
      })
    })

    return registros;
  }
}

export default InstanciasService;