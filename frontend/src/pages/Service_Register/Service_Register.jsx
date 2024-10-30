import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  Box,
  Heading,
  Text,
  Image,
  Input,
  Button,
  useToast,
} from '@chakra-ui/react'
import { register } from '../../features/register/registerSlice'
import { useDispatch, useSelector } from 'react-redux'

const Service_Register = () => {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [address, setAddress] = useState('')
  const [aadhar, setAadhar] = useState('')
  const [personal, setPersonal] = useState('')
  const [family, setFamily] = useState('')
  const toast = useToast()
  const dispatch = useDispatch()
  const { isSuccess } = useSelector((state) => state.register)

  useEffect(() => {
    if (isSuccess) {
      toast({
        title: 'Registered Successfully!',
        status: 'success',
        duration: 5000,
        isClosable: true,
      })
      console.log('sdas')
      navigate('/login')
    }
  }, [isSuccess, navigate, toast])

  const handleSubmit = () => {
    try {
      setName(name.trim())
      setEmail(email.trim())
      if (name === '') {
        toast({
          title: 'Name is empty',
          status: 'error',
          duration: 5000,
          isClosable: true,
        })
        return
      }
      if (email === '') {
        toast({
          title: 'Email is empty',
          status: 'error',
          duration: 5000,
          isClosable: true,
        })
        return
      }
      if (password === '') {
        toast({
          title: 'Password is empty',
          status: 'error',
          duration: 5000,
          isClosable: true,
        })
        return
      }
      if (confirmPassword === '') {
        toast({
          title: 'Confirm Password is empty',
          status: 'error',
          duration: 5000,
          isClosable: true,
        })
        return
      }
      if (password !== confirmPassword) {
        toast({
          title: 'Password and Confirm Password Do Not Match',
          status: 'error',
          duration: 5000,
          isClosable: true,
        })
        return
      }

      if (address === '') {
        toast({
          title: 'Address is empty',
          status: 'error',
          duration: 5000,
          isClosable: true,
        })
        return
      }
      if (aadhar === '') {
        toast({
          title: 'Aadhar is empty',
          status: 'error',
          duration: 5000,
          isClosable: true,
        })
        return
      }
      if (personal === '') {
        toast({
          title: 'Personal Phone Number is empty',
          status: 'error',
          duration: 5000,
          isClosable: true,
        })
        return
      }
      if (family === '') {
        toast({
          title: 'Family Phone Number is empty',
          status: 'error',
          duration: 5000,
          isClosable: true,
        })
        return
      }
      dispatch(
        register({
          name,
          email,
          password,
          type: 'Client',
          address,
          aadhar,
          personal,
          family,
        })
      )
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <Box display={'flex'}>
      <Image
        h={'140vh'}
        w={'65%'}
        src='https://www.investopedia.com/thmb/ToB9SX1bs4Of7be0ez0slhSC5yA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/layers-of-contemporary-financial-skyscrapers-in-central-business-district--hong-kong-818362142-a6a8866d862c46beb196309eb9dbb1e5.jpg'
      />
      <Box
        w={'35%'}
        display={'flex'}
        flexDirection={'column'}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <Heading
          mb={'2rem'}
          letterSpacing={'.25rem'}
        >
          REGISTER
        </Heading>
        <Box mb={'2rem'}>
          <Text pb={1}>Name</Text>
          <Input
            type='text'
            w={'17rem'}
            border={'none'}
            borderRadius={0}
            borderBottom={'2px'}
            value={name}
            onChange={(e) => setName(e.target.value)}
            _focus={{
              outline: 'none',
              boxShadow: 'none',
              backgroundColor: '#e8e6e6',
              borderColor: 'black',
            }}
          />
        </Box>
        <Box mb={'2rem'}>
          <Text pb={1}>Email</Text>
          <Input
            type='email'
            w={'17rem'}
            border={'none'}
            borderRadius={0}
            borderBottom={'2px'}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            _focus={{
              outline: 'none',
              boxShadow: 'none',
              backgroundColor: '#e8e6e6',
              borderColor: 'black',
            }}
          />
        </Box>
        <Box mb={'2rem'}>
          <Text pb={1}>Password</Text>
          <Input
            type='password'
            w={'17rem'}
            border={'none'}
            borderRadius={0}
            borderBottom={'2px'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            _focus={{
              outline: 'none',
              boxShadow: 'none',
              backgroundColor: '#e8e6e6',
              borderColor: 'black',
            }}
          />
        </Box>
        <Box mb={'2rem'}>
          <Text pb={1}>Confirm Password</Text>
          <Input
            type='password'
            w={'17rem'}
            border={'none'}
            borderRadius={0}
            borderBottom={'2px'}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            _focus={{
              outline: 'none',
              boxShadow: 'none',
              backgroundColor: '#e8e6e6',
              borderColor: 'black',
            }}
          />
        </Box>
        <Box mb={'2rem'}>
          <Text pb={1}>Address</Text>
          <Input
            type='text'
            w={'17rem'}
            border={'none'}
            borderRadius={0}
            borderBottom={'2px'}
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            _focus={{
              outline: 'none',
              boxShadow: 'none',
              backgroundColor: '#e8e6e6',
              borderColor: 'black',
            }}
          />
        </Box>
        <Box mb={'2rem'}>
          <Text pb={1}>Aadhar</Text>
          <Input
            type='number'
            w={'17rem'}
            border={'none'}
            borderRadius={0}
            borderBottom={'2px'}
            value={aadhar}
            onChange={(e) => setAadhar(e.target.value)}
            _focus={{
              outline: 'none',
              boxShadow: 'none',
              backgroundColor: '#e8e6e6',
              borderColor: 'black',
            }}
          />
        </Box>
        <Box mb={'2rem'}>
          <Text pb={1}>Personal Contact Number</Text>
          <Input
            type='number'
            w={'17rem'}
            border={'none'}
            borderRadius={0}
            borderBottom={'2px'}
            value={personal}
            onChange={(e) => setPersonal(e.target.value)}
            _focus={{
              outline: 'none',
              boxShadow: 'none',
              backgroundColor: '#e8e6e6',
              borderColor: 'black',
            }}
          />
        </Box>
        <Box mb={'2rem'}>
          <Text pb={1}>Family Contact Number</Text>
          <Input
            type='number'
            w={'17rem'}
            border={'none'}
            borderRadius={0}
            borderBottom={'2px'}
            value={family}
            onChange={(e) => setFamily(e.target.value)}
            _focus={{
              outline: 'none',
              boxShadow: 'none',
              backgroundColor: '#e8e6e6',
              borderColor: 'black',
            }}
          />
        </Box>
        <Button
          bg={'#020336'}
          color={'white'}
          ml={'40%'}
          onClick={handleSubmit}
        >
          Register
        </Button>
        <Text
          position={'absolute'}
          bottom={0}
          mb={'1rem'}
        >
          Already have an account?{' '}
          <Link
            to={'/login'}
            color='#020336'
          >
            Login.
          </Link>
        </Text>
      </Box>
    </Box>
  )
}

export default Service_Register
