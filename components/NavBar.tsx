import React from 'react';

// Danh sách các mục trên thanh điều hướng
const navItems = [
  { id: 'home', label: 'Trang Chủ' },
  { id: 'report', label: 'Báo Cáo Đồ Án' },
];

interface NavBarProps {
  activeView: string;
  onNavClick: (view: string) => void;
}

export const NavBar: React.FC<NavBarProps> = ({ activeView, onNavClick }) => {
  return (
    <nav className="navbar">
      {navItems.map((item) => (
        <button
          key={item.id}
          className={`nav-button ${activeView === item.id ? 'active' : ''}`}
          onClick={() => onNavClick(item.id)}
        >
          {item.label}
        </button>
      ))}
    </nav>
  );
};