import { TaskUseCase } from "@/usecase/taskUseCase";

export class TaskController {
  constructor(readonly usecase: TaskUseCase) {}

  async getAllTask(): Promise<void> {
    this.usecase.find();
  }
}
