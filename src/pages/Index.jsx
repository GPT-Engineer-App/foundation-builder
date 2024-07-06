import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center space-y-4">
      <h1 className="text-4xl font-bold">Welcome to Your App</h1>
      <p className="text-lg text-muted-foreground">
        This is your starting point. Modify and build upon this structure.
      </p>
      <Button variant="primary" size="lg">Get Started</Button>
    </div>
  );
};

export default Index;