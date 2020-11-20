import { FCC } from "./fcc";

export class TaskId {
  constructor(readonly value: string) {}
}

export class Title {
  constructor(readonly value: string) {}
}

export class Description {
  constructor(readonly value: string) {}
}

export class Task {
  constructor(readonly id: TaskId, readonly title: Title, readonly description: Description) {}
}

export class Tasks extends FCC<Task> {}
