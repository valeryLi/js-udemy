// function pow(x, n) {
//   let result = 1;

//   for (let i = 0; i < n; i++) {
//     result *= x;
//   result = x * result;
//   }
//   return result;
// }

//пишем функцию используя рекурсию

function pow(x, n) {
  if (n === 1) {
    return x;
  } else {
    return x * pow(x, n - 1);
  }
}

pow(2, 1); //2
pow(2, 2); //4
pow(2, 3); // 8
pow(2, 4); // 16

let students = {
  js: [
    {
      name: "John",
      progress: 100,
    },
    {
      name: "Ivan",
      progress: 60,
    },
  ],

  html: {
    basic: [
      {
        name: "Peter",
        progress: 20,
      },
      {
        name: "Ann",
        progress: 18,
      },
    ],

    pro: [
      {
        name: "Sam",
        progress: 10,
      },
    ],
    // semi: {
    //   students: [
    //     {
    //       name: "Test",
    //       progress: 100,
    //     },
    //   ],
    // },
  },
};

// Используя ф-цию ниже мы привязываемся к данным и если их изменят работать такая ф-ция не будет правильно.  В консоле будует NaN

function getTotalProgressByIteration(data) {
  let total = 0;
  let students = 0;

  for (let course of Object.values(data)) {
    if (Array.isArray(course)) {
      students += course.length;

      for (let i = 0; i < course.length; i++) {
        total += course[i].progress;
      }
    } else {
      for (let subCourse of Object.values(course)) {
        students += subCourse.length;

        for (let i = 0; i < subCourse.length; i++) {
          total += subCourse[i].progress;
        }
      }
    }
  }
  return total / students;
}

console.log(getTotalProgressByIteration(students));

// ф-ция вычисляет прогресс при помощи рекурсии. Важно у ф-ций с рекурсией нету промежуточных переменных, так как они высчитываются в процессе. При изменении данных ф-ция прекрасно работает.

function getTotalProgressByRecursion(data) {
  if (Array.isArray(data)) {
    let total = 0;

    for (let i = 0; i < data.length; i++) {
      total += data[i].progress;
    }

    return [total, data.length];
  } else {
    let total = [0, 0];

    for (let subData of Object.values(data)) {
      const subDataArray = getTotalProgressByRecursion(subData);
      total[0] += subDataArray[0];
      total[1] += subDataArray[1];
    }
    return total;
  }
}

const result = getTotalProgressByRecursion(students);
console.log(result[0] / result[1]);

function factorial(n) {
  if (typeof n !== "number" || !Number.isInteger(n)) {
    return "Пожалуйста, введите число";
  }

  if (n === 1 || n < 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(5));
