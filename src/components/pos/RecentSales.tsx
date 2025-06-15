
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const RecentSales = () => {
  const sales = [
    {
      name: 'Olivia Martin',
      email: 'olivia.martin@email.com',
      amount: '+$1,999.00'
    },
    {
      name: 'Jackson Lee',
      email: 'jackson.lee@email.com',
      amount: '+$39.00'
    },
    {
      name: 'Isabella Nguyen',
      email: 'isabella.nguyen@email.com',
      amount: '+$299.00'
    },
    {
      name: 'William Kim',
      email: 'will@email.com',
      amount: '+$99.00'
    },
    {
      name: 'Sofia Davis',
      email: 'sofia.davis@email.com',
      amount: '+$39.00'
    }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Sales</CardTitle>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          You made 265 sales this month.
        </p>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {sales.map((sale, index) => (
            <div key={index} className="flex items-center space-x-4">
              <Avatar className="h-10 w-10">
                <AvatarFallback className="bg-gray-100 dark:bg-gray-800">
                  {sale.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  {sale.name}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {sale.email}
                </p>
              </div>
              <div className="text-sm font-medium text-gray-900 dark:text-white">
                {sale.amount}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentSales;
