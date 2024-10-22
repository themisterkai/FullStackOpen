const Total = ({ parts }) => (
  <strong>
    Total of {parts.reduce((acc, curr) => acc + curr.exercises, 0)} exercises
  </strong>
);

export default Total;
