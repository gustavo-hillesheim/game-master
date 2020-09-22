import { Cell } from "@/model/sudoku.model";
import { SudokuSolver } from "./sudoku/solve/sudoku-solver";
import { SudokuVerifier } from "./sudoku/solve/sudoku-verifier";
import { Sudoku } from "./sudoku/structure/sudoku";
import { SquarePossibilityManager } from "./sudoku/utils/square-possibility-manager";

export class SudokuService {
  private static instance = new SudokuService();
  public static getInstance(): SudokuService {
    return SudokuService.instance;
  }

  solve(sudokuGrid: Cell[][]): Promise<number[][]> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const sudokuArray = sudokuGrid
          .map((row) => {
            return row.map((cell) => cell.value);
          })
          .reduce((prev, next) => [...prev, ...next]);

        const sudoku = new Sudoku(sudokuArray);
        new SquarePossibilityManager().calculateSquaresPossibilities(sudoku);
        const solvedSudoku = new SudokuSolver().solve(sudoku);
        const solvedSudokuGrid = solvedSudoku.rows.map((row) =>
          row.squares.map((square) => square.value)
        );

        const isSolved = new SudokuVerifier().isSolved(solvedSudoku);
        if (isSolved) {
          resolve(solvedSudokuGrid);
        } else {
          reject();
        }
      }, 0);
    });
  }
}
