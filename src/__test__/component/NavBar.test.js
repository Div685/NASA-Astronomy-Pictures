import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import NavBar from '../../components/NavBar';
import '@testing-library/jest-dom';

describe('NavBar Component', () => {
  it('renders NavBar page correctly', () => {
    const tree = renderer.create(<NavBar />);
    expect(tree).toMatchSnapshot();
  });
});

describe('Test for NavBar component', () => {
  it('test the heading of nav component', () => {
    render(<NavBar />);
    expect(screen.getByRole('heading')).toHaveTextContent('AstroSplash');
  });
});
