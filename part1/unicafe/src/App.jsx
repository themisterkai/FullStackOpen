import { useState } from 'react';

const computeAverageHelper = (good, bad, neutral) =>
  ((good + bad * -1) / (good + bad + neutral)).toFixed(1);

const computePositiveHelper = (good, bad, neutral) =>
  ((good / (good + bad + neutral)) * 100).toFixed(1);

const Button = ({ name, onClickHandler }) => (
  <button onClick={onClickHandler}>{name}</button>
);

const Header = ({ title }) => <h1>{title}</h1>;

const StatisticsLine = ({ name, score }) => (
  <tr>
    <td>{name}</td>
    <td>{score}</td>
  </tr>
);

const Statistics = ({ good, neutral, bad }) => {
  if (good + bad + neutral === 0) {
    return (
      <div>
        <Header title="statistics" />
        No feedback given
      </div>
    );
  }
  return (
    <>
      <Header title="statistics" />
      <table>
        <tbody>
          <StatisticsLine name="good" score={good} />
          <StatisticsLine name="neutral" score={neutral} />
          <StatisticsLine name="bad" score={bad} />
          <tr>
            <td>average</td>
            <td>{computeAverageHelper(good, bad, neutral)}</td>
          </tr>
          <tr>
            <td>positive</td>
            <td>{computePositiveHelper(good, bad, neutral)}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <Header title="give feedback" />
      <div>
        <Button onClickHandler={() => setGood(good + 1)} name="good" />
        <Button onClickHandler={() => setNeutral(neutral + 1)} name="neutral" />
        <Button onClickHandler={() => setBad(bad + 1)} name="bad" />
      </div>
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  );
};

export default App;
