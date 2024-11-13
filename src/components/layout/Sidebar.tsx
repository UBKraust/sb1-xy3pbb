import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard,
  Users,
  Calendar,
  FileText,
  Settings,
  HelpCircle,
  ChevronRight,
  Menu,
  X
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const navigation = [
  { 
    name: 'Dashboard', 
    href: '/dashboard', 
    icon: LayoutDashboard,
    items: [
      { name: 'Overview', href: '/dashboard' },
      { name: 'Analytics', href: '/dashboard/analytics' },
      { name: 'Reports', href: '/dashboard/reports' }
    ]
  },
  { 
    name: 'Patients', 
    href: '/patients', 
    icon: Users,
    items: [
      { name: 'All Patients', href: '/patients' },
      { name: 'Add Patient', href: '/patients/new' },
      { name: 'Groups', href: '/patients/groups' }
    ]
  },
  { 
    name: 'Appointments', 
    href: '/appointments', 
    icon: Calendar,
    items: [
      { name: 'Calendar', href: '/appointments' },
      { name: 'Schedule', href: '/appointments/schedule' }
    ]
  },
  { 
    name: 'Documents', 
    href: '/documents', 
    icon: FileText,
    items: [
      { name: 'All Documents', href: '/documents' },
      { name: 'Upload', href: '/documents/upload' }
    ]
  }
];

const secondaryNavigation = [
  { name: 'Settings', href: '/settings', icon: Settings },
  { name: 'Help', href: '/help', icon: HelpCircle }
];

export function Sidebar() {
  const { logout } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleExpand = (name: string) => {
    setExpandedItems(prev => 
      prev.includes(name) 
        ? prev.filter(item => item !== name)
        : [...prev, name]
    );
  };

  const NavItem = ({ item, isNested = false }: { item: any; isNested?: boolean }) => {
    const hasSubItems = item.items && item.items.length > 0;
    const isExpanded = expandedItems.includes(item.name);

    return (
      <>
        <div className={`${isNested ? 'ml-6' : ''}`}>
          {hasSubItems ? (
            <button
              onClick={() => toggleExpand(item.name)}
              className={`flex items-center w-full px-4 py-2 text-sm font-medium rounded-lg transition-colors
                ${isExpanded ? 'bg-rose-50 text-rose-600' : 'text-gray-700 hover:bg-gray-50'}`}
            >
              {item.icon && <item.icon className="h-5 w-5 mr-3" />}
              <span className="flex-1">{item.name}</span>
              <ChevronRight className={`h-4 w-4 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
            </button>
          ) : (
            <NavLink
              to={item.href}
              className={({ isActive }) =>
                `flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  isActive
                    ? 'bg-rose-50 text-rose-600'
                    : 'text-gray-700 hover:bg-gray-50'
                }`
              }
            >
              {item.icon && <item.icon className="h-5 w-5 mr-3" />}
              {item.name}
            </NavLink>
          )}
        </div>
        {hasSubItems && isExpanded && (
          <div className="mt-1">
            {item.items.map((subItem: any) => (
              <NavItem key={subItem.name} item={subItem} isNested />
            ))}
          </div>
        )}
      </>
    );
  };

  const SidebarContent = () => (
    <div className="flex flex-col flex-grow">
      <div className="flex items-center justify-between h-16 px-4">
        <span className="text-2xl font-bold text-rose-600">OncoLink</span>
        <button
          className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-500"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <X className="h-6 w-6" />
        </button>
      </div>

      <nav className="flex-1 px-3 pb-4 space-y-1 mt-6">
        {navigation.map((item) => (
          <NavItem key={item.name} item={item} />
        ))}

        <div className="pt-4 mt-4 border-t border-gray-200">
          {secondaryNavigation.map((item) => (
            <NavItem key={item.name} item={item} />
          ))}
        </div>
      </nav>

      <div className="p-4 border-t border-gray-200">
        <button
          onClick={logout}
          className="w-full px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200"
        >
          Log out
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile menu button */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-md text-gray-400 hover:text-gray-500"
        onClick={() => setIsMobileMenuOpen(true)}
      >
        <Menu className="h-6 w-6" />
      </button>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="relative flex flex-col w-80 max-w-xs bg-white h-full">
            <SidebarContent />
          </div>
        </div>
      )}

      {/* Desktop sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-80 lg:flex-col">
        <div className="flex flex-col flex-grow bg-white border-r border-gray-200">
          <SidebarContent />
        </div>
      </div>
    </>
  );
}