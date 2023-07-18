import React from 'react';
import Todo from './Todo';
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'

test('Successfully get one todo', () => {
  const todo = {
    text: 'Component testing',
    done: false
  };
  
  render(<Todo todo={todo} />)

  const textElement = screen.getByText('Component testing');

  expect(textElement).toBeDefined();
});