import React, { useState, useRef, useEffect } from 'react';

interface ApproachPageProps {
  onNavigate?: (path: string) => void;
  currentPage?: string;
}

interface JobListing {
  id: number;
  title: string;
  location: string;
  department: string;
}

const ApproachPage: React.FC<ApproachPageProps> = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('All Categories');
  const [selectedLocation, setSelectedLocation] = useState('All Locations');
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  
  const categoryRef = useRef<HTMLDivElement>(null);
  const locationRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (categoryRef.current && !categoryRef.current.contains(event.target as Node)) {
        setShowCategoryDropdown(false);
      }
      if (locationRef.current && !locationRef.current.contains(event.target as Node)) {
        setShowLocationDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const departments = [
    'All Categories',
    'Finance',
    'Marketing',
    'Engineering',
    'Human Resources'
  ];

  const locations = [
    'All Locations',
    'London, United Kingdom',
    'New York, USA',
    'Singapore',
    'Remote'
  ];

  const jobListings: JobListing[] = [
    {
      id: 1,
      title: "Associate Budget Manager",
      location: "London, United Kingdom",
      department: "Finance"
    },
    {
      id: 2,
      title: "Associate Budget Manager",
      location: "London, United Kingdom",
      department: "Finance"
    },
    {
      id: 3,
      title: "Associate Budget Manager",
      location: "London, United Kingdom",
      department: "Finance"
    },
    {
      id: 4,
      title: "Associate Budget Manager",
      location: "London, United Kingdom",
      department: "Finance"
    },
    {
      id: 5,
      title: "Associate Budget Manager",
      location: "London, United Kingdom",
      department: "Finance"
    },
    {
      id: 6,
      title: "Associate Budget Manager",
      location: "London, United Kingdom",
      department: "Finance"
    }
  ];

  const filteredJobs = jobListings.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDepartment = selectedDepartment === 'All Categories' || job.department === selectedDepartment;
    const matchesLocation = selectedLocation === 'All Locations' || job.location === selectedLocation;
    return matchesSearch && matchesDepartment && matchesLocation;
  });

  return (
    <div className="approach-page w-full">
      {/* Hero Section with Search */}
      <section className="relative min-h-[450px] w-full flex items-center justify-center text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-indigo-900 z-0">
          <img 
            src="/about/background.png" 
            alt="Career Background" 
            className="w-full h-full object-cover object-center opacity-50"
          />
        </div>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 py-16 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Invest In Your Career <span className="text-blue-400">GROW</span> With Tech's<br />
            Top Talent.
          </h1>
          
          {/* Search Bar */}
          <div className="bg-white rounded-md shadow-md p-0 max-w-4xl mx-auto mt-8 flex flex-col md:flex-row overflow-visible">
            <div className="flex items-center border-b md:border-b-0 md:border-r p-3 md:p-4 md:w-1/3">
              <svg className="w-5 h-5 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
              <input
                type="text"
                placeholder="Search Job"
                className="w-full outline-none border-none text-gray-600"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div ref={categoryRef} className="relative flex items-center justify-between border-b md:border-b-0 md:border-r p-3 md:p-4 md:w-1/3">
              <div 
                className="flex justify-between items-center w-full cursor-pointer"
                onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
              >
                <div className="text-gray-600">{selectedDepartment}</div>
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
              
              {showCategoryDropdown && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded shadow-lg z-[9999] max-h-60 overflow-y-auto">
                  {departments.map((dept, index) => (
                    <div 
                      key={index} 
                      className="p-3 hover:bg-gray-100 cursor-pointer text-left text-gray-800"
                      onClick={() => {
                        setSelectedDepartment(dept);
                        setShowCategoryDropdown(false);
                      }}
                    >
                      {dept}
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            <div ref={locationRef} className="relative flex items-center justify-between p-3 md:p-4 md:w-1/3">
              <div 
                className="flex justify-between items-center w-full cursor-pointer"
                onClick={() => setShowLocationDropdown(!showLocationDropdown)}
              >
                <div className="text-gray-600">{selectedLocation}</div>
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
              
              {showLocationDropdown && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded shadow-lg z-[9999] max-h-60 overflow-y-auto">
                  {locations.map((loc, index) => (
                    <div 
                      key={index} 
                      className="p-3 hover:bg-gray-100 cursor-pointer text-left text-gray-800"
                      onClick={() => {
                        setSelectedLocation(loc);
                        setShowLocationDropdown(false);
                      }}
                    >
                      {loc}
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-4 px-8 whitespace-nowrap">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-8 md:px-16 lg:px-24 max-w-7xl">
          {/* Remove blue categories bar */}
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-6">
            {filteredJobs.map(job => (
              <div key={job.id} className="bg-white p-6 pt-6 pb-12 rounded-sm shadow-sm border border-gray-200 relative min-h-[150px] mx-auto w-full">
                <h3 className="text-xl font-bold mb-2">{job.title}</h3>
                <p className="text-gray-600">{job.location}</p>
                <a 
                  href="#" 
                  className="absolute bottom-6 right-6 text-blue-600 bg-blue-100 rounded-full p-2 hover:bg-blue-200 transition-all"
                >
                  <svg 
                    className="w-5 h-5" 
                    viewBox="0 0 20 20" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      d="M10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17Z" 
                      stroke="currentColor" 
                      strokeWidth="1.5" 
                      strokeMiterlimit="10"
                    />
                    <path 
                      d="M8.5 13L11.5 10L8.5 7" 
                      stroke="currentColor" 
                      strokeWidth="1.5" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            ))}
          </div>

          {/* See All Open Roles Button */}
          <div className="text-center mt-12 mb-8">
            <a 
              href="#" 
              className="text-blue-600 font-semibold hover:underline relative inline-block"
            >
              See All Open Roles
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600"></span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ApproachPage; 