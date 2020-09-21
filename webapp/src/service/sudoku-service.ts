import { SudokuSolver } from "./sudoku/solve/sudoku-solver";
import { Sudoku } from "./sudoku/structure/sudoku";
import { SquarePossibilityManager } from "./sudoku/utils/square-possibility-manager";

export class SudokuService {
  private static instance = new SudokuService();
  public static getInstance(): SudokuService {
    return SudokuService.instance;
  }

  solve(sudokuGrid: number[][]): Promise<number[][]> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const sudokuArray = sudokuGrid.reduce((prev, next) => [
          ...prev,
          ...next,
        ]);

        const sudoku = new Sudoku(sudokuArray);
        new SquarePossibilityManager().calculateSquaresPossibilities(sudoku);
        const solvedSudoku = new SudokuSolver().solve(sudoku);
        const solvedSudokuGrid = solvedSudoku.rows.map((row) =>
          row.squares.map((square) => square.value)
        );

        resolve(solvedSudokuGrid);
      }, 2000);
    });
  }
}
