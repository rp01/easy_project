"use client"
import React, { useState } from 'react';
import { Users, Lightbulb, BarChart2, Settings, Menu, X, Search, Edit2, PlusCircle, Bell } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const AdminDashboard = () => {
    const [activePage, setActivePage] = useState('dashboard');
    const [showNotifications, setShowNotifications] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(true);

    // Mock data for demonstration
    const overviewData = {
        totalUsers: 1250,
        totalIdeas: 3750,
        activeManagers: 25,
        solvedIdeas: 2800,
        pendingIdeas: 950,
    };

    const submissionTrends = [
        { name: 'Jan', submissions: 120 },
        { name: 'Feb', submissions: 150 },
        { name: 'Mar', submissions: 200 },
        { name: 'Apr', submissions: 180 },
        { name: 'May', submissions: 220 },
        { name: 'Jun', submissions: 250 },
    ];

    const ideas = [
        { id: 1, title: "AI-powered Customer Service", userName: "John Doe", submissionDate: "2024-09-15", status: "Pending", assignedManager: "Alice Smith" },
        { id: 2, title: "Eco-friendly Packaging", userName: "Jane Smith", submissionDate: "2024-09-10", status: "In Review", assignedManager: "Bob Johnson" },
        { id: 3, title: "Virtual Team Building Platform", userName: "Mike Brown", submissionDate: "2024-09-05", status: "Solved", assignedManager: "Carol White" },
    ];

    const users = [
        { id: 1, name: "John Doe", email: "john@example.com", totalSubmissions: 5, activeIdeas: 2 },
        { id: 2, name: "Jane Smith", email: "jane@example.com", totalSubmissions: 3, activeIdeas: 1 },
        { id: 3, name: "Mike Brown", email: "mike@example.com", totalSubmissions: 7, activeIdeas: 3 },
    ];

    const notifications = [
        { id: 1, message: "Spike in user submissions detected", time: "2 hours ago" },
        { id: 2, message: "Manager Alice Smith has 10+ pending ideas", time: "1 day ago" },
    ];

    return (
        <div className="bg-gray-100 min-h-screen flex">
            {/* Sidebar */}
            <aside className={`bg-gray-800 text-white w-64 min-h-screen p-4 ${sidebarOpen ? '' : 'hidden'}`}>
                <nav>
                    <h2 className="text-2xl font-semibold mb-6">Admin Panel</h2>
                    <ul>
                        <li className="mb-4">
                            <button
                                onClick={() => setActivePage('dashboard')}
                                className={`flex items-center w-full p-2 rounded ${activePage === 'dashboard' ? 'bg-gray-700' : 'hover:bg-gray-700'}`}
                            >
                                <BarChart2 className="mr-2" size={20} />
                                Dashboard
                            </button>
                        </li>
                        <li className="mb-4">
                            <button
                                onClick={() => setActivePage('users')}
                                className={`flex items-center w-full p-2 rounded ${activePage === 'users' ? 'bg-gray-700' : 'hover:bg-gray-700'}`}
                            >
                                <Users className="mr-2" size={20} />
                                Users
                            </button>
                        </li>
                        <li className="mb-4">
                            <button
                                onClick={() => setActivePage('ideas')}
                                className={`flex items-center w-full p-2 rounded ${activePage === 'ideas' ? 'bg-gray-700' : 'hover:bg-gray-700'}`}
                            >
                                <Lightbulb className="mr-2" size={20} />
                                Ideas
                            </button>
                        </li>
                        <li className="mb-4">
                            <button
                                onClick={() => setActivePage('reports')}
                                className={`flex items-center w-full p-2 rounded ${activePage === 'reports' ? 'bg-gray-700' : 'hover:bg-gray-700'}`}
                            >
                                <BarChart2 className="mr-2" size={20} />
                                Reports
                            </button>
                        </li>
                        <li className="mb-4">
                            <button
                                onClick={() => setActivePage('settings')}
                                className={`flex items-center w-full p-2 rounded ${activePage === 'settings' ? 'bg-gray-700' : 'hover:bg-gray-700'}`}
                            >
                                <Settings className="mr-2" size={20} />
                                Settings
                            </button>
                        </li>
                    </ul>
                </nav>
            </aside>

            {/* Main Content */}
            <div className="flex-1">
                {/* Header */}
                <header className="bg-white shadow-md p-4">
                    <div className="flex justify-between items-center">
                        <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-gray-500 hover:text-gray-700">
                            {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                        <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
                        <div className="relative">
                            <button
                                onClick={() => setShowNotifications(!showNotifications)}
                                className="text-gray-600 hover:text-gray-800"
                            >
                                <Bell size={24} />
                            </button>
                            {showNotifications && (
                                <div className="absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg overflow-hidden z-20">
                                    {notifications.map((notif) => (
                                        <div key={notif.id} className="p-4 hover:bg-gray-100">
                                            <p className="text-sm text-gray-800">{notif.message}</p>
                                            <p className="text-xs text-gray-500 mt-1">{notif.time}</p>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </header>

                {/* Page Content */}
                <main className="p-6">
                    {activePage === 'dashboard' && (
                        <div>
                            <h2 className="text-2xl font-semibold mb-6">Dashboard Overview</h2>
                            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
                                <div className="bg-white p-4 rounded-lg shadow flex items-center">
                                    <Users className="text-blue-500 mr-4" size={32} />
                                    <div>
                                        <p className="text-sm text-gray-600">Total Users</p>
                                        <p className="text-2xl font-bold text-gray-800">{overviewData.totalUsers}</p>
                                    </div>
                                </div>
                                <div className="bg-white p-4 rounded-lg shadow flex items-center">
                                    <Lightbulb className="text-yellow-500 mr-4" size={32} />
                                    <div>
                                        <p className="text-sm text-gray-600">Total Ideas</p>
                                        <p className="text-2xl font-bold text-gray-800">{overviewData.totalIdeas}</p>
                                    </div>
                                </div>
                                {/* ... Other stat boxes ... */}
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow">
                                <h3 className="text-xl font-semibold mb-4">Submission Trends</h3>
                                <ResponsiveContainer width="100%" height={300}>
                                    <LineChart data={submissionTrends}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="name" />
                                        <YAxis />
                                        <Tooltip />
                                        <Line type="monotone" dataKey="submissions" stroke="#8884d8" />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    )}

                    {activePage === 'users' && (
                        <div>
                            <h2 className="text-2xl font-semibold mb-6">User Management</h2>
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <div className="flex justify-between items-center mb-4">
                                    <input
                                        type="text"
                                        placeholder="Search users..."
                                        className="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                                        Add New User
                                    </button>
                                </div>
                                <table className="min-w-full">
                                    <thead>
                                        <tr>
                                            <th className="text-left py-2">User Name</th>
                                            <th className="text-left py-2">Email</th>
                                            <th className="text-left py-2">Total Submissions</th>
                                            <th className="text-left py-2">Active Ideas</th>
                                            <th className="text-left py-2">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {users.map(user => (
                                            <tr key={user.id} className="border-t">
                                                <td className="py-2">{user.name}</td>
                                                <td className="py-2">{user.email}</td>
                                                <td className="py-2">{user.totalSubmissions}</td>
                                                <td className="py-2">{user.activeIdeas}</td>
                                                <td className="py-2">
                                                    <button className="text-blue-500 hover:text-blue-700 mr-2">
                                                        Edit
                                                    </button>
                                                    <button className="text-red-500 hover:text-red-700">
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}

                    {activePage === 'ideas' && (
                        <div>
                            <h2 className="text-2xl font-semibold mb-6">Idea Management</h2>
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <div className="flex justify-between items-center mb-4">
                                    <input
                                        type="text"
                                        placeholder="Search ideas..."
                                        className="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                <table className="min-w-full">
                                    <thead>
                                        <tr>
                                            <th className="text-left py-2">Idea Title</th>
                                            <th className="text-left py-2">User Name</th>
                                            <th className="text-left py-2">Submission Date</th>
                                            <th className="text-left py-2">Status</th>
                                            <th className="text-left py-2">Assigned Manager</th>
                                            <th className="text-left py-2">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {ideas.map(idea => (
                                            <tr key={idea.id} className="border-t">
                                                <td className="py-2">{idea.title}</td>
                                                <td className="py-2">{idea.userName}</td>
                                                <td className="py-2">{idea.submissionDate}</td>
                                                <td className="py-2">{idea.status}</td>
                                                <td className="py-2">{idea.assignedManager}</td>
                                                <td className="py-2">
                                                    <button className="text-blue-500 hover:text-blue-700 mr-2">
                                                        Edit
                                                    </button>
                                                    <button className="text-green-500 hover:text-green-700">
                                                        Assign
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}

                    {activePage === 'reports' && (
                        <div>
                            <h2 className="text-2xl font-semibold mb-6">Reports</h2>
                            <p>Reports functionality to be implemented.</p>
                        </div>
                    )}

                    {activePage === 'settings' && (
                        <div>
                            <h2 className="text-2xl font-semibold mb-6">Settings</h2>
                            <p>Settings functionality to be implemented.</p>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
};

export default AdminDashboard;