import { useNavigate } from "react-router";
import Button from "../../components/UI/button/Button"


const NotFoundPage = () => {
    const navigate  = useNavigate();

    const handleBack = () => {
        navigate('/'); // Go back to the home page
    }
  return (
     <div className="notFoundPage h-screen flex items-center flex-col  gap-5 justify-center text-2xl">
      <h1 className="text-2xl bold">404 - Page Not Found</h1>
      <Button onClick={handleBack}>Go Back</Button>
    </div>
  )
}

export default NotFoundPage
