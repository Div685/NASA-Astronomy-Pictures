import {
  render,
} from '@testing-library/react';
import PhotoDesc from '../components/PhotoDesc';

describe('Photo Detail Content', () => {
  it('render Photo Detail Component', () => {
    const mockPhoto = {
      date: 'any',
      title: 'any',
      url: 'any',
      media_type: 'any',
      explanation: 'any',
    };

    render(<PhotoDesc photo={mockPhoto} />);
  });
});
