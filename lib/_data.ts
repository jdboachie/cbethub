
const courses = [
    {
        courseCode: 'CENG291',
        courseName: 'Engineering in Society',
        description: '',
        lecturerName: 'Dr. John Doe',
        fileCount: 5,
        tags: ['Computer Engineering', 'Computer Science']
    },
    {
        courseCode: 'COE291',
        courseName: 'Computer Engineering Lab I',
        description: '',
        lecturerName: 'Prof. Jane Smith',
        fileCount: 7,
        tags: ['Computer Engineering', 'Computer Science']
    },
    {
        courseCode: 'COE253',
        courseName: 'Discrete Structures',
        description: '',
        lecturerName: 'Dr. Emily Addo',
        fileCount: 7,
        tags: ['Computer Engineering', 'Computer Science']
    },
    {
        courseCode: 'COE283',
        courseName: 'Semiconductor Devices',
        description: '',
        lecturerName: 'Dr. Selase Agbemenu',
        fileCount: 9,
        tags: ['Computer Engineering', 'Computer Science']
    },
    {
        courseCode: 'COE559',
        courseName: 'Object Oriented Programming',
        description: '',
        lecturerName: 'Dr. Theresa Adjaidoo',
        fileCount: 15,
        tags: ['Computer Engineering', 'Computer Science']
    },
    {
        courseCode: 'COE213',
        courseName: 'Data Structures and Algorithms in Python',
        description: '',
        lecturerName: 'Dr. Theresa Adjaidoo',
        fileCount: 12,
        tags: ['Computer Engineering', 'Computer Science']
    },
    {
        courseCode: 'MATH151',
        courseName: 'Algebra',
        description: '',
        lecturerName: 'Dr. Niacin Touto',
        fileCount: 21,
        tags: ['Computer Engineering', 'Computer Science']
    },
    {
        courseCode: 'CBE442',
        courseName: 'Conduit and Burrow Effects',
        description: '',
        lecturerName: 'Dr. Dototo Mba',
        fileCount: 2,
        tags: ['Computer Engineering', 'Computer Science']
    },

]

const blogPosts = [
    {
        imgURL: "/design.jpg",
        title: "CBET December Challenge",
        id: "000001"
    },
    {
        imgURL: "/fullstack.jpg",
        title: "Full Stack Web Development Bootcamp",
        id: "000002"
    },
    {
        imgURL: "/recruit.jpg",
        title: "ACES Media Recruitment",
        id: "000003"
    },
    {
        imgURL: "/blogpic.jpg",
        title: "American Express is acquiring Kabbage for as much as $850M",
        id: "000004"
    }
]

export const fetchCourses = () => {
    return courses
}

export const fetchCourseById = (id: string) => {
    return courses.find(course => course.courseCode === id.toUpperCase())
}

export const fetchBlogPosts = () => {
    return blogPosts
}

export const fetchBlogPostById = (id: string) => {
    return blogPosts.find(blogPost => blogPost.id === id)
}