import { Outlet } from "react-router-dom";
import AppHeader from "../components/AppHeader";
import AppFooter from "../components/AppFooter";

export default function AdminLayout() {
    return (
        <>

            <AppHeader />

            <Outlet />

            <AppFooter />

        </>
    )
}