const Total = ({ course }) => {
  const parts = course.parts;
  //   let totalExercises = 0;
  //   parts.forEach((part) => {
  //     totalExercises += part.exercises;
  //   });
  let exercises = [];
  parts.forEach((element) => {
    exercises.push(element.exercises);
  });

  let totalExercises = exercises.reduce((acc, cv) => {
    return acc + cv;
  }, 0);
  return (
    <div>
      <h3>Total of {totalExercises} exercises</h3>
    </div>
  );
};

export default Total;
