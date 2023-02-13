import { DoneTask } from "../../done/DoneTask";
import { Task } from "../../Task";

export interface UndoneTask extends Task {
  done: DoneTask;
}
