'use client';

import { motion } from 'framer-motion';
import { Search, Bell, CalendarDays } from 'lucide-react';
import { useState } from 'react';

export default function TopNavbar({ user }) {
  const [notifications, setNotifications] = useState(3);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-40 bg-[#0f0f23]/80 backdrop-blur-xl border-b border-white/5 px-8 py-4"
    >
      <div className="flex items-center justify-between">
        {/* Search Bar */}
        <div className="flex-1 max-w-xl">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              type="text"
              placeholder="Search projects, clients, or tasks..."
              className="w-full pl-12 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-indigo-500/50 transition text-sm text-gray-300 placeholder:text-gray-500"
            />
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3 ml-8">
          {/* Notification */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative p-2.5 bg-white/5 rounded-lg hover:bg-white/10 transition"
          >
            <Bell className="w-5 h-5 text-gray-400" />
            {notifications > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-indigo-600 text-white text-[10px] rounded-full flex items-center justify-center font-semibold">
                {notifications}
              </span>
            )}
          </motion.button>

          {/* Calendar */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-2.5 bg-white/5 rounded-lg hover:bg-white/10 transition"
          >
            <CalendarDays className="w-5 h-5 text-gray-400" />
          </motion.button>

          {/* User Profile */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 pl-2 pr-4 py-2 bg-white/5 rounded-lg hover:bg-white/10 transition border border-white/10"
          >
            <div className="relative">
              <div className="w-9 h-9 bg-linear-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-lg">
                {user?.avatar || '👤'}
              </div>
              <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-[#0f0f23]"></div>
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold text-white">{user?.name || 'User'}</p>
              <p className="text-xs text-gray-400">{user?.role || 'Freelancer'}</p>
            </div>
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
}
