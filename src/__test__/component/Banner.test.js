import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Banner from '../../components/Banner';

describe('Routes Component', () => {
  it('renders Routes page correctly', () => {
    const tree = renderer.create(<Banner />);
    expect(tree).toMatchSnapshot();
  });
});

describe('Test Routes Component for NavBar Links', () => {
  it('it test the home page', () => {
    render(<Banner />);
    expect(screen.getByRole('heading')).toHaveTextContent('Welcome to AstroSplash');
  });
});
