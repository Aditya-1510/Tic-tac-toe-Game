import React from 'react';

const StatusMessage = ({ winner, current }) => {
  const NoMoveLeft = current.board.every(el => el !== null);

  return (
    <div className="status-message">
      {winner && (
        <>
          Winner is{' '}
          <span className={winner === 'X' ? 'text-green' : 'text-orange'}>
            {winner}
          </span>
        </>
      )}
      {!winner && !NoMoveLeft && (
        <>
          `Next player is{' '}
          <span className={current.isXNext ? 'text-green' : 'text-orange'}>
            {current.isXNext ? 'X' : 'O'}
          </span>
        </>
      )}
      {!winner && NoMoveLeft && (
        <>
          <span className="text-green">X</span> and{' '}
          <span className="text-orange">O</span> Tied
        </>
      )}
    </div>
  );
};

export default StatusMessage;
