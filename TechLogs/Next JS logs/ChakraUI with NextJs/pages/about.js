import React from 'react';
import { Container, Box, Center, Button, Heading, Text, Link } from '@chakra-ui/react';

const About = () => {
    return (
        <Container>
            <Center padding="10">
                <Heading>Welcome to About page</Heading>
            </Center>
            <Box padding="10" margin="10" backgroundColor="gray.100" borderRadius="10">
                <Text fontSize="24" _hover="backgroundColor=gray.200">
                    Hello,  I am Shrey Vijayvargiya
                </Text>
                <Text marginTop="2">
                    I am Developer by profession because creating interfaces is my passion,  
                    a Designer by interest because I love ommiting my thoughts using Figma &
                    a Journalist by blood because I constantly share my knowledge and indulge in writing journals for my audiences
                </Text>
            </Box>
            <Center>
                <Button variant="outlined" padding="4" background="blue.500" size="large">
                    <a href="/">
                       Home
                    </a>
                </Button>
            </Center>
        </Container>
    );
};
export default About;
