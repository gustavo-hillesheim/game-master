import { Square } from "./../structure/square";
import { Sudoku } from "./../structure/sudoku";
import { SquareGroup } from "../structure/square-group";
export class SudokuVerifier {
  findErrors({ squares, grids, rows, columns }: Sudoku): Square[] {
    const erroredSquares: Square[] = [
      ...this.squaresWithoutValue(squares),
      ...this.squaresWithRepeatedValueInGroups(grids),
      ...this.squaresWithRepeatedValueInGroups(rows),
      ...this.squaresWithRepeatedValueInGroups(columns),
    ];

    return erroredSquares;
  }

  private squaresWithoutValue(squares: Square[]): Square[] {
    return squares.filter((square) => !square.value);
  }

  private squaresWithRepeatedValueInGroups(groups: SquareGroup[]): Square[] {
    return groups
      .map(this.squaresWithRepeatedValue)
      .reduce((prev, next) => [...prev, ...next]);
  }

  private squaresWithRepeatedValue({ squares }: SquareGroup): Square[] {
    const squaresByValue: { [key: number]: Square[] } = {};

    for (let i = 0; i < squares.length; i++) {
      const square = squares[i];
      if (!squaresByValue[square.value]) {
        squaresByValue[square.value] = [square];
      } else {
        squaresByValue[square.value].push(square);
      }
    }

    const squaresValues = Object.values(squaresByValue);

    return squaresValues
      .filter((squares) => squares.length > 1)
      .reduce((prev, next) => [...prev, ...next], []);
  }
}
