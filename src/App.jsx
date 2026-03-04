import React from 'react'
import Card from './components/Card'
import './index.css'

const App = () => {
  const jobOpenings = [
  {
    brandLogo: "https://static.vecteezy.com/system/resources/previews/013/734/184/original/3d-google-logo-google-is-usa-multinational-corporation-free-vector.jpg",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg",
    companyName: "Apple",
    datePosted: "2 weeks ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$60/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/meta-color.png",
    companyName: "Meta",
    datePosted: "10 days ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$70/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://static.vecteezy.com/system/resources/previews/019/766/223/original/amazon-logo-amazon-icon-transparent-free-png.png",
    companyName: "Amazon",
    datePosted: "1 week ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$50/hr",
    location: "Pune, India"
  },
  {
    brandLogo: "https://images.ctfassets.net/y2ske730sjqp/5QQ9SVIdc1tmkqrtFnG9U1/de758bba0f65dcc1c6bc1f31f161003d/BrandAssets_Logos_02-NSymbol.jpg?w=940",
    companyName: "Netflix",
    datePosted: "3 weeks ago",
    post: "Cloud Engineer",
    tag1: "Contract",
    tag2: "Senior Level",
    pay: "$85/hr",
    location: "Remote, India"
  },
  {
    brandLogo: "https://static.vecteezy.com/system/resources/previews/022/100/812/original/microsoft-logo-transparent-free-png.png",
    companyName: "Microsoft",
    datePosted: "6 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$65/hr",
    location: "Noida, India"
  },
  {
    brandLogo: "https://static1.xdaimages.com/wordpress/wp-content/uploads/2024/09/1024px-adobe_express_logo_rgb_1024px.png",
    companyName: "Adobe",
    datePosted: "4 weeks ago",
    post: "UI Engineer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$40/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://static.vecteezy.com/system/resources/previews/050/816/820/non_2x/uber-transparent-icon-free-png.png",
    companyName: "Uber",
    datePosted: "8 days ago",
    post: "Data Analyst",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$55/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://pngimg.com/uploads/tesla_logo/tesla_logo_PNG19.png",
    companyName: "Tesla",
    datePosted: "2 days ago",
    post: "Software Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$75/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://img.freepik.com/premium-photo/professional-linkedin-logo-social-media-branding_1046319-99339.jpg",
    companyName: "LinkedIn",
    datePosted: "5 weeks ago",
    post: "Backend Developer",
    tag1: "Contract",
    tag2: "Mid Level",
    pay: "$58/hr",
    location: "Gurgaon, India"
  }
];
console.log(jobOpenings);

  return (
    <div className='parent'>
   {jobOpenings.map(function(elem){
    return <Card
    brandLogo={elem.brandLogo}
    companyName={elem.companyName}
    datePosted={elem.datePosted}
    post={elem.post}
    tag1={elem.tag1}
    tag2={elem.tag2}
    pay={elem.pay}
    location={elem.location}
    />
   })}
    </div>
  )
}

export default App
