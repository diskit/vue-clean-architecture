import { Tasks } from "@/entity/task";
import { TaskPresenterAdapter } from "@/usecase/adapter/adapters";
import { TaskUnit, TaskViewState } from "@/state/taskViewState";

export class TaskPresenter implements TaskPresenterAdapter {
  constructor(readonly state: TaskViewState) {}

  putAll(tasks: Tasks): void {
    this.state.values = tasks.map((v) => new TaskUnit(v.id.value, v.title.value));
  }
}
