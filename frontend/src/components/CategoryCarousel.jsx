
import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'
import { Button } from './ui/button'

const category = [
    "Data Science",
    "Backend Developer",
    "Fronted Developer",
    "FullStack Developer",
    "Graphic Designer",
    "UI/UX Developer",
    "Mobile App Developer",
    "DevOps Engineer",
    "Cloud Engineer",
    "AI/ML Engineer",
    "Game Developer"
]

const CategoryCarousel = () => {
    return (
        <div>
            <Carousel className="w-full max-w-xl mx-auto my-20">
                <CarouselContent>
                    {
                        category.map((cat, index) => (
                            <CarouselItem className="md:basis-1/2 lg-basis-1/3">
                                <Button
                                    key={index}
                                    variant="outline"
                                    className="rounded-full hover:bg-black hover:text-white transition-colors duration-300"
                                >
                                    {cat}
                                </Button>
                            </CarouselItem>
                        ))
                    }
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}

export default CategoryCarousel