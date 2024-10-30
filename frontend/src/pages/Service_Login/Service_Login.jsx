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
import { login } from '../../features/login/loginSlice'
import { useDispatch, useSelector } from 'react-redux'

const Service_Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const toast = useToast()
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    try {
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
      dispatch(
        login({
          email,
          password,
          type: 'Client',
        })
      )
      toast({
        title: 'Logged in Successfully!',
        status: 'success',
        duration: 5000,
        isClosable: true,
      })
      navigate('/')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <Box display={'flex'}>
      <Image
        h={'100vh'}
        w={'70%'}
        src='https://www.investopedia.com/thmb/ToB9SX1bs4Of7be0ez0slhSC5yA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/layers-of-contemporary-financial-skyscrapers-in-central-business-district--hong-kong-818362142-a6a8866d862c46beb196309eb9dbb1e5.jpg'
      />
      <Box
        w={'30%'}
        display={'flex'}
        flexDirection={'column'}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <Heading
          mb={'2rem'}
          letterSpacing={'.25rem'}
        >
          LOGIN
        </Heading>
        <Box mb={'1rem'}>
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
              borderColor: 'black',
            }}
          />
        </Box>
        <Box mb={'2rem'}>
          <Text pb={1}>Password</Text>
          <Input
            type='password'
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
              borderColor: 'black',
            }}
          />
        </Box>
        <Button
          bg={'#020336'}
          color={'white'}
          type={'submit'}
          ml={'40%'}
          onClick={handleSubmit}
        >
          Login
        </Button>
        <Text
          position={'absolute'}
          bottom={0}
          mb={'1rem'}
          mt={'1rem'}
        >
          {`Don't`} have an account?
          <Link
            to={'/register'}
            color='#020336'
          >
            Register.
          </Link>
        </Text>
      </Box>
    </Box>
  )
}

export default Service_Login
