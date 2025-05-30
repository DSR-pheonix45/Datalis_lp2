import { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { useAuth } from '../../context/AuthContext';
import { Shield, CreditCard, Users, Key, Building2, User, Wallet } from 'lucide-react';
import { 
  ArrowLeft, 
  Save, 
  HelpCircle, 
  UserPlus, 
  Plus 
} from 'lucide-react';
import Sidebar from '../Sidebar/Sidebar';

export default function Settings() {
  const { darkMode } = useTheme();
  const { user } = useAuth();
  const [activeSection, setActiveSection] = useState('account');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [username, setUsername] = useState(user?.user_metadata?.username || user?.email?.split('@')[0] || '');

  const sections = [
    { 
      id: 'account',
      label: 'Account',
      description: 'Update your account settings and preferences',
      icon: User,
      subtitle: 'Manage your personal information and preferences'
    },
    { 
      id: 'billing',
      label: 'Billing',
      description: 'Monitor your subscription and billing details',
      icon: CreditCard,
      subtitle: 'View and manage your subscription plan'
    },
    { 
      id: 'wallet',
      label: 'Wallet',
      description: 'Manage your wallet balance and transactions',
      icon: Wallet,
      subtitle: 'View your balance and transaction history'
    },
    { 
      id: 'organization',
      label: 'Organizations',
      description: 'Manage your organization settings and members',
      icon: Building2,
      subtitle: 'Configure organization preferences and team access'
    }
  ];

  const handleUpdateAccount = async () => {
    setLoading(true);
    try {
      // Add your update logic here
      setMessage('Account updated successfully');
    } catch (error) {
      setMessage('Error: ' + error.message);
    }
    setLoading(false);
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'account':
        return (
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  Profile Information
                </h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Update your personal details and preferences
                </p>
                <div className="mt-6 space-y-6">
                  <div className="grid grid-cols-1 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Display Name
                      </label>
                      <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="mt-1 block w-full rounded-md border-gray-300 
                          shadow-sm focus:border-blue-500 focus:ring-blue-500 
                          dark:bg-gray-700 dark:border-gray-600 dark:text-white
                          sm:text-sm"
                      />
                      <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                        This is the name that will be displayed to other users
                      </p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={user?.email || ''}
                        disabled
                        className="mt-1 block w-full rounded-md border-gray-300 
                          bg-gray-50 dark:bg-gray-600 shadow-sm 
                          dark:text-gray-300 sm:text-sm cursor-not-allowed"
                      />
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <button
                      onClick={handleUpdateAccount}
                      disabled={loading}
                      className="inline-flex justify-center py-2 px-4 border border-transparent 
                        shadow-sm text-sm font-medium rounded-md text-white 
                        bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 
                        focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50
                        disabled:cursor-not-allowed"
                    >
                      {loading ? 'Updating...' : 'Save Changes'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'billing':
        return (
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                      Current Plan
                    </h3>
                    <div className="mt-1 flex items-baseline">
                      <p className="text-2xl font-semibold text-gray-900 dark:text-white">
                        Free
                      </p>
                      <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
                        / month
                      </span>
                    </div>
                  </div>
                  <button 
                    onClick={() => setActiveSection('premium')}
                    className="inline-flex items-center px-4 py-2 border border-transparent 
                      text-sm font-medium rounded-md shadow-sm text-white 
                      bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 
                      focus:ring-offset-2 focus:ring-blue-500"
                  >
                    <CreditCard className="w-4 h-4 mr-2" />
                    Upgrade to Premium
                  </button>
                </div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 px-6 py-4">
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Next billing date: N/A
                </div>
              </div>
            </div>
          </div>
        );

      case 'wallet':
        return (
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  Wallet Balance
                </h3>
                <div className="mt-6">
                  <div className="flex items-baseline">
                    <p className="text-4xl font-bold text-gray-900 dark:text-white">
                      $0.00
                    </p>
                    <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
                      USD
                    </span>
                  </div>
                  <div className="mt-6 flex justify-end">
                    <button className="inline-flex items-center px-4 py-2 border 
                      border-transparent text-sm font-medium rounded-md shadow-sm 
                      text-white bg-blue-600 hover:bg-blue-700 focus:outline-none 
                      focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Add Funds
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Transaction History */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  Transaction History
                </h3>
              </div>
              <div className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400 text-center">
                No transactions yet
              </div>
            </div>
          </div>
        );

      case 'organization':
        return (
          <div className="space-y-6">
            {/* Organization Details */}
            <div className="bg-gray-800 rounded-lg p-6">
              <div className="mb-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-white">Details</h3>
                  <button onClick={() => window.history.back()} className="text-gray-400 hover:text-white">
                    <ArrowLeft className="h-5 w-5" />
                  </button>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">Name</label>
                    <input
                      type="text"
                      value={username}
                      className="w-full bg-gray-900 border border-gray-700 rounded-md px-3 py-2 text-white"
                      disabled
                    />
                  </div>
                  <div className="flex justify-end">
                    <button className="flex items-center px-4 py-2 text-sm text-gray-400 hover:text-white">
                      <Save className="h-4 w-4 mr-2" />
                      Save
                    </button>
                  </div>
                </div>
              </div>

              {/* Manage Users Section */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white">Manage Users</h3>
                  <button className="p-1 rounded-full text-gray-400 hover:bg-gray-700">
                    <HelpCircle className="h-5 w-5" />
                  </button>
                </div>
                <div className="bg-gray-900 rounded-lg">
                  <div className="px-4 py-3 border-b border-gray-700">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-sm font-medium text-gray-400">User Email</div>
                      <div className="text-sm font-medium text-gray-400">Role</div>
                      <div className="text-sm font-medium text-gray-400">Action</div>
                    </div>
                  </div>
                  <div className="px-4 py-3">
                    <div className="grid grid-cols-3 gap-4 items-center">
                      <div className="text-sm text-gray-300">no email for user</div>
                      <div>
                        <select className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-1.5 text-sm text-gray-300">
                          <option>Select role</option>
                          <option>Admin</option>
                          <option>Member</option>
                        </select>
                      </div>
                      <div>
                        <button className="p-1.5 text-gray-400 hover:text-white">
                          <UserPlus className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="mt-4 flex items-center text-sm text-gray-400 hover:text-white">
                  <Plus className="h-4 w-4 mr-2" />
                  Add User
                </button>
              </div>
            </div>

            {/* Subscription Plan Card */}
            <div className="bg-gray-800 rounded-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">Subscription Plan</h3>
                  <p className="text-gray-400">Free</p>
                </div>
                <button className="text-red-400 hover:text-red-300 text-sm font-medium">
                  Delete Organization
                </button>
              </div>
            </div>
          </div>
        );

      case 'premium':
        return (
          <div className="space-y-4">
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-medium text-white mb-4">Premium Features</h3>
              <p className="text-gray-400">Premium features coming soon...</p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="h-screen flex overflow-hidden bg-gray-100 dark:bg-gray-900">
      {/* Sidebar */}
      <div className="hidden md:flex md:flex-shrink-0">
        <div className="w-64 flex flex-col">
          <Sidebar />
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
          <div className="border-b border-gray-200 dark:border-gray-700">
            <div className="px-6 py-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                {sections.find(s => s.id === activeSection)?.label}
              </h2>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                {sections.find(s => s.id === activeSection)?.description}
              </p>
            </div>
            <div className="px-6 -mb-px flex space-x-8">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`group inline-flex items-center pb-4 px-1 border-b-2 font-medium text-sm
                    ${activeSection === section.id
                      ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                >
                  <section.icon 
                    className={`-ml-0.5 mr-2 h-5 w-5 ${
                      activeSection === section.id
                        ? 'text-blue-500'
                        : 'text-gray-400 group-hover:text-gray-500'
                    }`}
                  />
                  {section.label}
                </button>
              ))}
            </div>
          </div>

          <div className="px-6 py-6">
            {message && (
              <div className={`mb-6 rounded-md p-4 ${
                message.includes('error')
                  ? 'bg-red-50 text-red-700 dark:bg-red-900/50'
                  : 'bg-green-50 text-green-700 dark:bg-green-900/50'
              }`}>
                <p className="text-sm">{message}</p>
              </div>
            )}
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
}