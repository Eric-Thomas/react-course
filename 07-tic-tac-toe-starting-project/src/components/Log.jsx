export default function Log({ turns }) {
  return (
    <ol id="log">
      {turns.map((turn) => {
        return (
          <li key={`${turn.square.row}${turn.square.col}`}>
            Player {turn.player} played row: {turn.square.row} column:
            {turn.square.col}
          </li>
        );
      })}
    </ol>
  );
}
