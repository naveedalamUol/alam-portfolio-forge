
import { Card, CardContent } from '@/components/ui/card';
import { DollarSign, ShoppingCart, Users, TrendingUp } from 'lucide-react';

const DashboardStats = () => {
  const stats = [
    {
      title: 'Total Revenue',
      value: '$45,231.89',
      change: '+20.1% from last month',
      icon: DollarSign,
      color: 'text-green-600'
    },
    {
      title: 'Sales',
      value: '+12,234',
      change: '+19% from last month',
      icon: ShoppingCart,
      color: 'text-blue-600'
    },
    {
      title: 'Active Customers',
      value: '+573',
      change: '+201 since last hour',
      icon: Users,
      color: 'text-purple-600'
    },
    {
      title: 'Daily Sales',
      value: '+573',
      change: '+201 since yesterday',
      icon: TrendingUp,
      color: 'text-orange-600'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <Card key={index} className="hover:shadow-md transition-shadow duration-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{stat.title}</p>
                  <div className="flex items-center space-x-2">
                    <Icon className="w-4 h-4 text-gray-400" />
                  </div>
                </div>
                <div className={`p-2 rounded-lg bg-gray-50 dark:bg-gray-800 ${stat.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
              </div>
              <div className="mt-4">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{stat.change}</p>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default DashboardStats;
