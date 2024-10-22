import Content from './Content';
import Header from './Header';
import Total from './Total';

const Course = ({ course }) => {
  return (
    <>
      <Header course={course.name} />
      {course.parts.map(part => (
        <Content key={part.id} part={part} />
      ))}
      <div>
        <Total parts={course.parts} />
      </div>
    </>
  );
};

export default Course;
