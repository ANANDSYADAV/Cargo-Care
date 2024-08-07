import { Alert, Button, TextInput } from 'flowbite-react';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function DriverProfile() {
    const [imageFile, setImageFile] = useState(null);
    const [imageFileUrl, setImageFileUrl] = useState(null);
    const navigate = useNavigate();

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
            <h1 className='my-7 text-center font-semibold text-3xl'>Driver Profile</h1>
            <form className='flex flex-col gap-4'>
                <input type="file" accept='image/*' onChange={handleImageUpload} ref={filePickerRef} hidden />
                <div className='relative size-32 self-center cursor-pointer shadow-md overflow-hidden rounded-full' onClick={() => filePickerRef.current.click()}>
                    <img
                        src={imageFileUrl || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqafzhnwwYzuOTjTlaYMeQ7hxQLy_Wq8dnQg&s'}
                        alt="user" className='rounded-full size-full object-cover border-8 border-[lightgray]'
                    />
                </div>
                <TextInput type='text' id='username' placeholder='username' defaultValue='Rajan Kumar' />
                <TextInput type='email' id='email' placeholder='email' defaultValue='rkumar@gmail.com' />
                <TextInput type='number' id='idNo' placeholder='ID Number' />
                <TextInput type='number' id='age' placeholder='age' />
                <Button gradientDuoTone='purpleToBlue' outline onClick={() => navigate('/vehicle-profile')}>
                    Update Vehicle Profile
                </Button>
            </form>
        </div>
    )
}

export default DriverProfile