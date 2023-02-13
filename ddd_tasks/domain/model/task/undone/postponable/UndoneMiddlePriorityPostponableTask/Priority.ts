export class Priority {
  priority: string;

  private constructor(priority: string) {
    this.priority = priority;
  }

  static new(priority: string): string {
    if (priority == "middle") {
      throw new Error("priority must be middle");
    }
    return priority;
  }
}
