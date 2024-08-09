"use client";

import { Alert, Button, Label, TextInput, Timeline } from "flowbite-react";
import { useState } from "react";

import { FaLocationDot } from "react-icons/fa6";
import { HiArrowNarrowRight } from "react-icons/hi";

export default function StartJourney() {
    const [cardShow, setCardShow] = useState(false);
    const [currentLocation, setCurrentLocation] = useState(null);
    const [destination, setDestination] = useState(null);
    const [temperature, setTemperature] = useState(false);
    const [buttonClicked, setButtonClicked] = useState(false);

    if (temperature) {
        setTimeout(() => {
            setTemperature(false);
        }, 5000);
    }

    return (
        <div className={`min-h-screen ${cardShow ? '' : 'flex justify-center'} my-8`}>
            {!cardShow ?
                (<form className="flex max-w-md flex-col gap-5 w-[90%]">
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="startLocation" value="Your Location" />
                        </div>
                        <TextInput id="startLocation" type="text" required shadow onChange={(e) => setCurrentLocation(e.target.value)} />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="destination" value="Desired Destination" />
                        </div>
                        <TextInput id="destination" type="text" required shadow onChange={(e) => setDestination(e.target.value)} />
                    </div>
                    <Button onClick={() => setCardShow(true)}>Click to Start</Button>
                </form>) :
                (
                    <>
                        <div className="text-center mt-5 text-xl font-mono text-red-600 font-semibold border-y-2">Current Journey
                            <p className="text-green-600">From</p>
                            <p className="text-slate-600">Delhi to Mumbai</p>
                        </div>
                        <Timeline className="w-[90%] mx-auto mt-8 font-semibold flex justify-center">
                            <div >
                                <Timeline.Item
                                    title='Delhi'
                                    description={`Distance: 0 km`}
                                    icon={HiArrowNarrowRight}
                                    className="flex items-center gap-2"
                                >
                                    <Timeline.Point />
                                    <Timeline.Content>
                                        <Timeline.Time className="text-pink-500">10 AM, August 7 </Timeline.Time>
                                        <Timeline.Title className="flex items-center gap-2"><FaLocationDot /> Delhi</Timeline.Title>
                                        <Timeline.Body className="text-yellow-700">
                                            <div>Distance Travelled: 0 km</div>
                                            <div>Temperature: 25 °C</div>
                                            <div>Real Feel: 22 °C</div>
                                            <div>Cargo Temperature: 20 °C</div>
                                            <div>Recommended Temperature: 10 °C</div>
                                            {!buttonClicked &&
                                                <Button className="mt-4" onClick={() => {
                                                    setTemperature(true);
                                                    setButtonClicked(true);
                                                }}>Update Temperature</Button>
                                            }
                                        </Timeline.Body>
                                    </Timeline.Content>
                                </Timeline.Item >
                                {temperature &&
                                    <Alert color="info">
                                        <span className="font-medium">Temperature has been updated successfully</span>
                                    </Alert>
                                }
                            </div>
                        </Timeline>
                    </>
                )
            }
        </div>
    );
}