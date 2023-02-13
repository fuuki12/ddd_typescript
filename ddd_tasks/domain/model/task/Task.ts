export interface Task {
  getId: number;
  getName: string;
  getPriority: string;
  getPostponeCount: number;
  getStatus: string;
  changeHighPriority: Task;
  changeMiddlePriority: Task;
  changeLowPriority: Task;
}
