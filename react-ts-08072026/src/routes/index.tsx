import { createFileRoute } from "@tanstack/react-router"
import MainLayout from "../layouts/MainLayout"
import HomePage from "../pages/HomePage"


export const Route = createFileRoute()({
  component: () => (
    <MainLayout>
      <HomePage />
    </MainLayout>
  ),
})