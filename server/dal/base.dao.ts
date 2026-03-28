export interface IEntity {
  id?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export abstract class BaseDAO<T extends IEntity> {
  protected tableName: string;

  constructor(tableName: string) {
    this.tableName = tableName;
  }

  async create(entity: T): Promise<T> {
    const id = Math.random().toString(36).substr(2, 9);
    return { ...entity, id, createdAt: new Date() };
  }

  async findById(id: string): Promise<T | null> {
    return null;
  }

  async findAll(): Promise<T[]> {
    return [];
  }

  async update(id: string, entity: Partial<T>): Promise<T | null> {
    return null;
  }

  async delete(id: string): Promise<boolean> {
    return true;
  }
}