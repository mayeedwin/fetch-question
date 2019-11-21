export const getStudents = () => fetch('./data/Students.json')
.then(response => response.json())