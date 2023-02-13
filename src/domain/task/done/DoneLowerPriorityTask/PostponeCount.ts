export class PostponeCount {
  postponeCount: number;

  private constructor(postponeCount: number) {
    this.postponeCount = postponeCount;
  }

  static new(postponeCount: number): number {
    if (postponeCount > 3) {
      throw new Error("postpone count must be less than 3");
    }
    return postponeCount;
  }

  static conuntUp(postponeCount: number): number {
    return PostponeCount.new(postponeCount + 1);
  }
}
