"use client";
import { Button, Card } from "flowbite-react";
import { WiDirectionRight } from "react-icons/wi";

function HomeCard({ data }) {
    return (
        <Card
            className="max-w-sm"
            imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
            imgSrc={data.banner}
        >
            <div className="text-center">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {data.text}
                </h5>
            </div>
            <Button className="text-xl font-semibold" gradientDuoTone='redToYellow'>
                <div>Know More</div>
            </Button>
        </Card>
    )
}

export default HomeCard