"use client";
import { Timeline } from "flowbite-react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { FaLocationDot } from "react-icons/fa6";

const pathData = [
    { index: 1, Time: '10 AM', Location: 'Delhi', Distance: 0, Temp: 25, realFeel: 22, cargoTemp: 20, recTemp: 10 },
    { index: 2, Time: '11 AM', Location: 'Ghaziabad', Distance: 100, Temp: 23, realFeel: 21, cargoTemp: 16, recTemp: 15 },
    { index: 3, Time: '11:40 AM', Location: 'Baghpat', Distance: 220, Temp: 28, realFeel: 26, cargoTemp: 15, recTemp: 12 },
    { index: 4, Time: '12:30 PM', Location: 'Rampur', Distance: 400, Temp: 30, realFeel: 33, cargoTemp: 18, recTemp: 8 },
    { index: 5, Time: '1:50 PM', Location: 'Saharanpur', Distance: 525, Temp: 29, realFeel: 27, cargoTemp: 10, recTemp: 9 },
    { index: 6, Time: '3PM', Location: 'Behat', Distance: 700, Temp: 24, realFeel: 24, cargoTemp: 12, recTemp: 12 },
];

export default function LastJourney() {
    return (
        <div>
            <div className="text-center mt-5 text-xl font-mono text-indigo-600 font-semibold border-y-2">Last Journey Details</div>
            <Timeline className="w-[90%] mx-auto mt-8 font-semibold">
                {
                    pathData.map((stop) => (
                        <div key={stop.index}>
                            <Timeline.Item
                                title={stop.Location}
                                description={`Distance: ${stop.Distance} km`}
                                icon={HiArrowNarrowRight}
                                className="flex items-center gap-2"
                            >
                                <Timeline.Point />
                                <Timeline.Content>
                                    <Timeline.Time className="text-pink-500">{stop.Time}, August 7 </Timeline.Time>
                                    <Timeline.Title className="flex items-center gap-2"><FaLocationDot /> {stop.Location}</Timeline.Title>
                                    <Timeline.Body className="text-yellow-700">
                                        <div>Distance Travelled: {stop.Distance} km</div>
                                        <div>Temperature: {stop.Temp} °C</div>
                                        <div>Real Feel: {stop.realFeel} °C</div>
                                        <div>Cargo Temperature: {stop.cargoTemp} °C</div>
                                        <div>Recommended Temperature: {stop.recTemp} °C</div>
                                    </Timeline.Body>
                                </Timeline.Content>
                            </Timeline.Item >
                        </div>
                    ))
                }
            </Timeline>
        </div>
    );
}