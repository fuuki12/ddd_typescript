import { createMock } from "ts-auto-mock";
import { Priority } from "./Priority";
import { Status } from "./Status";
import { PostponeCount } from "./PostponeCount";
import { UndoneTask } from "../UndoneTask";
import { Task } from "../../Task";
import { DoneHighPriorityTask } from "../../done/DoneHighPriorityTask";

export class UndoneHighPriorityTask implements UndoneTask {
  private readonly _id: number;
  private readonly _name: string;
  private readonly _priority: string;
  private readonly _postponeCount: number;
  private readonly _status: string;

  static create(id: number, name: string, postponeCount: number) {
    return new UndoneHighPriorityTask(
      id,
      name,
      "high",
      postponeCount,
      "undone"
    );
  }

  static reconstruct(
    id: number,
    name: string,
    priority: string,
    postponeCount: number,
    status: string
  ) {
    return new UndoneHighPriorityTask(
      id,
      name,
      priority,
      postponeCount,
      status
    );
  }

  public get done(): DoneHighPriorityTask {
    return DoneHighPriorityTask.create(
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
