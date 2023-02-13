import { Task } from "../../Task";
import { UndoneTask } from "../../undone/UndoneTask";

export interface DoneTask extends Task {
  undone: UndoneTask;
}
