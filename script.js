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
addExerciseButton.addEventListener("click", function () {
  const name = exerciseName.value.trim();
  const reps = Number(exerciseReps.value);

  if (name === "" || reps <= 0 || !Number.isInteger(reps)) {
    alert("Введите название и положительное целое количество повторений");
    return;
  } // проверка на пустое имя, количество повторений упражнений (не ноль и не минус), если не целое число вернуть false

  exercises.push({ name, reps });
  renderExercises();

  result.textContent = ""; // обнулить рассчет колличества повторений при добавлении упражнения

  exerciseName.value = "";
  exerciseReps.value = "";
  exerciseName.focus();
});

button.addEventListener("click", function () {
  const rounds = Number(input.value);

  if (rounds <= 0 || !Number.isInteger(rounds)) {
    // проверяет не ввели ли дробное число
    result.textContent = "Укажите целое количество кругов";
    return;
  }
  const totalReps = getTotalReps(exercises) * rounds; // количество упражнений умножает на заданные круги

  result.textContent = `Общее количество повторений: ${totalReps}`;
});

function getTotalReps(arr) {
  //считаест повторения за один круг и возвращает число
  let totalReps = 0;
  for (let i = 0; i < arr.length; i++) {
    totalReps += arr[i].reps;
  }

  return totalReps;
}

function renderExercises() {
  exerciseList.textContent = ""; // очистил содержимое лист

  for (let i = 0; i < exercises.length; i++) {
    const li = document.createElement("li");
    const deleteButton = document.createElement("button");

    li.textContent = `${exercises[i].name} - ${exercises[i].reps} повторений  `; //внес в память

    deleteButton.textContent = "Delete";
    li.append(deleteButton);

    exerciseList.append(li); // отрисовать

    deleteButton.addEventListener('click', function(){
      exercises.splice(i, 1);
      renderExercises(); // перерисовка без удаленных

      result.textContent = "";
    })

    
  }
}
