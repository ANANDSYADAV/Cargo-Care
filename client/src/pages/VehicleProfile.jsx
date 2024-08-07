import { Alert, Button, TextInput } from 'flowbite-react';
import { useEffect, useRef, useState } from 'react';

function VehicleProfile() {
    const [imageFile, setImageFile] = useState(null);
    const [imageFileUrl, setImageFileUrl] = useState(null);

    const filePickerRef = useRef();
    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImageFile(e.target.files[0]);
            setImageFileUrl(URL.createObjectURL(file));
        }
    }

    return (
        <div className='max-w-lg mx-auto p-3 w-full'>
            <h1 className='my-7 text-center font-semibold text-3xl'>Vehicle Profile</h1>
            <form className='flex flex-col gap-4'>
                <input type="file" accept='image/*' onChange={handleImageUpload} ref={filePickerRef} hidden />
                <div className='relative size-40 self-center cursor-pointer shadow-md overflow-hidden rounded-full' onClick={() => filePickerRef.current.click()}>
                    <img
                        src={imageFileUrl || 'https://static.vecteezy.com/system/resources/thumbnails/002/544/264/small_2x/cartoon-semi-truck-illustration-vector.jpg'}
                        alt="user" className='rounded-full size-full object-cover border-8 border-[lightgray]'
                    />
                </div>
                <TextInput type='text' id='brand' placeholder='truck brand' />
                <TextInput type='number' id='noPlate' placeholder='number plate' />
                <TextInput type='regNumber' id='regNumber' placeholder='Registration Number' />
                <Button type='submit' gradientDuoTone='purpleToBlue' outline>
                    Update Details
                </Button>
            </form>
        </div>
    )
}

export default VehicleProfile