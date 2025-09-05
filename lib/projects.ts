export interface ProjectGalleryImage {
  url: string
  caption?: string
}

export interface RelatedProject {
  slug: string
  title: string
  category: string
  image: string
}

export interface Project {
  id: number
  slug: string
  title: string
  category: string
  shortDescription: string
  description: string[]
  features: string[]
  technologies: string[]
  coverImage: string
  thumbnailImage: string
  gallery?: ProjectGalleryImage[]
  client?: string
  timeline: string
  role: string
  liveUrl?: string
  githubUrl?: string
  relatedProjects?: RelatedProject[]
}

const projects: Project[] = [
  {
    "id": 1,
    "slug": "job-application-tracker",
    "title": "JobApplicationTracker",
    "category": "Web Application",
    "shortDescription": "A comprehensive MERN-based job application tracking system with real-time updates and analytics.",
    "description": [
      "JobApplicationTracker is a full-stack web application built with the MERN stack to help job seekers manage their application process efficiently. The platform provides real-time status updates and comprehensive tracking capabilities.",
      "The application features advanced filtering options allowing users to sort and search through their applications based on various criteria such as company, position, application date, and current status.",
      "Built-in analytics and visualization tools provide valuable insights into application patterns and success rates over six-month periods through interactive dashboards, helping users optimize their job search strategy."
    ],
    "features": [
      "Real-time job application status tracking and updates",
      "Advanced filtering and search capabilities for applications",
      "Interactive analytics dashboards with six-month insights",
      "Performance optimization with caching mechanisms",
      "Responsive design for desktop and mobile devices",
      "Data visualization charts for application trends and success rates"
    ],
    "technologies": ["React.js", "Node.js", "Express.js", "MongoDB", "Chart.js", "CSS3", "JWT"],
    "coverImage": "/thumbnails/job_tracker_portal_thumbnail.png",
    "thumbnailImage": "/thumbnails/job_tracker_portal_thumbnail.png",
    "gallery": [
      { "url": "/web/jobtracker/job_tracker_portal_demo1.png", "caption": "Main Dashboard with Application Overview" },
      { "url": "/web/jobtracker/job_tracker_portal_demo2.png", "caption": "Analytics Dashboard with Charts" },
      { "url": "/web/jobtracker/job_tracker_portal_demo3.png", "caption": "Application Details and Status Tracking" },
      { "url": "/web/jobtracker/job_tracker_portal_demo4.png", "caption": "Advanced Filtering Interface" }
    ],
    "timeline": "4 months (Q3 2024)",
    "role": "Full Stack Developer",
    "liveUrl": "https://job-portal-tracker.onrender.com/",
    "githubUrl": "https://github.com/prajapatihet/HuntJobs",
    "relatedProjects": [
      {
        "slug": "devops-analytics-dashboard",
        "title": "DevOps Analytics Dashboard",
        "category": "Web Application",
        "image": "/thumbnails/devops_platform_thumbnail.png"
      },
      {
        "slug": "eventsync-app",
        "title": "EventSync",
        "category": "Mobile App",
        "image": "/thumbnails/eventsync_app_thumbnail.png"
      }
    ]
  },
  {
    "id": 2,
    "slug": "devops-analytics-dashboard",
    "title": "DevOps & GitHub Analytics Dashboard",
    "category": "Web Application",
    "shortDescription": "A React-based frontend dashboard providing comprehensive DevOps and GitHub analytics insights.",
    "description": [
      "The DevOps & GitHub Analytics Dashboard is a modern web application built with React that provides comprehensive insights into development team productivity and repository health metrics.",
      "The dashboard features detailed analytics for pull requests, code review processes, and team collaboration patterns, helping organizations make data-driven decisions about their development workflows.",
      "Built with performance in mind using React, Vite, and Tailwind CSS, the application delivers a responsive and high-performance user experience across all devices."
    ],
    "features": [
      "Comprehensive pull request analytics and tracking",
      "Repository health monitoring and metrics",
      "Team productivity insights and reporting",
      "Real-time data visualization and charts",
      "Responsive design optimized for all screen sizes",
      "High-performance build system with Vite"
    ],
    "technologies": ["React.js", "Vite", "Tailwind CSS", "Chart.js", "GitHub API", "Docker", "Azure App Service"],
    "coverImage": "/thumbnails/devops_platform_thumbnail.png",
    "thumbnailImage": "/thumbnails/devops_platform_thumbnail.png",
    "gallery": [
      { "url": "/web/devops/devops_platform_demo1.png", "caption": "Pull Request Insights View" },
      { "url": "/web/devops/devops_platform_demo2.png", "caption": "Repository Health Metrics" },
      { "url": "/web/devops/devops_platform_demo3.png", "caption": "Team Productivity Reports" },
      { "url": "/web/devops/devops_platform_demo4.png", "caption": "Code Review Analytics" },
    ],
    "timeline": "3 months (Q1 2024)",
    "role": "Frontend Developer",
    "liveUrl": "https://devops-github.azurewebsites.net/",
    "githubUrl": "https://github.com/InnovateNext-Labs/DevelopmentOperationAnalysis",
    "relatedProjects": [
      {
        "slug": "job-application-tracker",
        "title": "JobApplicationTracker",
        "category": "Web Application",
        "image": "/thumbnails/job_tracker_portal_thumbnail.png"
      },
      {
        "slug": "uniaccess-app",
        "title": "UniAccessApp",
        "category": "Mobile App",
        "image": "/thumbnails/uniaccess_app_thumbnail.png"
      }
    ]
  },
  {
    "id": 3,
    "slug": "eventsync-app",
    "title": "EventSync",
    "category": "Mobile App",
    "shortDescription": "A comprehensive Flutter-based event management app with ticketing, payments, and participant management.",
    "description": [
      "EventSync is a feature-rich mobile application built with Flutter that streamlines event creation, ticketing, and participant management. The app integrates with Appwrite for backend services and Stripe for secure payment processing.",
      "The application provides a complete event management solution from creation to check-in, including automated badge and QR code generation for seamless event entry and participant tracking.",
      "Optimized performance through local caching mechanisms ensures smooth user experience even in low-connectivity environments, making it reliable for real-world event scenarios."
    ],
    "features": [
      "Complete event creation and management system",
      "Integrated Stripe payment gateway for ticketing",
      "Real-time participant registration and management",
      "Automated badge and QR code generation",
      "Check-in status tracking and management",
      "Local caching for improved performance and offline capability"
    ],
    "technologies": ["Flutter", "Dart", "Appwrite", "Stripe API", "SQLite", "QR Code Generator"],
    "coverImage": "/thumbnails/eventsync_app_thumbnail.png",
    "thumbnailImage": "/thumbnails/eventsync_app_thumbnail.png",
    "gallery": [
      { "url": "/mobile/event/eventsync_demo1.jpg", "caption": "Event Creation Interface" },
      { "url": "/mobile/event/eventsync_demo2.jpg", "caption": "Ticketing and Payment Flow" },
      { "url": "/mobile/event/eventsync_demo3.jpg", "caption": "Participant Management Dashboard" },
      { "url": "/mobile/event/eventsync_demo4.jpg", "caption": "QR Code and Badge Generation" }
    ],
    "timeline": "5 months (Q4 2023 - Q1 2024)",
    "role": "Mobile App Developer",
    "liveUrl": "#",
    "githubUrl": "#",
    "relatedProjects": [
      {
        "slug": "uniaccess-app",
        "title": "UniAccessApp",
        "category": "Mobile App",
        "image": "/thumbnails/uniaccess_app_thumbnail.png"
      },
      {
        "slug": "connect-donor",
        "title": "ConnectDonor",
        "category": "Mobile App",
        "image": "/thumbnails/connect_donor_thumbnail.png"
      }
    ]
  },
  {
    "id": 4,
    "slug": "uniaccess-app",
    "title": "UniAccessApp",
    "category": "Mobile App",
    "shortDescription": "A comprehensive academic mobile app built with FlutterFlow for student information management.",
    "description": [
      "UniAccessApp is a responsive mobile application developed using FlutterFlow to provide students with centralized access to all their academic information including attendance, fees, exam schedules, and timetables.",
      "The application features a clean and intuitive user interface designed with reusable components, ensuring consistency across all academic modules while maintaining excellent user experience.",
      "Built with responsive design principles, the app provides smooth navigation and optimal performance across different screen sizes and devices, making academic information easily accessible to all students."
    ],
    "features": [
      "Comprehensive attendance tracking and monitoring",
      "Fee management and payment status tracking",
      "Exam schedules and timetable management",
      "Real-time notifications for academic updates",
      "Clean, reusable UI components for consistency",
      "Responsive design for all screen sizes"
    ],
    "technologies": ["FlutterFlow", "Flutter", "Firebase", "SQLite", "Push Notifications"],
    "coverImage": "/thumbnails/uniaccess_app_thumbnail.png",
    "thumbnailImage": "/thumbnails/uniaccess_app_thumbnail.png",
    "gallery": [
      { "url": "/mobile/uniaccess/uniaccess_app_demo1.jpg", "caption": "Student Dashboard Overview" },
      { "url": "/mobile/uniaccess/uniaccess_app_demo2.jpg", "caption": "Attendance Tracking Interface" },
      { "url": "/mobile/uniaccess/uniaccess_app_demo3.jpg", "caption": "Fee Management Screen" },
      { "url": "/mobile/uniaccess/uniaccess_app_demo4.jpg", "caption": "Exam Schedule and Timetable View" },
      { "url": "/mobile/uniaccess/uniaccess_app_demo5.jpg", "caption": "Notification System" },
      { "url": "/mobile/uniaccess/uniaccess_app_demo6.jpg", "caption": "Profile Management" }
    ],
    "timeline": "3 months (Q2 2024)",
    "role": "Mobile App Developer",
    "liveUrl": "#",
    "githubUrl": "#",
    "relatedProjects": [
      {
        "slug": "eventsync-app",
        "title": "EventSync",
        "category": "Mobile App",
        "image": "/thumbnails/eventsync_app_thumbnail.png"
      },
      {
        "slug": "connect-donor",
        "title": "ConnectDonor",
        "category": "Mobile App",
        "image": "/thumbnails/connect_donor_thumbnail.png"
      }
    ]
  },
  {
    "id": 5,
    "slug": "connect-donor",
    "title": "ConnectDonor",
    "category": "Mobile App",
    "shortDescription": "A comprehensive blood donation platform connecting donors with blood banks through real-time communication.",
    "description": [
      "ConnectDonor is a life-saving mobile application built with Flutter that creates a bridge between blood donors and blood banks, facilitating efficient blood donation processes and emergency response.",
      "The platform features easy donor registration with comprehensive profile management, allowing users to quickly sign up and maintain their donation history and availability status.",
      "Advanced location-based services help users find nearby blood banks and donation centers, while real-time alert system ensures immediate notification during blood emergencies."
    ],
    "features": [
      "Easy donor registration and profile management",
      "Real-time emergency blood donation alerts",
      "Location-based blood bank and center finder",
      "Donation request and fulfillment system",
      "Blood drive event management and notifications",
      "Real-time communication between donors and blood banks"
    ],
    "technologies": ["Flutter", "Dart", "JSON", "Git", "GitHub", "Google Maps API", "Firebase"],
    "coverImage": "/thumbnails/connect_donor_thumbnail.png",
    "thumbnailImage": "/thumbnails/connect_donor_thumbnail.png",
    "gallery": [
      { "url": "/mobile/donor/donor_connect_demo1.jpg", "caption": "Donor Registration and Profile" },
      { "url": "/mobile/donor/donor_connect_demo2.jpg", "caption": "Blood Bank Locator Map" },
      { "url": "/mobile/donor/donor_connect_demo3.jpg", "caption": "Emergency Alert System" },
      { "url": "/mobile/donor/donor_connect_demo4.jpg", "caption": "Blood Drive Management Interface" }
    ],
    "timeline": "4 months (Q3 2024)",
    "role": "Mobile App Developer",
    "liveUrl": "#",
    "githubUrl": "#",
    "relatedProjects": [
      {
        "slug": "eventsync-app",
        "title": "EventSync",
        "category": "Mobile App",
        "image": "/thumbnails/eventsync_app_thumbnail.png"
      },
      {
        "slug": "uniaccess-app",
        "title": "UniAccessApp",
        "category": "Mobile App",
        "image": "/thumbnails/uniaccess_app_thumbnail.png"
      }
    ]
  }
]

export { projects }

// Add these functions after the projects array export

export function getAllProjects(): Project[] {
  return projects
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

export function getRelatedProjects(currentSlug: string, limit = 2): RelatedProject[] {
  const currentProject = getProjectBySlug(currentSlug)
  if (!currentProject || !currentProject.relatedProjects) {
    // If no related projects defined, return random projects
    return projects
      .filter((project) => project.slug !== currentSlug)
      .slice(0, limit)
      .map((project) => ({
        slug: project.slug,
        title: project.title,
        category: project.category,
        image: project.thumbnailImage,
      }))
  }

  return currentProject.relatedProjects.slice(0, limit)
}
