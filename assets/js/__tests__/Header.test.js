import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header component', () => {
  it('should render the PawPalace logo', () => {
    render(<Header />);
    const logo = screen.getByAltText('PawPalace');
    expect(logo).toBeInTheDocument();
  });

  it('should render the navigation links', () => {
    render(<Header />);
    const navigationLinks = screen.getAllByRole('link');
    expect(navigationLinks.length).toBe(6);
  });

  it('should render the social media icons', () => {
    render(<Header />);
    const socialMediaIcons = screen.getAllByRole('img');
    expect(socialMediaIcons.length).toBe(3);
  });

  it('should toggle the navbar menu when the nav-toggle-btn is clicked', () => {
    render(<Header />);
    const navToggleBtn = screen.getByLabelText('toggle manu');
    userEvent.click(navToggleBtn);
    const navbar = screen.getByRole('navigation');
    expect(navbar).toHaveClass('active');
  });
});
