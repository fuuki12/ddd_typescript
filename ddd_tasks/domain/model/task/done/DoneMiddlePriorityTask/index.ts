import { createMock } from "ts-auto-mock";

import { Priority } from "./Priority";
import { Status } from "./Status";
import { PostponeCount } from "./PostponeCount";
import { DoneTask } from "../DoneTask";
import { Task } from "../../Task";
import { UndoneMiddlePriorityPostponableTask } from "../../undone/postponable/UndoneMiddlePriorityPostponableTask";

export class DoneMiddlePriorityTask implements DoneTask {
  private readonly _id: number;
  private readonly _name: string;
  private readonly _priority: string;
  private readonly _postponeCount: number;
  private readonly _status: string;

  static create(id: number, name: string, postponeCount: number) {
    return new DoneMiddlePriorityTask(
      id,
      name,
      "middle",
      postponeCount,
      "done"
    );
  }

  static reconstruct(
    id: number,
    name: string,
    priority: string,
    postponeCount: number,
    status: string
  ) {
    return new DoneMiddlePriorityTask(
      id,
      name,
      priority,
      postponeCount,
      status
    );
  }

  public get undone(): UndoneMiddlePriorityPostponableTask {
    return UndoneMiddlePriorityPostponableTask.create(
      this._id,
      this._name,
      this._postponeCount
    );
  }

  public get getId(): number {
    return this._id;
  }

  public get getName(): string {
    return this._name;
  }

  public get getPriority(): string {
    return this._priority;
  }

  public get getPostponeCount(): number {
    return this._postponeCount;
  }

  public get getStatus(): string {
    return this._status;
  }

  public get changeHighPriority(): Task {
    const dummy: Task = createMock<Task>();
    return dummy;
  }

  public get changeMiddlePriority(): Task {
    const dummy: Task = createMock<Task>();
    return dummy;
  }

  public get changeLowPriority(): Task {
    const dummy: Task = createMock<Task>();
    return dummy;
  }

  private constructor(
    id: number,
    name: string,
    priority: string,
    postponeCount: number,
    status: string
  ) {
    this._id = id;
    this._name = name;
    this._priority = Priority.new(priority);
    this._postponeCount = PostponeCount.new(postponeCount);
    this._status = Status.new(status);
  }
}
