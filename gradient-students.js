function gradingStudents(grades) {
  // Write your code here
  const res = grades.map((grade) => {
    if (grade < 38) {
      return grade
    } else {
      const rounded = Math.ceil(grade / 5) * 5
      const diff = Math.abs(rounded - grade)
      return diff < 3 ? rounded : grade
    }
  })

  console.log(res)
}

gradingStudents([73, 67, 38, 33])
