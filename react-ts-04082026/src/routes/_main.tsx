import { createFileRoute, Outlet } from "@tanstack/react-router";
import { MainLayout } from "../layouts/MainLayout";

export const Route = createFileRoute("/_main")({
  component: MainLayoutRoute,
});

function MainLayoutRoute() {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
}
