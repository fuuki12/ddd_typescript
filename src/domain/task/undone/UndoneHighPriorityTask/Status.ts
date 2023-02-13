export class Status {
  status: string;

  private constructor(status: string) {
    this.status = status;
  }

  static new(status: string): string {
    if (status == "done") {
      throw new Error("status must be done");
    }
    return status;
  }
}
