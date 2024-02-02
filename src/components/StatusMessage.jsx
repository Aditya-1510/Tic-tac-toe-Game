import React from 'react';

const StatusMessage = ({ winner, current }) => {
  const NoMoveLeft = current.board.every(el => el !== null);

  return (
    <h2>
      {winner && `Winner is ${winner}`}{' '}
      {!winner &&
        !NoMoveLeft &&
        `Next player is ${current.isXNext ? 'X' : 'O'}`}
      {!winner && NoMoveLeft && 'X and O Tied'}
    </h2>
  );
};

export default StatusMessage;
