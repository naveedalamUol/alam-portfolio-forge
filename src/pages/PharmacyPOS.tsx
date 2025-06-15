
import { useState } from 'react';
import { DollarSign, Package, ShoppingCart, Users, TrendingUp, Calendar, Settings, ArrowLeft } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import POSSidebar from '@/components/pos/POSSidebar';
import DashboardStats from '@/components/pos/DashboardStats';
import SalesChart from '@/components/pos/SalesChart';
import RecentSales from '@/components/pos/RecentSales';
import { Link } from 'react-router-dom';

const PharmacyPOS = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex">
      <POSSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/" className="flex items-center text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Portfolio
              </Link>
              <div className="w-px h-6 bg-gray-300 dark:bg-gray-600"></div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
                <p className="text-gray-600 dark:text-gray-400">Overview of your store's performance</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>Today</span>
              </Button>
              <Button variant="ghost" size="icon">
                <Settings className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Dashboard Stats */}
            <DashboardStats />

            {/* Charts and Recent Sales */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <SalesChart />
              </div>
              <div>
                <RecentSales />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default PharmacyPOS;
