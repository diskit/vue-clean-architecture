export type Task = {
  id: string;
  title: string;
  description: string;
};

export class TaskStorage {
  values: Task[] = [{ id: "id", title: "ブログ", description: "会社のブログで書く" }];

  store(value: Task) {
    this.values.push(value);
  }

  getAll(): Task[] {
    return this.values;
  }
}
