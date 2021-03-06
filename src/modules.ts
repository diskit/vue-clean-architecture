import { inject, InjectionKey, provide, reactive, getCurrentInstance } from "vue";
import { TaskController } from "./controller/taskController";
import { TaskStorage } from "./driver/taskStorage";
import { TaskGateway } from "./gateway/taskGateway";
import { TaskPresenter } from "./presenter/taskPresenter";
import {
  TaskGatewayAdapter,
  TaskPresenterAdapter
} from "./usecase/adapter/adapters";
import { TaskUseCase } from "./usecase/taskUseCase";
import { TaskViewState } from "./state/taskViewState";

export class Keys {
  static readonly TaskStorageKey: InjectionKey<TaskStorage> = Symbol(
    "TaskStorage"
  );
  static readonly TaskControllerKey: InjectionKey<TaskController> = Symbol(
    "TaskController"
  );
  static readonly TaskUseCaseKey: InjectionKey<TaskUseCase> = Symbol(
    "TaskUseCase"
  );
  static readonly TaskPresenterKey: InjectionKey<TaskPresenterAdapter> = Symbol(
    "TaskPresenterAdapter"
  );
  static readonly TaskViewStateKey: InjectionKey<TaskViewState> = Symbol(
    "TaskViewState"
  );
  static readonly TaskGatewayKey: InjectionKey<TaskGatewayAdapter> = Symbol(
    "TaskGatewayAdapter"
  );
}

export default class Modules {
  private static readonly instance: Modules = new Modules();
  private constructor() {}

  static get(): Modules {
    return Modules.instance;
  } 
  
  setup(): void {
    this.setupViewState();
    this.setupDriver();
    this.setupGateway();
    this.setupPresenter();
    this.setupUseCase();
    this.setupController();
  }

  private setupViewState() {
    provide(Keys.TaskViewStateKey, reactive(new TaskViewState()));
  }

  private setupDriver() {
    provide(Keys.TaskStorageKey, new TaskStorage());
  }

  private setupGateway() {
    provide(
      Keys.TaskGatewayKey,
      new TaskGateway(this.get(Keys.TaskStorageKey)!!)
    );
  }

  private setupPresenter() {
    provide(
      Keys.TaskPresenterKey,
      new TaskPresenter(this.get(Keys.TaskViewStateKey)!!)
    );
  }

  private setupUseCase() {
    provide(
      Keys.TaskUseCaseKey,
      new TaskUseCase(
        this.get(Keys.TaskGatewayKey)!!,
        this.get(Keys.TaskPresenterKey)!!
      )
    );
  }

  private setupController() {
    provide(
      Keys.TaskControllerKey,
      new TaskController(this.get(Keys.TaskUseCaseKey)!!)
    );
  }

  // avoid self-injection
  // https://github.com/vuejs/vue-next/issues/2400
  private get<T>(key: InjectionKey<T>): T | undefined {
    const vm = getCurrentInstance() as any;
    return inject(key) || vm?.provides[key as any];
  }
}

