import React from 'react';
import { Button, Flex, Container, Heading, Box, Link, Image, Divider }  from '@chakra-ui/react';


const App = () => {
    return (
        <Container padding="10" maxW="100%" textAlign="center">
            <Heading>Chakra UI with Next JS</Heading>
            <Box borderBottomWidth="1px" borderColor="black" padding="2" marginTop="4">
                <Button variant="outlined" padding="2" background="green.500" size="large">
                    <a>
                        Read the instructions
                    </a>
                </Button>
            </Box>
            <Flex alignItems="center" justify="space-around">
                <Box bg="blue.200" padding="20" margin="1" shadow="xl" borderRadius="10">
                    <Heading size="xl">Logs Panel</Heading>
                    <br />
                    <Image
                        boxSize="200px"
                        objectFit="cover"
                        margin="auto"
                        src="/logs.jpeg"
                        alt="Logs"
                    />
                    <Box borderBottomWidth="1px" borderTopWidth="1px" borderColor="black" padding="2" marginTop="10">
                        <Button variant="outlined" padding="2" background="blue.500" size="large">
                            <a href="https://www.ihatereading.in/logs">
                                Read Logs
                            </a>
                        </Button>
                    </Box>
                </Box>
                <Box bg="yellow.200" padding="20" margin="1" shadow="xl" borderRadius="10">
                    <Heading size="xl">Creativity Panel</Heading>
                    <br />
                    <Image
                        boxSize="200px"
                        margin="auto"
                        objectFit="cover"
                        src="/creativity.jpeg"
                        alt="Creativity"
                    />
                    <Box borderBottomWidth="1px" borderTopWidth="1px" borderColor="black" padding="2" marginTop="10">
                        <Button variant="outlined" padding="2" background="blue.500" size="large">
                            <a href="https://www.ihatereading.in/creativity">
                                View Creativity
                            </a>
                        </Button>
                    </Box>
                </Box>
                <Box bg="green.200" padding="20" margin="1"  shadow="xl" borderRadius="10">
                    <Heading size="xl">Projects Panel</Heading>
                    <br />
                    <Image
                        boxSize="200px"
                        objectFit="cover"
                        margin="auto"
                        src="/projects.jpeg"
                        alt="Projects"
                    />
                    <Box borderBottomWidth="1px" borderTopWidth="1px" borderColor="black" padding="2" marginTop="10">
                        <Button variant="outlined" padding="2" background="blue.500" size="large">
                            <a href="https://www.ihatereading.in/projects">
                                Show Projects
                            </a>
                        </Button>
                    </Box>
                </Box>
            </Flex>
            <footer style={{ textAlign: 'center', padding: 20 }}>
                Developed by 
                <Link href="https://twitter.com/treyvijay" target="_blank" style={{ marginLeft: 4 }}>
                    Shrey Vijayvargiya
                </Link>
            </footer>
        </Container>
    )
};
export default App;
