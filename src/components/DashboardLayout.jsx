import { collection, query, onSnapshot, doc, updateDoc } from "firebase/firestore";
import { db } from '../utils/Firebase';
import { useState, useEffect } from "react";

const DashboardLayout = () => {
    const handleSelect = async (reportId, updatedData) => {
        try {
            console.log("select changed");
            console.log(reportId, updatedData);

            const washingtonRef = doc(db, "Reports", reportId);

            // Set the "capital" field of the city 'DC'
            await updateDoc(washingtonRef, updatedData);
            console.log('Post updated successfully!');
        } catch (error) {
            console.error('Error updating post:', error.message);
        }
    };
    const [reports, setReports] = useState([]);
    //const [status, setStatus] = useState("Not Started");
    useEffect(() => {
        const q = query(collection(db, 'Reports'))
        onSnapshot(q, (querySnapshot) => {
            setReports(querySnapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data(),
                status: doc.data().Status,
            })))
        })
    }, [])
    return (
        <div className="w-full p-2">
            <div className="stats shadow">

                <div className="stat place-items-center">
                    <div className="stat-title">Downloads</div>
                    <div className="stat-value">31K</div>
                    <div className="stat-desc">From January 1st</div>
                </div>

                <div className="stat place-items-center">
                    <div className="stat-title">Users</div>
                    <div className="stat-value text-secondary">4,200</div>
                    <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
                </div>

                <div className="stat place-items-center">
                    <div className="stat-title">New Reports</div>
                    <div className="stat-value">1,200</div>
                    <div className="stat-desc">↗︎ 90 (14%)</div>
                </div>
            </div>
            <div className="flex-end">
                <button type="submit" className="m-2 btn btn-success">Update</button>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    <thead>
                        <tr>
                            <th>UserID</th>
                            <th>Bank</th>
                            <th>District</th>
                            <th>Description</th>
                            <th>Headline</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reports.map((report) => {
                            return (
                                <tr key={report.id} >
                                    <td>{report.data.UserID}</td>
                                    <td>{report.data.Bank}</td>
                                    <td>{report.data.District}</td>
                                    <td>{report.data.Description}</td>
                                    <td>{report.data.Headline}</td>
                                    <td><select onChange={(e) => handleSelect(report.id, { Status: e.target.value })} value={report.data.Status} className="select w-full max-w-xs">
                                        <option value="Not Started">Not Started</option>
                                        <option value="In Progress">In Progress</option>
                                        <option value="Completed">Completed</option>
                                    </select></td>
                                    <td><button className="btn btn-error">Delete</button></td>
                                </tr>
                            );
                        }
                        )}

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default DashboardLayout