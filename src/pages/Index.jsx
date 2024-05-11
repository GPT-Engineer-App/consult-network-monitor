import { Container, VStack, Heading, Text, Box, SimpleGrid, Image, Button } from "@chakra-ui/react";
import { FaNetworkWired, FaShieldAlt, FaTasks } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={8}>
      <VStack spacing={8} align="center">
        <Heading as="h1" size="2xl" textAlign="center">
          IT Consulting Services
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Expert solutions in network monitoring, security management, and project management.
        </Text>
        <Image src="https://images.unsplash.com/photo-1536148935331-408321065b18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxJVCUyMGNvbnN1bHRpbmd8ZW58MHx8fHwxNzE1NDQ3ODA1fDA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="lg" />

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} pt={5}>
          <ServiceBox icon={FaNetworkWired} title="Network Monitoring" description="Ensure your network is robust, reliable, and optimized with our comprehensive monitoring solutions." />
          <ServiceBox icon={FaShieldAlt} title="Security Monitoring" description="Protect your digital assets with our advanced security monitoring services." />
          <ServiceBox icon={FaTasks} title="Project Management" description="Deliver your IT projects on time and within budget with our professional project management services." />
        </SimpleGrid>

        <Button colorScheme="blue" size="lg" mt={10}>
          Contact Us
        </Button>
      </VStack>
    </Container>
  );
};

const ServiceBox = ({ icon, title, description }) => {
  return (
    <VStack spacing={4} p={5} boxShadow="md" borderRadius="lg" align="center">
      <Box as={icon} size="3em" />
      <Text fontWeight="bold" fontSize="xl">
        {title}
      </Text>
      <Text textAlign="center">{description}</Text>
    </VStack>
  );
};

export default Index;
