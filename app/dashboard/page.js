"use client"
import React, { useState } from 'react';
import { Lightbulb, Clock, CheckCircle, Plus, FileText, MessageSquare, Bell } from 'lucide-react';

const UserDashboard = () => {
    const [selectedIdea, setSelectedIdea] = useState(null);
    const [showNotifications, setShowNotifications] = useState(false);

    // Mock data for demonstration
    const ideas = [
        { id: 1, title: "Eco-friendly Packaging", submissionDate: "2024-09-15", status: "Pending", lastResponse: "2024-09-16" },
        { id: 2, title: "AI-powered Customer Service", submissionDate: "2024-09-10", status: "In Review", lastResponse: "2024-09-14" },
        { id: 3, title: "Virtual Team Building Platform", submissionDate: "2024-09-05", status: "Solved", lastResponse: "2024-09-12" },
    ];

    const notifications = [
        { id: 1, message: "New response on 'Eco-friendly Packaging'", time: "2 hours ago" },
        { id: 2, message: "Status update: 'AI-powered Customer Service' is now In Review", time: "1 day ago" },
    ];

    const conversations = [
        { id: 1, ideaId: 1, user: "You", message: "Here's my idea for eco-friendly packaging...", timestamp: "2024-09-15 10:00" },
        { id: 2, ideaId: 1, user: "Manager", message: "Great idea! Can you provide more details on materials?", timestamp: "2024-09-16 14:30" },
    ];

    return (
        <div className="bg-gray-100 min-h-screen">
            {/* Header */}
            <header className="bg-white shadow-md p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-gray-800">Idea Management Dashboard</h1>
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

            {/* Main Content */}
            <main className="container mx-auto p-4">
                {/* Overview Section */}
                <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <div className="bg-blue-100 p-4 rounded-lg flex items-center">
                        <Lightbulb className="text-blue-500 mr-4" size={32} />
                        <div>
                            <p className="text-sm text-gray-600">Total Submitted Ideas</p>
                            <p className="text-2xl font-bold text-gray-800">{ideas.length}</p>
                        </div>
                    </div>
                    <div className="bg-yellow-100 p-4 rounded-lg flex items-center">
                        <Clock className="text-yellow-500 mr-4" size={32} />
                        <div>
                            <p className="text-sm text-gray-600">Pending Ideas</p>
                            <p className="text-2xl font-bold text-gray-800">{ideas.filter(idea => idea.status === "Pending").length}</p>
                        </div>
                    </div>
                    <div className="bg-green-100 p-4 rounded-lg flex items-center">
                        <CheckCircle className="text-green-500 mr-4" size={32} />
                        <div>
                            <p className="text-sm text-gray-600">Solved Ideas</p>
                            <p className="text-2xl font-bold text-gray-800">{ideas.filter(idea => idea.status === "Solved").length}</p>
                        </div>
                    </div>
                </section>

                {/* Idea Submission Section */}
                <section className="mb-8">
                    <button className="bg-blue-500 text-white px-6 py-3 rounded-lg flex items-center hover:bg-blue-600 transition duration-300">
                        <Plus size={20} className="mr-2" />
                        Submit New Idea
                    </button>
                </section>

                {/* Idea List Section */}
                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-4">Your Ideas</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {ideas.map(idea => (
                            <div key={idea.id} className="bg-white p-4 rounded-lg shadow">
                                <h3 className="font-semibold mb-2">{idea.title}</h3>
                                <p className="text-sm text-gray-600 mb-2">Submitted: {idea.submissionDate}</p>
                                <p className="text-sm mb-2">
                                    Status: <span className={`font-semibold ${idea.status === "Pending" ? "text-yellow-500" :
                                        idea.status === "In Review" ? "text-blue-500" :
                                            "text-green-500"
                                        }`}>{idea.status}</span>
                                </p>
                                <p className="text-sm text-gray-600 mb-4">Last Response: {idea.lastResponse}</p>
                                <button
                                    onClick={() => setSelectedIdea(idea.id)}
                                    className="bg-gray-100 text-gray-800 px-4 py-2 rounded flex items-center hover:bg-gray-200 transition duration-300"
                                >
                                    <MessageSquare size={16} className="mr-2" />
                                    View Thread
                                </button>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Threaded Conversation Section */}
                {selectedIdea && (
                    <section className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-4">Conversation Thread</h2>
                        <div className="mb-6">
                            {conversations
                                .filter(conv => conv.ideaId === selectedIdea)
                                .map(conv => (
                                    <div key={conv.id} className={`mb-4 ${conv.user === "You" ? "text-right" : ""}`}>
                                        <p className="font-semibold">{conv.user}</p>
                                        <p className="bg-gray-100 inline-block p-3 rounded-lg">{conv.message}</p>
                                        <p className="text-xs text-gray-500 mt-1">{conv.timestamp}</p>
                                    </div>
                                ))
                            }
                        </div>
                        <div>
                            <textarea
                                className="w-full p-3 border rounded-lg mb-2"
                                placeholder="Type your reply here..."
                                rows="3"
                            ></textarea>
                            <div className="flex justify-between items-center">
                                <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded flex items-center hover:bg-gray-300 transition duration-300">
                                    <FileText size={16} className="mr-2" />
                                    Upload Document
                                </button>
                                <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition duration-300">
                                    Send Reply
                                </button>
                            </div>
                        </div>
                    </section>
                )}
            </main>
        </div>
    );
};

export default UserDashboard;