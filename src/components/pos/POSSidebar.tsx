
import { Package, ShoppingCart, FileText, BarChart3, DollarSign, Users, RotateCcw, User, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface POSSidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const POSSidebar = ({ activeTab, setActiveTab }: POSSidebarProps) => {
  const navigationItems = [
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
    { id: 'products', label: 'Products', icon: Package },
    { id: 'pos', label: 'POS / Cart', icon: ShoppingCart },
    { id: 'orders', label: 'Orders', icon: FileText },
  ];

  const inventoryItems = [
    { id: 'vendors', label: 'Vendors', icon: Users },
    { id: 'returns', label: 'Returns', icon: RotateCcw },
  ];

  const financeItems = [
    { id: 'expenses', label: 'Expenses', icon: DollarSign },
    { id: 'reports', label: 'Reports', icon: FileText },
    { id: 'payments', label: 'Payments', icon: DollarSign },
  ];

  const adminItems = [
    { id: 'customers', label: 'Customers', icon: Users },
    { id: 'user-management', label: 'User Management', icon: User },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const renderNavSection = (title: string, items: typeof navigationItems) => (
    <div className="space-y-1">
      {title && <h3 className="px-3 py-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">{title}</h3>}
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <Button
            key={item.id}
            variant={activeTab === item.id ? 'default' : 'ghost'}
            className="w-full justify-start text-left"
            onClick={() => setActiveTab(item.id)}
          >
            <Icon className="w-4 h-4 mr-3" />
            {item.label}
          </Button>
        );
      })}
    </div>
  );

  return (
    <div className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <Package className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-gray-900 dark:text-white">POS System</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-6 overflow-y-auto">
        {renderNavSection('', navigationItems)}
        {renderNavSection('Inventory', inventoryItems)}
        {renderNavSection('Finance', financeItems)}
        {renderNavSection('Administration', adminItems)}
      </nav>

      {/* User Info */}
      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center">
            <User className="w-4 h-4 text-gray-600 dark:text-gray-300" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-900 dark:text-white">Admin User</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">Admin</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default POSSidebar;
