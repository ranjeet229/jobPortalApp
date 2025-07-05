import { MoreHorizontal } from 'lucide-react'
import React from 'react'
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

const shortlistingStatus = ["Accepted", "Rejected"];

const ApplicantsTable = () => {
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
                    <TableRow>
                        <TableCell>Full Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Contact</TableCell>
                        <TableCell>Resume</TableCell>
                        <TableCell>Date</TableCell>
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
                </TableBody>
            </Table>
        </div>
    )
}

export default ApplicantsTable;
