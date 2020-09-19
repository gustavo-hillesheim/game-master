export class SudokuService {
  private static instance = new SudokuService();
  public static getInstance(): SudokuService {
    return SudokuService.instance;
  }

  solve(sudoku: number[][]): Promise<number[][]> {
    console.log("Solving sudoku", sudoku);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const solved = sudoku.map((row) => row.map((_, i) => i));
        resolve(solved);
      }, 2000);
    });
  }
}
