import { UndoneTask } from "../domain/model/task/undone/UndoneTask";
import { TaskRepository } from "../domain/repository/task/TaskRepository";
import { Result } from "../util/Result";

/**
 * TODO: タスクのユースケースを1publicメソッドにすることで不要な抽象化を減らすことができるはず
 * test
 */
export class taskUsecase {
  constructor(private _repo: TaskRepository) {}

  async done(taskId: number) {
    const result = await this._repo.undoneTaskfindById(taskId);
    result.match({
      Ok: (v) => {
        v.done;
        Result.Ok(this._repo.save(v));
      },
      Err: (e) => Result.Err(e),
    });
  }

  async undone(taskId: number) {
    const result = await this._repo.doneTaskfindById(taskId);
    result.match({
      Ok: (v) => {
        v.undone;
        Result.Ok(this._repo.save(v));
      },
      Err: (e) => Result.Err(e),
    });
  }

  // 実装できていない
  async postpone(taskId: number) {
    const result = await this._repo.undonePostponableTaskfindById(taskId);
    result.match({
      Ok: (v) => {
        v.done;
        Result.Ok(this._repo.save(v));
      },
      Err: (e) => Result.Err(e),
    });
  }

  async changeHighPriority(taskId: number) {
    const result = await this._repo.findById(taskId);
    result.match({
      Ok: (v) => {
        v.changeHighPriority;
        Result.Ok(this._repo.save(v));
      },
      Err: (e) => Result.Err(e),
    });
  }

  async changeMiddlePriority(taskId: number) {
    const result = await this._repo.findById(taskId);
    result.match({
      Ok: (v) => {
        v.changeMiddlePriority;
        Result.Ok(this._repo.save(v));
      },
      Err: (e) => Result.Err(e),
    });
  }

  async changeLowPriority(taskId: number) {
    const result = await this._repo.findById(taskId);
    result.match({
      Ok: (v) => {
        v.changeLowPriority;
        Result.Ok(this._repo.save(v));
      },
      Err: (e) => Result.Err(e),
    });
  }
}
