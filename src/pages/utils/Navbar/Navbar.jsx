import React, { useState } from 'react';

const NavBar = () => {
    const [active, setActive] = useState('Home');

    const navItems = [
        { label: 'Home', key: 'Home' },
        { label: 'Course', key: 'Course' },
        { label: 'Blog', key: 'Blog' },
        { label: 'About', key: 'About' },
    ];

    return (
        <div className="NavBar h-[48px] flex items-center justify-center space-x-6">
            {navItems.map((item) => (
                <button
                    key={item.key}
                    onClick={() => setActive(item.key)}
                    className={`text-xl font-['Microsoft Sans Serif'] px-4 py-1  transition-colors duration-200
            ${active === item.key
                            ? 'text-[#cf5768] border-b-2 border-[#cf5768]'
                            : 'text-[#788183] hover:text-[#cf5768]'
                        }`}
                >
                    {item.label}
                </button>
            ))}
        </div>
    );
};

export default NavBar;