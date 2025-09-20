import React, { useState } from 'react';
import styles from '../styles/slider.module.css';
import { LucideHome, LucideBuilding, LucideUsers, LucideCog, LucideHelpCircle, LucideX } from 'lucide-react';
import Logo from './Logo';

const navItems = [
  { label: 'Hogares', icon: <LucideHome color="#6366f1" />, route: '/home' },
  { label: 'Empresas', icon: <LucideBuilding color="#10b981" />, route: '/empresas' },
  { label: 'Conócenos', icon: <LucideUsers color="#06b6d4" />, route: '/conocenos' },
  { label: 'Servicios', icon: <LucideCog color="#6366f1" />, route: '/servicios' },
  { label: 'Ayuda', icon: <LucideHelpCircle color="#10b981" />, route: '/ayuda' },
];

export default function Slider({ activeRoute, onNavigate }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside className={collapsed ? styles.collapsed : styles.sidebar}>
      <header className={styles.header}>
        <Logo />
        <button className={styles.closeBtn} onClick={() => setCollapsed(!collapsed)}>
          <LucideX color="#f1f5f9" size={24} />
        </button>
      </header>
      <nav className={styles.nav}>
        {navItems.map(item => (
          <button
            key={item.label}
            className={
              `${styles.navItem} ${activeRoute === item.route ? styles.active : ''}`
            }
            onClick={() => onNavigate(item.route)}
            title={item.label}
          >
            <span className={styles.icon}>{item.icon}</span>
            {!collapsed && <span className={styles.text}>{item.label}</span>}
          </button>
        ))}
      </nav>
    </aside>
  );
}
