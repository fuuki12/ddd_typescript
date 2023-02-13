import { DoneHighPriorityTask } from "./done/DoneHighPriorityTask";
import { DoneLowerPriorityTask } from "./done/DoneLowerPriorityTask";
import { DoneMiddlePriorityTask } from "./done/DoneMiddlePriorityTask";
import { UndoneHighPriorityTask } from "./undone/UndoneHighPriorityTask";
import { UndoneLowPriorityDeadlineTask } from "./undone/UndoneLowPriorityDeadlineTask";
import { UndoneMiddlePriorityDeadlineTask } from "./undone/UndoneMiddlePriorityDeadlineTask";
import { UndoneLowPriorityPostponableTask } from "./undone/postponable/UndoneLowPriorityPostponableTask";
import { UndoneMiddlePriorityPostponableTask } from "./undone/postponable/UndoneMiddlePriorityPostponableTask";

export class TaskFactory {
  /**
   * パターンに応じてDBの値からタスクを再生成する
   * MEMO: ここに複雑性が集中している
   *
   * @param id
   * @param name
   * @param priority
   * @param postponeCount
   * @param status
   * @return
   */

  public static reconstructUndoneTask(
    id: number,
    name: string,
    priority: string,
    postponeCount: number,
    status: string
  ) {
    if (priority == "high") {
      return UndoneHighPriorityTask.reconstruct(
        id,
        name,
        priority,
        postponeCount,
        status
      );
    } else if (priority == "middle" && postponeCount == 3) {
      return UndoneMiddlePriorityDeadlineTask.reconstruct(
        id,
        name,
        priority,
        postponeCount,
        status
      );
    } else if (priority == "low" && postponeCount < 3) {
      return UndoneLowPriorityDeadlineTask.reconstruct(
        id,
        name,
        priority,
        postponeCount,
        status
      );
    } else {
      throw new Error();
    }
  }

  public static reconstructUndonePostponableTask(
    id: number,
    name: string,
    priority: string,
    postponeCount: number,
    status: string
  ) {
    if (priority == "middle" && postponeCount == 3) {
      return UndoneMiddlePriorityPostponableTask.reconstruct(
        id,
        name,
        priority,
        postponeCount,
        status
      );
    } else if (priority == "low" && postponeCount < 3) {
      return UndoneLowPriorityPostponableTask.reconstruct(
        id,
        name,
        priority,
        postponeCount,
        status
      );
    } else {
      throw new Error();
    }
  }

  public static reconstructDoneTask(
    id: number,
    name: string,
    priority: string,
    postponeCount: number,
    status: string
  ) {
    if (priority == "high") {
      return DoneHighPriorityTask.reconstruct(
        id,
        name,
        priority,
        postponeCount,
        status
      );
    } else if (priority == "middle") {
      return DoneMiddlePriorityTask.reconstruct(
        id,
        name,
        priority,
        postponeCount,
        status
      );
    } else if (priority == "low") {
      return DoneLowerPriorityTask.reconstruct(
        id,
        name,
        priority,
        postponeCount,
        status
      );
    } else {
      throw new Error();
    }
  }
}
