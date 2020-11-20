import { TaskStorage } from "@/driver/taskStorage";
import { Description, Task, TaskId, Tasks, Title } from "@/entity/task";
import { TaskGatewayAdapter } from "@/usecase/adapter/adapters";

export class TaskGateway implements TaskGatewayAdapter {
  constructor(readonly storage: TaskStorage) {}

  async findAll(): Promise<Tasks> {
    const values = this.storage.getAll();
    return new Tasks(values.map((v) => new Task(new TaskId(v.id), new Title(v.title), new Description(v.description))));
  }
}
