import { Popover } from '@radix-ui/react-popover'
import React from 'react'
import { PopoverContent, PopoverTrigger } from '../ui/popover'
import { Button } from '../ui/button'
import { Avatar, AvatarImage } from '../ui/avatar'
import { User2 } from 'lucide-react'

const Navbar = () => {
    return (
        <div className='bg-white'>
            <div className='flex items-center justify-between mx-auto max-w-7xl h-16 px-4'>
                <div>
                    <h1 className='text-2xl font-bold'>
                        Job<span className='text-blue-500'>Portal</span>
                    </h1>
                </div>
                <div className='flex items-center gap-12'>
                    <ul className='flex font-medium items-center gap-5'>
                        <li>Home</li>
                        <li>Jobs</li>
                        <li>Browse</li>
                    </ul>

                    <Popover>
                        <PopoverTrigger asChild>
                            <Avatar className="cursor-pointer">
                                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                            </Avatar>
                        </PopoverTrigger>

                        <PopoverContent className="w-80 space-y-4">
                            <div className='flex gap-4 items-center'>
                                <Avatar className="cursor-pointer">
                                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                </Avatar>
                                <div>
                                    <h4 className='font-medium'>Ranjeet Kumar</h4>
                                    <p className='text-sm text-muted-foreground'>Lorem ipsum dolor sit amet.</p>
                                </div>
                            </div>
                            <div className='flex flex-col gap-2 text-gray-600'>
                                <div>
                                    <Button variant="link" className="justify-start p-0 text-gray-500 hover:text-gray-700 cursor-pointer">
                                        View Profile
                                    </Button>
                                </div>
                                <div>
                                    <Button variant="link" className="justify-start p-0 text-gray-500 hover:text-gray-700 cursor-pointer">
                                        Logout
                                    </Button>
                                </div>
                            </div>
                        </PopoverContent>
                    </Popover>
                </div>
            </div>
        </div>
    )
}

export default Navbar
