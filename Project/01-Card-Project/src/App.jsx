import React from 'react'
import Card from './Components/Card.jsx'

function App() {
const arr = [
  {
    id: 1,
    companyLogo: "https://imgs.search.brave.com/QfriXBcmP9R-1r8p3b23DLbJ4t0n5Kia6fJI52PrR60/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2FmL2E2/LzRlL2FmYTY0ZTY0/NmE0YzQzOTMyYWJm/YThjNGRjMzc2MjA2/LmpwZw",
    companyName: "Amazon",
    posted: "5 days ago",
    jobTitle: "Senior UI/UX Designer",
    jobType: ["Part-time", "Senior-level"],
    salary: "$120/hr",
    location: "Mumbai, India",
  },
  {
    id: 2,
    companyLogo: "https://cdn-icons-png.flaticon.com/512/732/732221.png",
    companyName: "Google",
    posted: "2 days ago",
    jobTitle: "Frontend Developer",
    jobType: ["Full-time", "Mid-level"],
    salary: "$90/hr",
    location: "Bangalore, India",
  },
  {
    id: 3,
    companyLogo: "https://cdn-icons-png.flaticon.com/512/888/888879.png",
    companyName: "Microsoft",
    posted: "1 week ago",
    jobTitle: "Backend Engineer",
    jobType: ["Remote", "Junior-level"],
    salary: "$75/hr",
    location: "Pune, India",
  },
  {
    id: 4,
    companyLogo: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
    companyName: "LinkedIn",
    posted: "3 days ago",
    jobTitle: "Product Manager",
    jobType: ["Full-time", "Senior-level"],
    salary: "$130/hr",
    location: "Hyderabad, India",
  },
  {
    id: 5,
    companyLogo: "https://cdn-icons-png.flaticon.com/512/888/888841.png",
    companyName: "Facebook",
    posted: "1 day ago",
    jobTitle: "Mobile App Developer",
    jobType: ["Remote", "Mid-level"],
    salary: "$100/hr",
    location: "Chennai, India",
  },
  {
    id: 6,
    companyLogo: "https://cdn-icons-png.flaticon.com/512/732/732251.png",
    companyName: "Apple",
    posted: "5 hours ago",
    jobTitle: "UI Designer",
    jobType: ["Full-time", "Junior-level"],
    salary: "$95/hr",
    location: "Bangalore, India",
  },
  {
    id: 7,
    companyLogo: "https://cdn-icons-png.flaticon.com/512/888/888840.png",
    companyName: "Netflix",
    posted: "2 weeks ago",
    jobTitle: "DevOps Engineer",
    jobType: ["Full-time", "Senior-level"],
    salary: "$150/hr",
    location: "Mumbai, India",
  },
  {
    id: 8,
    companyLogo: "https://cdn-icons-png.flaticon.com/512/174/174884.png",
    companyName: "Twitter",
    posted: "6 days ago",
    jobTitle: "Frontend React Developer",
    jobType: ["Part-time", "Mid-level"],
    salary: "$110/hr",
    location: "Pune, India",
  },
  {
    id: 9,
    companyLogo: "https://cdn-icons-png.flaticon.com/512/888/888847.png",
    companyName: "Adobe",
    posted: "4 days ago",
    jobTitle: "Graphic Designer",
    jobType: ["Remote", "Junior-level"],
    salary: "$80/hr",
    location: "Hyderabad, India",
  },
  {
    id: 10,
    companyLogo: "https://cdn-icons-png.flaticon.com/512/888/888848.png",
    companyName: "Spotify",
    posted: "3 hours ago",
    jobTitle: "Software Engineer",
    jobType: ["Full-time", "Mid-level"],
    salary: "$120/hr",
    location: "Bangalore, India",
  },
];


  return (
    <div className='h-screen w-full  flex items-center justify-evenly flex-wrap mr-3'>
        {arr.map(function(job){
              
              return (<Card 
                  key={job.id}
                  companyLogo={job.companyLogo}
                  companyName={job.companyName}
                  posted={job.posted}
                  jobTitle={job.jobTitle}
                  jobType={job.jobType}
                  salary={job.salary}
                  location={job.location}
              />)
        })}
    </div>
  )
}

export default App
