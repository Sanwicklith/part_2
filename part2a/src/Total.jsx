const Total = ({ course }) => {
  const parts = course.parts;
  let totalExercises = 0;
  parts.forEach((part) => {
    totalExercises += part.exercises;
  });
  return (
    <div>
      <h3>Total of {totalExercises} exercises</h3>
    </div>
  );
};

export default Total;
