import { useNavigate } from "react-router-dom"
import admin from "../assets/admin.jpg"
const Sidebar = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/");
    }
    return (
        <div className='bg-gray-600 rounded px-4 mr-2 py-4'>
            <div className='flex flex-row'>
                <div className='basis-1/2'>
                    <p className="text-2xl font-bold text-white">Admin</p>
                </div>
                <div className="basis-1/2 avatar online">
                    <div className="w-24 rounded-full">
                        <img className="w-2" src={admin} />
                    </div>
                </div>
            </div>

            <ul className="menu bg-gray-500 w-56 rounded-box mt-4 mb-12">
                <li><a onClick={navigate('/dashboard')}>Reports</a></li>
                <li onClick={navigate('/posts')}><a onClick={navigate('/posts')}>Posts</a></li>
                <li><a onClick={navigate('/dashboard')}>Teams</a></li>
            </ul>
            <div className="mx-12 mb-20">
                <button onClick={handleClick} className="btn btn-error">Logout</button>
            </div>
        </div>
    )
}

export default Sidebar