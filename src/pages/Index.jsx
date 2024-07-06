import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Index = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    const trackingUrl = `https://t.17track.net/zh-cn#nums=${inputValue}`;
    window.location.href = trackingUrl;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center space-y-4">
      <h1 className="text-4xl font-bold">Welcome to Your App</h1>
      <p className="text-lg text-muted-foreground">
        This is your starting point. Modify and build upon this structure.
      </p>
      <Input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        placeholder="Enter tracking number..."
        className="w-1/2"
      />
      <Button variant="primary" size="lg" onClick={handleSubmit}>
        Confirm
      </Button>
    </div>
  );
};

export default Index;