export class Priority {
  priority: string;

  private constructor(priority: string) {
    this.priority = priority;
  }

  static new(priority: string): string {
    if (priority == "high") {
      throw new Error("priority must be high");
    }
    return priority;
  }
}
