
import { Header, Footer, Sidebar, DashboardLayout } from "../components"

export default function Dashboard() {
    
    return (<>
        <Header />
        <div className="flex flex-row">
            <Sidebar />
            <DashboardLayout />
        </div>
        <Footer />
    </>

    )
}
