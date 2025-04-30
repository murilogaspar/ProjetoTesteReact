'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils'; // opcional, pra facilitar classes condicionais

export default function Menu() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  const links = [
    { name: 'Início', href: '/' },
    { name: 'Servidor', href: '/servidor' },
    { name: 'Estabelecimento Penal', href: '/estabelecimentopenal' },
    { name: 'Defensoria', href: '/defensoria' },
    { name: 'Assistido', href: '/Assistido' },
    { name: 'Inspeção Carcerária', href: '/inspecaocarceraria' },
  ];

  return (
    <aside
      className={cn(
        'h-screen bg-gray-900 text-white flex flex-col transition-all duration-300',
        collapsed ? 'w-16' : 'w-64'
      )}
    >
      <div className="p-4 flex justify-between items-center">
        {!collapsed && <span className="text-lg font-bold">Menu</span>}
        <button onClick={() => setCollapsed(!collapsed)} className="text-sm">
          {collapsed ? '→' : '←'}
        </button>
      </div>

      <nav className="flex-1 px-2 space-y-2">
        {Array.isArray(links) && links.map((link, index) => (
          link?.href && link?.name ? (
            <Link
              key={`${link.href}-${index}`}
              href={link.href}
              className={cn(
                'block px-4 py-2 rounded hover:bg-gray-700 transition',
                pathname === link.href ? 'bg-gray-700' : ''
              )}
            >
              {link.name}
            </Link>
          ) : null
        ))}
      </nav>
    </aside>
  );
}




/*

'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils'; // opcional, pra facilitar classes condicionais


export default function Menu() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  const links = [
  { name: 'Início', href: '/' },
  { name: 'Servidor', href: '/servidor' },
  { name: 'Estabelecimento Penal', href: '/estabelecimentopenal' },
  { name: 'Defensoria', href: '/defensoria' },
  { name: 'Assistido', href: '/assistido' },
  { name: 'Inspeção Carcerária', href: '/inspecaocarceraria' },
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
  {Array.isArray(links) && links.map((link, index) => (
    link?.href && link?.label ? (
      <Link key={`${link.href}-${index}`} href={link.href}>
        {link.label}
      </Link>
    ) : null
  ))}
</nav>

      

    


    </aside>
  );
}










<nav className="flex-1 px-2">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              'block px-4 py-2 rounded ',
              pathname === link.href ? 'bg-gray-300een-700 font-semibold ' : ''
            )}
          >
            {!collapsed ? link.name : link.name[0]}
          </Link>
        ))}
      </nav>
*/