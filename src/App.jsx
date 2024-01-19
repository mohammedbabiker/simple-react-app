import { useEffect, useState } from 'react'
import { Heading, Text, Button, Container, Center, Highlight } from '@chakra-ui/react'
import './App.css'

function App() {
  const storageKeyName = "count";

  const retrieveCountValue = () => Number(localStorage.getItem(storageKeyName)) || 0;

  const [count, setCount] = useState(retrieveCountValue());

  const addNumber = (count) => setCount(Number(count) + 1);
  // stop number at refresh

  useEffect(() => {
    localStorage.setItem(storageKeyName, String(count));

  }, [count]);

  return (
    <>
      <Container maxW={['full', 'container.lg']}>
        <Center>
          <Heading lineHeight='tall'>
            <Highlight
            query='stranger'
            styles={{px: '2', py: '1', rounded: 'full', bg: 'red.100' }}
            >
              Welcome stranger
            </Highlight>
          </Heading>
        </Center>

        <Center>
          <Text color='tomato' fontSize='lg'>This is React counting app</Text>
        </Center>

        <Center m='4'>
          <Text fontSize='md'fontWeight='bold'>Count Now!</Text>
        </Center>

        <Center>
          <Button colorScheme='teal' variant='solid' onClick={() => addNumber(count)}>
            count is {count}
          </Button>
        </Center>
      </Container>
    </>
  )
}

export default App
