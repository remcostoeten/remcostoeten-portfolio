import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

const SidebarNav = ({ children }) => {
    return (
        <div className="sidebar">
            <h2 className="sidebar-heading">Code Snippets</h2>
            <nav className="sidebar-nav">
                {children.map((child) => (
                    <ScrollLink key={child.props.id} to={child.props.id} spy={true} smooth={true} offset={-100} duration={500} className="sidebar-link" activeClass="sidebar-link-active">
                        {child.props.children}
                    </ScrollLink>
                ))}
            </nav>
        </div>
    );
};

export default SidebarNav;
