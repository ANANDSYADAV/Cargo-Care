import DropDown from '../components/DropDown'

const pathData = [
    { index: 1, Location: 'Delhi', Distance: 0, Temp: 25, realFeel: 22, cargoTemp: 20, recTemp: 10 },
    { index: 2, Location: 'Ghaziabad', Distance: 100, Temp: 23, realFeel: 21, cargoTemp: 16, recTemp: 15 },
    { index: 3, Location: 'Baghpat', Distance: 220, Temp: 28, realFeel: 26, cargoTemp: 15, recTemp: 12 },
    { index: 4, Location: 'Rampur', Distance: 400, Temp: 30, realFeel: 33, cargoTemp: 18, recTemp: 8 },
    { index: 5, Location: 'Saharanpur', Distance: 525, Temp: 29, realFeel: 27, cargoTemp: 10, recTemp: 9 },
    { index: 6, Location: 'Behat', Distance: 700, Temp: 24, realFeel: 24, cargoTemp: 12, recTemp: 12 },
]

export default function Journey() {
    return (
        <div>
            {
                pathData.map((stop) => (
                    <div key={stop.index}>
                        <DropDown stop={stop}/>
                    </div>
                ))
            }
        </div>
    )
}