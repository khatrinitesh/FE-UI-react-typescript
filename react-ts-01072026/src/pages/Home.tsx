import { useQuery } from "@tanstack/react-query"

const fetchWelcomeMessage = async () => {
  return "Welcome to the Home Page"
}

export default function Home() {
  const { data, isLoading } = useQuery({
    queryKey: ["welcome-message"],
    queryFn: fetchWelcomeMessage,
  })

  return (
    <div className="homePage">
      <div className="container mx-auto px-4">
      <h1 className="mb-4 text-4xl font-bold">Home Page</h1>

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <p className="text-lg text-gray-600">{data}</p>
      )}
      </div>
    </div>
  )
}
