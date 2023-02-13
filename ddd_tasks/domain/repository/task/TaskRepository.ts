import { createMock } from "ts-auto-mock";
import { TaskApiDriver } from "../../../infrastructure/TaskRepositoryImpl";
import { DoneHighPriorityTask } from "../../model/task/done/DoneHighPriorityTask";
import { DoneLowerPriorityTask } from "../../model/task/done/DoneLowerPriorityTask";
import { DoneMiddlePriorityTask } from "../../model/task/done/DoneMiddlePriorityTask";
import { Task } from "../../model/task/Task";
import { UndoneLowPriorityPostponableTask } from "../../model/task/undone/postponable/UndoneLowPriorityPostponableTask";
import { UndoneMiddlePriorityPostponableTask } from "../../model/task/undone/postponable/UndoneMiddlePriorityPostponableTask";
import { UndoneHighPriorityTask } from "../../model/task/undone/UndoneHighPriorityTask";
import { UndoneLowPriorityDeadlineTask } from "../../model/task/undone/UndoneLowPriorityDeadlineTask";
import { UndoneMiddlePriorityDeadlineTask } from "../../model/task/undone/UndoneMiddlePriorityDeadlineTask";

import { Result } from "../../../util/Result";

export class TaskRepository {
  private _driver: TaskApiDriver;

  constructor(driver: TaskApiDriver) {
    this._driver = driver;
  }

  async findById(
    id: number
  ): Promise<
    Result<
      | UndoneHighPriorityTask
      | UndoneMiddlePriorityDeadlineTask
      | UndoneLowPriorityDeadlineTask
      | DoneHighPriorityTask
      | DoneMiddlePriorityTask
      | DoneLowerPriorityTask,
      Error
    >
  > {
    return this._driver.findById(1);
  }

  async undoneTaskfindById(
    id: number
  ): Promise<
    Result<
      | UndoneHighPriorityTask
      | UndoneMiddlePriorityDeadlineTask
      | UndoneLowPriorityDeadlineTask,
      Error
    >
  > {
    return this._driver.undoneTaskfindById(1);
  }

  async undonePostponableTaskfindById(
    id: number
  ): Promise<
    Result<
      UndoneMiddlePriorityPostponableTask | UndoneLowPriorityPostponableTask,
      Error
    >
  > {
    return this._driver.undonePostponableTaskfindById(1);
  }

  async doneTaskfindById(
    id: number
  ): Promise<
    Result<
      DoneHighPriorityTask | DoneMiddlePriorityTask | DoneLowerPriorityTask,
      Error
    >
  > {
    return this._driver.doneTaskfindById(1);
  }

  async save(task: Task): Promise<void | Error> {
    const dummy: Task = createMock<Task>();
    return this._driver.save(dummy);
  }
}
