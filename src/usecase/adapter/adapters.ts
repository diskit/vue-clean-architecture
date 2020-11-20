import { Tasks } from "@/entity/task";

export interface TaskPresenterAdapter {
  putAll(tasks: Tasks): void;
}

export interface TaskGatewayAdapter {
  findAll(): Promise<Tasks>;
}
