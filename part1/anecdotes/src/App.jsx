import { useState } from 'react';

const Button = ({ name, onClickHandler }) => (
  <button onClick={onClickHandler}>{name}</button>
);

// helper function to get random int
const getRandomInt = max => {
  return Math.floor(Math.random() * (max + 1));
};

// helper function to display 0 if the vote count is null
// this can happen when an anecodete doesn't have any votes yet
const returnNumVote = num => (num == null ? 0 : num);

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.',
  ];

  const [selected, setSelected] = useState(getRandomInt(anecdotes.length - 1));
  const [votes, setVotes] = useState({});

  const setVotesHandler = index => {
    if (votes[index] == null) {
      setVotes({
        ...votes,
        [index]: 1,
      });
    } else {
      setVotes({
        ...votes,
        [index]: votes[index] + 1,
      });
    }
  };

  const findMostVotesIndex = votes => {
    let topIndex = null;
    let maxVotes = -Infinity;
    if (Object.entries(votes).length === 0) {
      return getRandomInt(anecdotes.length - 1);
    }
    for (const index in votes) {
      if (votes[index] > maxVotes) {
        maxVotes = votes[index];
        topIndex = index;
      }
    }

    return topIndex;
  };

  return (
    <div>
      <div>
        <h1>Anecdote of the day</h1>
        <div>{anecdotes[selected]}</div>
        <div>has {returnNumVote(votes[selected])} votes</div>
        <Button name="vote" onClickHandler={() => setVotesHandler(selected)} />
        <Button
          name="next anecdote"
          onClickHandler={() => setSelected(getRandomInt(anecdotes.length - 1))}
        />
      </div>
      <div>
        <h1>Anecdote with most votes</h1>
        <div>{anecdotes[findMostVotesIndex(votes)]}</div>
        <div>has {returnNumVote(votes[findMostVotesIndex(votes)])} votes</div>
      </div>
    </div>
  );
};

export default App;
