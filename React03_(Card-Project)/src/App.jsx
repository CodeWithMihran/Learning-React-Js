import Card from './components/Card'

const App = () => {

  const jobs = [
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRURb8n-hmXx9zW6sitSkjYFa7CPekza_sxoA&s",
    company: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$40/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShBu0cnozmDr454aSmHhedZltGVgU8fTfZwA&s",
    company: "Microsoft",
    datePosted: "2 weeks ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$45/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa9Mdeo4S4YXDOaI4Xm53DaaHVlccVG_j7Yg&s",
    company: "Amazon",
    datePosted: "1 week ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$38/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://images.ctfassets.net/y2ske730sjqp/5QQ9SVIdc1tmkqrtFnG9U1/de758bba0f65dcc1c6bc1f31f161003d/BrandAssets_Logos_02-NSymbol.jpg?w=940",
    company: "Netflix",
    datePosted: "10 days ago",
    post: "UI Engineer",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: "$60/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBA5U88jLaKHSI5Mg_grZ6BX-KTmICy-cCQg&s",
    company: "Apple",
    datePosted: "3 weeks ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$55/hr",
    location: "Delhi, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoYMgmPlxU4Yc6_TJI2BvIPYJlSYzNsG3Pfw&s",
    company: "Meta",
    datePosted: "4 days ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$42/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHskTepHx-bsveUjO3MdEMxqtiKwQbikk3nQ&s",
    company: "Adobe",
    datePosted: "2 days ago",
    post: "Frontend Engineer",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: "$48/hr",
    location: "Noida, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAaVqaRb5PoXm1LaNHA-JfQiL_GYi4a0ePaQ&s",
    company: "Uber",
    datePosted: "6 days ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$58/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://static.vecteezy.com/system/resources/thumbnails/020/336/484/small/tesla-logo-tesla-icon-transparent-png-free-vector.jpg",
    company: "Tesla",
    datePosted: "1 month ago",
    post: "Software Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$50/hr",
    location: "Pune, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmrUQkx_L08bqJKeZrZO3uuXQ8IDTtgYIO6Q&s",
    company: "Airbnb",
    datePosted: "3 days ago",
    post: "Frontend Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$44/hr",
    location: "Remote"
  }
];

  return (
    <div className='parent'>
      {jobs.map(function(elem, idx){
        return <div key={idx}> 
        <Card company={elem.company} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} brandLogo={elem.brandLogo} datePosted={elem.datePosted} location={elem.location} />
        </div>
      })}
    </div>
  )
}

export default App
