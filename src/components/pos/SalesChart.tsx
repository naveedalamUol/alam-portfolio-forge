
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { useState } from 'react';

const SalesChart = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const data = [
    { month: 'Jan', value: 4500 },
    { month: 'Feb', value: 1400 },
    { month: 'Mar', value: 2900 },
    { month: 'Apr', value: 4300 },
    { month: 'May', value: 5200 },
    { month: 'Jun', value: 2700 },
    { month: 'Jul', value: 6900 },
    { month: 'Aug', value: 3100 },
    { month: 'Sep', value: 7600 },
    { month: 'Oct', value: 3800 },
    { month: 'Nov', value: 3700 },
    { month: 'Dec', value: 3200 }
  ];

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Overview</CardTitle>
          <div className="flex space-x-2">
            <Button
              variant={activeTab === 'overview' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setActiveTab('overview')}
            >
              Overview
            </Button>
            <Button
              variant={activeTab === 'analytics' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setActiveTab('analytics')}
            >
              Analytics
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-gray-200 dark:stroke-gray-700" />
              <XAxis 
                dataKey="month" 
                className="text-gray-600 dark:text-gray-400"
                fontSize={12}
              />
              <YAxis 
                className="text-gray-600 dark:text-gray-400"
                fontSize={12}
                tickFormatter={(value) => `$${value}`}
              />
              <Bar 
                dataKey="value" 
                fill="#3b82f6" 
                radius={[4, 4, 0, 0]}
                className="fill-blue-600 dark:fill-blue-500"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default SalesChart;
