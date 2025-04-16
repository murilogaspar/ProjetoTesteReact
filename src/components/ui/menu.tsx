'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils'; // opcional, pra facilitar classes condicionais

export default function Menu() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  const links = [
    { name: 'Inicio', href: '/' },
    { name: 'Servidor', href: '/' },
    { name: 'Estabelecimento Penal', href: '/' },
    { name: 'Defensoria', href: '/' },
    { name: 'Assistido', href: '/' },
    { name: 'Inspeção Carcerária', href: '/' },
    { name: 'Processo', href: '/' },
   
  ];

  return (
    <aside
      className={cn(
        'h-screen bg-gray-900 text-white flex flex-col transition-all duration-300 ',
        collapsed ? 'w-16' : 'w-64'
      )}
    >
      <div className="p-4 flex justify-between items-center ">
        {!collapsed && <span className="text-lg font-bold"></span>}
        <button onClick={() => setCollapsed(!collapsed)} className="text-sm">
          {collapsed ? '→' : '←'}
        </button>
      </div>

      <nav className="flex-1 px-2">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              'block px-4 py-2 rounded ',
              pathname === link.href ? 'bg-gray-300een-700 font-semibold hover:bg-gray-800 hover:shadow-lg' : ''
            )}
          >
            {!collapsed ? link.name : link.name[0]}
          </Link>
        ))}
      </nav>


    


    </aside>
  );
}