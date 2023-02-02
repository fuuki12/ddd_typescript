import { Priority } from "./Priority";

export class Task {
  private readonly _id: number;
  private readonly _name: string;
  private readonly _priority: string;

  public get getId(): number {
    return this._id;
  }

  public get getName(): string {
    return this._name;
  }

  public get getPriority(): string {
    return this._priority;
  }

  private constructor(id: number, name: string, priority: string) {
    this._id = id;
    this._name = name;
    this._priority = Priority.new(priority);
  }
}
