
const courses = [
    {
        courseCode: 'CENG291',
        courseName: 'Engineering in Society',
        description: '',
        lecturerName: 'Dr. John Doe',
        fileCount: 5,
        tags: ['COE']
    },
    {
        courseCode: 'COE291',
        courseName: 'Computer Engineering Lab I',
        description: '',
        lecturerName: 'Prof. Jane Smith',
        fileCount: 7,
        tags: ['ACES', 'TELESA', 'BEMESS']
    },
    {
        courseCode: 'COE253',
        courseName: 'Discrete Structures',
        description: '',
        lecturerName: 'Dr. Emily Addo',
        fileCount: 7,
        tags: ['COE']
    },
    {
        courseCode: 'COE283',
        courseName: 'Semiconductor Devices',
        description: '',
        lecturerName: 'Dr. Selase Agbemenu',
        fileCount: 9,
        tags: ['ACES', 'CS', 'ELEESA']
    },
    {
        courseCode: 'COE559',
        courseName: 'Object Oriented Programming',
        description: '',
        lecturerName: 'Dr. Theresa Adjaidoo',
        fileCount: 15,
        tags: ['ACES', 'CS']
    },
    {
        courseCode: 'COE213',
        courseName: 'Data Structures and Algorithms in Python',
        description: '',
        lecturerName: 'Dr. Theresa Adjaidoo',
        fileCount: 12,
        tags: ['ACES', 'CS']
    },
    {
        courseCode: 'MATH151',
        courseName: 'Algebra',
        description: '',
        lecturerName: 'Dr. Niacin Touto',
        fileCount: 21,
        tags: ['ACES', 'CS']
    },
    {
        courseCode: 'CBE442',
        courseName: 'Conduit and Burrow Effects',
        description: '',
        lecturerName: 'Dr. Dototo Mba',
        fileCount: 2,
        tags: ['ACES', 'CS']
    },

]

const blogPosts = [
    {
        imgURL: "/design.jpg",
        title: "CBET December Challenge",
        id: "0001"
    },
    {
        imgURL: "/fullstack.jpg",
        title: "Full Stack Web Development Bootcamp",
        id: "0002"
    },
    {
        imgURL: "/recruit.jpg",
        title: "ACES Media Recruitment",
        id: "0003"
    },
    {
        imgURL: "/blogpic.jpg",
        title: "American Express is acquiring Kabbage for as much as $850M",
        id: "0004"
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