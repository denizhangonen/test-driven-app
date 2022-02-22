import { fireEvent, render, screen } from '@testing-library/react';
import Counter from '../Counter';

import '@testing-library/jest-dom/extend-expect';

test('renders a title', () => {
  render(<Counter />);
  const titleEl = screen.getByTestId('title');

  expect(titleEl.textContent).toBe('Counter');
});

test('renders a counter with initial text 0', () => {
  render(<Counter />);
  const counterEl = screen.getByTestId('counter');

  expect(counterEl.textContent).toBe('0');
});

test('renders a btn with text -', () => {
  render(<Counter />);
  const btnSubstractEl = screen.getByTestId('btn-substract');

  expect(btnSubstractEl.textContent).toBe('-');
});

test('renders a btn with text +', () => {
  render(<Counter />);
  const btnSubstractEl = screen.getByTestId('btn-add');

  expect(btnSubstractEl.textContent).toBe('+');
});

test('renders an input element with initial text 1', () => {
  render(<Counter />);
  const inputEl = screen.getByTestId('input') as HTMLInputElement;

  expect(inputEl.value).toBe('1');
});

test('should update input value when onchange is triggered', () => {
  render(<Counter />);
  const inputEl = screen.getByTestId('input') as HTMLInputElement;

  fireEvent.change(inputEl, { target: { value: '88' } });
  expect(inputEl.value).toBe('88');
});

test('should add input value to counter when add button is clicked', () => {
  render(<Counter />);
  const btnAddEl = screen.getByTestId('btn-add');
  const counterEl = screen.getByTestId('counter');

  fireEvent.click(btnAddEl);
  expect(counterEl.textContent).toBe('1');
});

test('should subtract input value from counter when subtract button is clicked', () => {
  render(<Counter />);
  const btnSubstractEl = screen.getByTestId('btn-substract');
  const counterEl = screen.getByTestId('counter');

  fireEvent.click(btnSubstractEl);

  expect(counterEl.textContent).toBe('-1');
});

test('should display the correct result after some manipulations', () => {
  render(<Counter />);
  const btnSubstractEl = screen.getByTestId('btn-substract');
  const btnAddEl = screen.getByTestId('btn-add');
  const inputEl = screen.getByTestId('input') as HTMLInputElement;
  const counterEl = screen.getByTestId('counter');

  fireEvent.change(inputEl, { target: { value: 100 } });
  expect(inputEl.value).toBe('100');

  fireEvent.click(btnAddEl);
  expect(counterEl.textContent).toBe('100');

  fireEvent.click(btnAddEl);
  fireEvent.click(btnAddEl);
  fireEvent.click(btnAddEl);
  fireEvent.change(inputEl, { target: { value: 50 } });
  fireEvent.click(btnAddEl);
  fireEvent.click(btnSubstractEl);
  fireEvent.click(btnSubstractEl);
  fireEvent.click(btnSubstractEl);
  expect(counterEl.textContent).toBe('300');
});

test('should contain success class when counter is equal or greater than 100', () => {
  render(<Counter />);
  const counterEl = screen.getByTestId('counter');
  const inputEl = screen.getByTestId('input');
  const btnAddEl = screen.getByTestId('btn-add');

  fireEvent.change(inputEl, { target: { value: '101' } });
  fireEvent.click(btnAddEl);
  // screen.getByRole('');
  expect(counterEl.className).toBe('success');
});

test('should contain danger class when counter is equal or less than -100', () => {
  render(<Counter />);
  const counterEl = screen.getByTestId('counter');
  const inputEl = screen.getByTestId('input');
  const btnSubstractEl = screen.getByTestId('btn-substract');

  fireEvent.change(inputEl, { target: { value: '101' } });
  fireEvent.click(btnSubstractEl);

  expect(counterEl.className).toBe('danger');
});
