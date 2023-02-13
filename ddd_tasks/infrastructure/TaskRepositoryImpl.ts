import { DoneHighPriorityTask } from "../domain/model/task/done/DoneHighPriorityTask";
import { DoneLowerPriorityTask } from "../domain/model/task/done/DoneLowerPriorityTask";
import { DoneMiddlePriorityTask } from "../domain/model/task/done/DoneMiddlePriorityTask";
import { Task } from "../domain/model/task/Task";
import { TaskFactory } from "../domain/model/task/TaskFactory";
import { UndoneLowPriorityPostponableTask } from "../domain/model/task/undone/postponable/UndoneLowPriorityPostponableTask";
import { UndoneMiddlePriorityPostponableTask } from "../domain/model/task/undone/postponable/UndoneMiddlePriorityPostponableTask";
import { UndoneHighPriorityTask } from "../domain/model/task/undone/UndoneHighPriorityTask";
import { UndoneLowPriorityDeadlineTask } from "../domain/model/task/undone/UndoneLowPriorityDeadlineTask";
import { UndoneMiddlePriorityDeadlineTask } from "../domain/model/task/undone/UndoneMiddlePriorityDeadlineTask";
import { Result } from "../util/Result";

export class TaskApiDriver {
  /**
   *
   * @param id
   * @returns idで検索
   */
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
    try {
      let dummyData = new TaskRecord(1, "dummy", "middle", 0, "undone");

      if (dummyData.status == "undone") {
        return Result.Ok(
          TaskFactory.reconstructUndoneTask(
            dummyData.id,
            dummyData.name,
            dummyData.priority,
            dummyData.postponeCount,
            dummyData.status
          )
        );
      } else if (dummyData.status == "done") {
        return Result.Ok(
          TaskFactory.reconstructDoneTask(
            dummyData.id,
            dummyData.name,
            dummyData.priority,
            dummyData.postponeCount,
            dummyData.status
          )
        );
      } else {
        throw new Error("status must be undone or done");
      }
    } catch (e) {
      return Result.Err(Error());
    }
  }

  /**
   *
   * @param id
   * @returns 未完了タスクid検索
   */
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
    try {
      let dummyData = new TaskRecord(1, "dummy", "middle", 0, "undone");

      if (dummyData.status != "undone")
        throw new Error("status must be undone");

      return Result.Ok(
        TaskFactory.reconstructUndoneTask(
          dummyData.id,
          dummyData.name,
          dummyData.priority,
          dummyData.postponeCount,
          dummyData.status
        )
      );
    } catch (e) {
      return Result.Err(Error());
    }
  }

  /**
   *
   * @param id
   * @returns 後回しにしていいタスクid検索
   */
  async undonePostponableTaskfindById(
    id: number
  ): Promise<
    Result<
      UndoneMiddlePriorityPostponableTask | UndoneLowPriorityPostponableTask,
      Error
    >
  > {
    try {
      let dummyData = new TaskRecord(1, "dummy", "middle", 0, "undone");

      if (dummyData.status != "undone")
        throw new Error("status must be undone");
      if (dummyData.priority == "high")
        throw new Error("priority must not be high");

      return Result.Ok(
        TaskFactory.reconstructUndonePostponableTask(
          dummyData.id,
          dummyData.name,
          dummyData.priority,
          dummyData.postponeCount,
          dummyData.status
        )
      );
    } catch (e) {
      return Result.Err(Error());
    }
  }

  /**
   *
   * @param id
   * @returns 完了タスクid検索
   */
  async doneTaskfindById(
    id: number
  ): Promise<
    Result<
      DoneHighPriorityTask | DoneMiddlePriorityTask | DoneLowerPriorityTask,
      Error
    >
  > {
    try {
      let dummyData = new TaskRecord(1, "dummy", "middle", 0, "undone");

      if (dummyData.status != "done") throw new Error("status must be done");

      return Result.Ok(
        TaskFactory.reconstructDoneTask(
          dummyData.id,
          dummyData.name,
          dummyData.priority,
          dummyData.postponeCount,
          dummyData.status
        )
      );
    } catch (e) {
      return Result.Err(Error());
    }
  }

  /**
   * タスクを保存
   *
   * @param task
   */
  async save(task: Task) {}
}

class TaskRecord {
  public id: number;
  public name: string;
  public priority: string;
  public postponeCount: number;
  public status: string;

  public constructor(
    id: number,
    name: string,
    priority: string,
    postponeCount: number,
    status: string
  ) {
    this.id = id;
    this.name = name;
    this.priority = priority;
    this.postponeCount = postponeCount;
    this.status = status;
  }
}
