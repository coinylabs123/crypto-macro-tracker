import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface ErrorDisplayProps {
  title?: string;
  message: string;
}

const ErrorDisplay = ({ 
  title = "Error Loading Widget", 
  message 
}: ErrorDisplayProps) => {
  return (
    <Alert variant="destructive" className="mb-6">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  );
};

export default ErrorDisplay;
