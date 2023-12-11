
const courses = [
    {
        courseCode: 'CENG291',
        courseName: 'Engineering in Society',
        description: '',
        lecturerName: 'Dr. John Doe',
        fileCount: 10,
        tags: ['Computer Engineering', 'Computer Science']
    },
    {
        courseCode: 'COE291',
        courseName: 'Computer Engineering Lab I',
        description: '',
        lecturerName: 'Prof. Jane Smith',
        fileCount: 10,
        tags: ['Computer Engineering', 'Computer Science']
    },
    {
        courseCode: 'COE253',
        courseName: 'Discrete Structures',
        description: '',
        lecturerName: 'Dr. Emily Addo',
        fileCount: 10,
        tags: ['Computer Engineering', 'Computer Science']
    },
    {
        courseCode: 'CENG291',
        courseName: 'Engineering in Society',
        description: '',
        lecturerName: 'Dr. John Doe',
        fileCount: 10,
        tags: ['Computer Engineering', 'Computer Science']
    },
    {
        courseCode: 'CENG291',
        courseName: 'Engineering in Society',
        description: '',
        lecturerName: 'Dr. John Doe',
        fileCount: 10,
        tags: ['Computer Engineering', 'Computer Science']
    },
    {
        courseCode: 'CENG291',
        courseName: 'Engineering in Society',
        description: '',
        lecturerName: 'Dr. John Doe',
        fileCount: 10,
        tags: ['Computer Engineering', 'Computer Science']
    },
    {
        courseCode: 'CENG291',
        courseName: 'Engineering in Society',
        description: '',
        lecturerName: 'Dr. John Doe',
        fileCount: 10,
        tags: ['Computer Engineering', 'Computer Science']
    },
    {
        courseCode: 'CENG291',
        courseName: 'Engineering in Society',
        description: '',
        lecturerName: 'Dr. John Doe',
        fileCount: 10,
        tags: ['Computer Engineering', 'Computer Science']
    },

]

export const fetchCourses = () => {
    return courses
}

export const fetchCourseById = (id: string) => {
    return courses.find(course => course.courseCode === id.toUpperCase())
}