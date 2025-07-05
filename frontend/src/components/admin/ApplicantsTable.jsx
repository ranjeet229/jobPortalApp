import { MoreHorizontal } from 'lucide-react'
import React, { use } from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from '../ui/table'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { useSelector } from 'react-redux';

const shortlistingStatus = ["Accepted", "Rejected"];

const ApplicantsTable = () => {
    const { applicants } = useSelector(store => store.application);
    return (
        <div>
            <Table>
                <TableCaption>A list of your recent applied users</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Full Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Contact</TableHead>
                        <TableHead>Resume</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        applicants && applicants?.applications?.map((item) => (
                            <TableRow key={item._id}>
                                <TableCell>{item?.applicant?.fullname}</TableCell>
                                <TableCell>{item?.applicant?.email}</TableCell>
                                <TableCell>{item?.applicant?.phoneNumber}</TableCell>
                                <TableCell>
                                    {
                                        item.applicant?.profile?.resume ? <a href={item?.applicant?.profile?.resumeOriginalName} target='_blank' rel='noopener noreferrer' className='text-blue-500'>{item?.applicant?.profile?.resumeOriginalName}</a> : <span>NA</span>
                                    }
                                    </TableCell>
                                <TableCell>{item?.applicant.createdAt.split("T")[0]}</TableCell>
                                <TableCell className="float-right cursor-pointer">
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <MoreHorizontal className="cursor-pointer" />
                                        </PopoverTrigger>
                                        <PopoverContent className="w-32">
                                            {shortlistingStatus.map((status, index) => (
                                                <div key={index} className="hover:bg-gray-100 px-2 py-1 rounded cursor-pointer">
                                                    <span>{status}</span>
                                                </div>
                                            ))}
                                        </PopoverContent>
                                    </Popover>
                                </TableCell>
                            </TableRow>
                        ))
                    }

                </TableBody>
            </Table>
        </div>
    )
}

export default ApplicantsTable;
