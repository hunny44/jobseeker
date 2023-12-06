// Simulated job data (replace with your actual job data)
const jobs = [
  { title: 'Web Developer', company: 'TechCo', location: 'Remote' },
  { title: 'Graphic Designer', company: 'Design Firm', location: 'New York' },
  { title: 'Marketing Specialist', company: 'Marketing Agency', location: 'San Francisco' },
   { title: 'Data Anayalist', company: 'TechCo', location: 'Remote' },
  { title: 'Game designer', company: 'Design Firm', location: 'New York' },
  { title: 'Marketing Manager', company: 'Marketing Agency', location: 'San Francisco' },
   { title: 'App developer', company: 'TechCo', location: 'Remote' },
  { title: 'VFX Editor', company: 'Design Firm', location: 'New York' },
  { title: 'Software Developer', company: 'Marketing Agency', location: 'San Francisco' },
   { title: 'Linux Operator', company: 'TechCo', location: 'Remote' },
  { title: 'UI/UX Designer', company: 'Design Firm', location: 'New York' },
  { title: 'Accountant', company: 'Marketing Agency', location: 'San Francisco' },
  // Add more job objects as needed
];

function displayJobs(jobList) {
  const jobListings = document.getElementById('jobListings');
  jobListings.innerHTML = '';

  jobList.forEach(job => {
    const jobCard = document.createElement('div');
    jobCard.classList.add('job-card');
    jobCard.innerHTML = `
      <h2>${job.title}</h2>
      <p><strong>Company:</strong> ${job.company}</p>
      <p><strong>Location:</strong> ${job.location}</p>
    `;
    jobListings.appendChild(jobCard);
  });
}

function searchJobs() {
  const searchTerm = document.getElementById('searchInput').value.toLowerCase();
  const filteredJobs = jobs.filter(job => {
    return job.title.toLowerCase().includes(searchTerm) ||
           job.company.toLowerCase().includes(searchTerm) ||
           job.location.toLowerCase().includes(searchTerm);
  });

  displayJobs(filteredJobs);
}

// Display all jobs initially
displayJobs(jobs);
