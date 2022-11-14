import { Box, Flex, Image } from '@chakra-ui/react';

export default function Home() {
  return (
    <Flex>
      <Box
        position="fixed"
        _after={{
          content: '""',
          display: 'block',
          pos: 'absolute',
          top: '0',
          left: '0',
          zIndex: '0',
          height: '100%',
          width: '100%',
          bg: 'rgba(139,0,0, 0.52)',
        }}
        sx={{
          '.content': {
            height: '100vh',
            width: '100vw',
            objectFit: 'cover',
          },
        }}>
        <video autoPlay muted loop className="content">
          <source className="content" src="/file.mp4" type="video/mp4" />
        </video>
      </Box>
      <Flex zIndex="10" p="2rem 2rem" w="100vw">
        <Image src="Neo.webp" />
      </Flex>
    </Flex>
  );
}
