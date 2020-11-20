import { TaskGatewayAdapter, TaskPresenterAdapter } from "./adapter/adapters";

export class TaskUseCase {
  constructor(
    private readonly gateway: TaskGatewayAdapter,
    private readonly prsenter: TaskPresenterAdapter
  ) {}

  async find(): Promise<void> {
    const tasks = await this.gateway.findAll();
    this.prsenter.putAll(tasks);
  }
}
