const Hello = props => {
  return (
    <div>
      <p>Hello {props.name}</p>
    </div>
  );
};

// const App = () => {
//   return (
//     <div>
//       <h1>Greetings</h1>
//       <Hello name="Kai" />
//       <Hello name="Haida" />
//       <Hello name="Soma" />
//     </div>
//   );
// };

const App = () => {
  const friends = [
    { name: 'Peter', age: 4 },
    { name: 'Maya', age: 10 },
  ];

  return (
    <div>
      <p>{friends[0].name}</p>
      <p>{friends[1].age}</p>
    </div>
  );
};

export default App;
