import { createConnection } from 'typeorm';
import Instancia from './entities/Instancia';

createConnection({
  database: 'versasus-ace',
  driver: require('expo-sqlite'),
  entities: [
    Instancia
  ],
  synchronize: true,
  type: 'expo'
});