import { Info } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "./components/ui/alert";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogTitle, AlertDialogTrigger } from "./components/ui/alert-dialog";
import { AspectRatio } from "./components/ui/aspect-ratio";
import { Avatar, AvatarFallback, AvatarImage } from "./components/ui/avatar";
import { Badge } from "./components/ui/badge";
import { Button } from "./components/ui/button";

function App() {
  return (
    <>
      <Button variant="outline" size="lg">
        Apply Now
      </Button>
      <div className="mt-4 flex gap-2">
        <Badge>New</Badge>
        <Badge variant="secondary">In progress</Badge>
        <Badge variant="destructive">Required</Badge>
      </div>
      <div className="mt-4 flex items-center gap-3">
        <Avatar>
          <AvatarImage src="https://i.pravatar.cc/100?img=12" alt="Alex Johnson" />
          <AvatarFallback>AJ</AvatarFallback>
        </Avatar>
        <span className="text-sm font-medium">Alex Johnson</span>
      </div>
      <AspectRatio ratio={16 / 9} className="mt-4 max-w-lg rounded-lg bg-muted">
        <div className="flex h-full items-center justify-center text-sm text-muted-foreground">16:9 Aspect Ratio</div>
      </AspectRatio>
      <Alert className="mt-4 max-w-lg">
        <Info />
        <AlertTitle>Application information</AlertTitle>
        <AlertDescription>Please review your details before submitting the application.</AlertDescription>
      </Alert>
      <AlertDialog>
        <AlertDialogTrigger className="mt-4">Delete application</AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogTitle>Delete this application?</AlertDialogTitle>
          <AlertDialogDescription>This action cannot be undone. The application will be permanently deleted.</AlertDialogDescription>
          <div className="flex justify-end gap-2">
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Delete</AlertDialogAction>
          </div>
        </AlertDialogContent>
      </AlertDialog>
      <Accordion className="mt-4" defaultValue={["item-1"]}>
        <AccordionItem value="item-1">
          <AccordionTrigger>What is this application?</AccordionTrigger>
          <AccordionContent>This application helps you manage and review your information.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>How do I apply?</AccordionTrigger>
          <AccordionContent>Complete the required details and select the Apply Now button.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Can I update my application?</AccordionTrigger>
          <AccordionContent>Yes, you can update your application before submitting it.</AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}

export default App;
