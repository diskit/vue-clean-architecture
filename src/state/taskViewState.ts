export class TaskUnit {
  constructor(readonly id: string, readonly content: string) {}
}

export class TaskViewState {
  values: TaskUnit[] = [];
}
