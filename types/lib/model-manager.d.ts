import { Model, ModelType } from './model';
import { Sequelize } from './sequelize';

export class ModelManager {
  public sequelize: Sequelize;
  public models: ModelType[];
  public all: ModelType[];

  constructor(sequelize: Sequelize);
  public addModel<T extends ModelType>(model: T): T;
  public removeModel(model: ModelType): void;
  public getModel(against: unknown, options?: { attribute?: string }): ModelType;
}

export default ModelManager;
