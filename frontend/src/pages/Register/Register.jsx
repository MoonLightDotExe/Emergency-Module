import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Box, Heading, Text, Image, Input, Button } from '@chakra-ui/react'

const Register = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        // registerUser(text, pass)
        if (success) {
            navigate('/user')
        } else {
            navigate('/register')
        }
    }
    return (
        <Box display={'flex'} >
            <Image h={'100vh'} src='https://www.investopedia.com/thmb/ToB9SX1bs4Of7be0ez0slhSC5yA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/layers-of-contemporary-financial-skyscrapers-in-central-business-district--hong-kong-818362142-a6a8866d862c46beb196309eb9dbb1e5.jpg' />
            <Box w={'full'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
                <Heading mb={'1rem'}>Register</Heading>
                {/* <Box mb={'0.5rem'}>
                    <Text pb={1}>Name</Text>
                    <Input
                        type='text'
                        w={'15rem'}
                        border={'none'}
                        borderRadius={0}
                        borderBottom={'2px'}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        _focus={{
                            outline: 'none',
                            boxShadow: 'none',
                            backgroundColor: '#e8e6e6',
                            borderColor: 'black'
                        }} />
                </Box> */}
                <Box mb={'0.5rem'}>
                    <Text pb={1}>Email</Text>
                    <Input
                        type='email'
                        w={'15rem'}
                        border={'none'}
                        borderRadius={0}
                        borderBottom={'2px'}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        _focus={{
                            outline: 'none',
                            boxShadow: 'none',
                            backgroundColor: '#e8e6e6',
                            borderColor: 'black'
                        }} />
                </Box>
                {/* <Box mb={'0.5rem'}>
                    <Text pb={1}>Phone Number</Text>
                    <Input
                        type='number'
                        w={'15rem'}
                        border={'none'}
                        borderRadius={0}
                        borderBottom={'2px'}
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        _focus={{
                            outline: 'none',
                            boxShadow: 'none',
                            backgroundColor: '#e8e6e6',
                            borderColor: 'black'
                        }} />
                </Box> */}
                <Box mb={'0.5rem'}>
                    <Text pb={1}>Password</Text>
                    <Input
                        type='email'
                        w={'15rem'}
                        border={'none'}
                        borderRadius={0}
                        borderBottom={'2px'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        _focus={{
                            outline: 'none',
                            boxShadow: 'none',
                            backgroundColor: '#e8e6e6',
                            borderColor: 'black'
                        }} />
                </Box>
                <Box mb={'2rem'}>
                    <Text pb={1}>Confirm Password</Text>
                    <Input
                        type='password'
                        w={'15rem'}
                        border={'none'}
                        borderRadius={0}
                        borderBottom={'2px'}
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        _focus={{
                            outline: 'none',
                            boxShadow: 'none',
                            backgroundColor: '#e8e6e6',
                            borderColor: 'black'
                        }} />
                </Box>
                <Button bg={'#020336'} color={'white'} type={'submit'} ml={'40%'}>Register</Button>
                <Text position={'absolute'} bottom={0} mb={'1rem'}>Already have an account?  <Link to={'/login'} color='#020336'>Login.</Link></Text>
            </Box>
        </Box>
    )
}

export default Register