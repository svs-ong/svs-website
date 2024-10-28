'use client';
import React from 'react';

enum RoutePaths {
  Home = '/',
  Projects = '/projects',
  AboutUs = '/about',
  RedirectTax = '/redirect-tax',
  JoinUs = '/join',
}

interface NavItem {
  label: string;
  href: RoutePaths;
  variant: 'text' | 'outlined';
}

const NavConfig: NavItem[] = [
  { label: 'Acasa', href: RoutePaths.Home, variant: 'text' },
  { label: 'Proiecte', href: RoutePaths.Projects, variant: 'text' },
  { label: 'Despre noi', href: RoutePaths.AboutUs, variant: 'text' },
  { label: 'Redirectioneaza 3.5%', href: RoutePaths.RedirectTax, variant: 'text' },
  { label: 'Join Us', href: RoutePaths.JoinUs, variant: 'outlined' },
];

export default NavConfig;
