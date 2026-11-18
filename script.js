const button = document.getElementById("countButton");
const input = document.getElementById("inputField");
const result = document.getElementById("result");
const exerciseName = document.getElementById("exerciseName");
const exerciseReps = document.getElementById("exerciseReps");
const addExerciseButton = document.getElementById("addExerciseButton");
const exerciseList = document.getElementById("exerciseList");

const exercises = [
  { name: "Махи", reps: 15 },
  { name: "Приседания", reps: 12 },
  { name: "Тяга", reps: 10 },
];
renderExercises();
addExerciseButton.addEventListener("click", function (){
const name = exerciseName.value;
const reps = Number(exerciseReps.value);
exercises.push({name, reps});
renderExercises();
});

button.addEventListener("click", function () {
  const rounds = Number(input.value);

  if (rounds <= 0 || !Number.isInteger(rounds)) { // проверяет не ввели ли дробное число
    result.textContent = "Укажите целое количество кругов";
    return;
  }
  const totalReps = getTotalReps(exercises) * rounds; // количество упражнений умножает на заданные круги

  result.textContent = `Общее количество повторений: ${totalReps}`;
});

function getTotalReps(arr) { //считаест повторения за один круг и возвращает число
  let totalReps = 0;
  for (let i = 0; i < arr.length; i++) {
    totalReps += arr[i].reps;
  }

  return totalReps;
}


function renderExercises(){
  exerciseList.textContent = ""; // очистил содержимое лист

  for (let i = 0; i < exercises.length; i++){
const li = document.createElement('li');
li.textContent = `${exercises[i].name} - ${exercises[i].reps} повторений`; //внес в память
exerciseList.append(li); // отрисовать
  }
}