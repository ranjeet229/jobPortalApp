
import React from 'react'
import Navbar from './shared/Navbar'
import FilterCard from './FilterCard'
import Job from './job';


const jobsArray = [1, 2, 3, 4, 5, 6, 7, 8];

const Jobs = () => {
    return (
        <div>
            <Navbar />
            <div className='max-w-7xl mx-auto mt-5'>
                <div className='flex gap-2'>
                    <div className='w-[15%]'>
                        <FilterCard />
                    </div>
                    {
                        jobsArray.length <= 0 ? <span>Job not found</span> : (
                            <div className='flex-1 h-[88vh] overflow-y-auto pb-5'>
                                <div className='grid grid-cols-3 gap-4'>
                                    {
                                        jobsArray.map((item, index) => (
                                            <div key={index}>
                                                <Job />
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>

        </div>
    )
}

export default Jobs