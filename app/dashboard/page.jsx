'use client';

import { useState, useEffect } from 'react';
import Sidebar from '../components/dashboard/Sidebar';
import TopNavbar from '../components/dashboard/TopNavbar';
import WelcomeHeader from '../components/dashboard/WelcomeHeader';
import StatsCards from '../components/dashboard/StatsCards';
import ProjectsList from '../components/dashboard/ProjectsList';
import ChatsPanel from '../components/dashboard/ChatsPanel';
import AIAssistant from '../components/dashboard/AIAssistant';

export default function DashboardPage() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isChatCollapsed, setIsChatCollapsed] = useState(false);

  // Auto-close chat sidebar after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsChatCollapsed(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Mock user data
  const user = {
    name: 'Benjamin',
    role: 'Freelancer',
    avatar: '👨‍💻',
    status: 'Online'
  };

  return (
    <div className="min-h-screen bg-[#0f0f23] text-white">
      {/* Sidebar */}
      <Sidebar onToggle={setIsCollapsed} />

      {/* Main Content */}
      <div 
        className="transition-all duration-300 ease-in-out min-h-screen"
        style={{ 
          marginLeft: isCollapsed ? '80px' : '256px',
          marginRight: isChatCollapsed ? '80px' : '384px'
        }}
      >
        {/* Top Navbar */}
        <TopNavbar user={user} />

        {/* Main Workspace */}
        <main className="p-8">
          {/* Welcome Header */}
          <WelcomeHeader userName={user.name} />

          {/* Stats Cards */}
          <StatsCards />

          {/* Projects Section */}
          <ProjectsList />
        </main>
      </div>

      {/* Chats Panel - Auto-closes after 3 seconds, user can reopen */}
      <ChatsPanel isOpen={!isChatCollapsed} onToggle={setIsChatCollapsed} />

      {/* AI Assistant Widget */}
      <AIAssistant />
    </div>
  );
}
