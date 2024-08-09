import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function SignIn() {
    const [formData, setFormData] = useState({});
    const [errorMessage, setErrorMessage] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.email || !formData.password) {
            return setErrorMessage('Please fill out all the fields');
        }
        try {
            setLoading(true);
            setErrorMessage(null);
            const res = await fetch('http://localhost:5000/api/users/signin', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            const data = await res.json();
            if (data.success === false) {
                setErrorMessage(data.message);
            } else {
                // Navigate to dashboard or home page on successful sign-in
                navigate('/');
            }
            setLoading(false);
        } catch (error) {
            setErrorMessage('An error occurred');
            setLoading(false);
        }
    };

    return (
        <div className='h-screen mt-20'>
            <div className='flex p-3 max-w-3xl mx-auto flex-col gap-5 md:flex-row md:items-center'>
                {/* Left */}
                <div className='flex-1'>
                    <div className='flex flex-col items-center'>
                        <span><img src="/logo.png" alt="logo.img" className='h-[130px] w-[250px]' /></span>
                        <p className='text-md mt-5 font-serif font-semibold'>
                            Sign in with your email and password.
                        </p>
                    </div>
                </div>

                {/* Right */}
                <div className='flex-1'>
                    <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
                        <div>
                            <Label value='Your email' />
                            <TextInput
                                type='email'
                                placeholder='name@company.com'
                                id='email'
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <Label value='Your password' />
                            <TextInput
                                type='password'
                                placeholder='**********'
                                id='password'
                                onChange={handleChange}
                                autoComplete='on'
                            />
                        </div>
                        <Button gradientDuoTone='purpleToPink' type='submit' disabled={loading}>
                            {
                                loading ? (
                                    <>
                                        <Spinner size='sm' />
                                        <span className='pl-3'>Loading...</span>
                                    </>
                                ) : ('Sign In')
                            }
                        </Button>
                    </form>
                    <div className='flex gap-2 mt-5 text-sm'>
                        <span>Don't have an account?</span>
                        <Link to='/signup' className='text-blue-600'>
                            Sign Up
                        </Link>
                    </div>

                    {
                        errorMessage && (
                            <Alert className='mt-5' color='failure'>
                                {errorMessage}
                            </Alert>
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default SignIn;