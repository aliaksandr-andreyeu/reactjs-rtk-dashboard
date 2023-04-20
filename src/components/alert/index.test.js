import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Alert } from '@components';

describe('Alert component:', () => {
  const message = 'Test Alert component';

  test('Should render', () => {
    const className = 'cmp-alert-tip';
    const { container } = render(<Alert message={message} />);
    const div = container.firstChild;
    expect(div).toHaveClass(className);
  });

  test('Should not render', () => {
    const { container } = render(<Alert />);
    expect(container).toBeEmptyDOMElement();
  });

  test('Should be closed and removed from the DOM', () => {
    const { container } = render(<Alert message={message} />);
    const div = container.firstChild.querySelector('.cmp-close');
    fireEvent.click(div);
    expect(container).toBeEmptyDOMElement();
  });

  test('Should render with a className equal to the variant', () => {
    const className = 'alert-test';
    const { container } = render(<Alert message={message} className={className} />);
    const div = container.firstChild;
    expect(div).toHaveClass(className);
  });

  test('Should render with a message equal to the variant', () => {
    const { container } = render(<Alert message={message} />);
    const div = container.firstChild.querySelector('.cmp-alert');
    expect(div).toHaveTextContent(message);
  });

  test('Should render with a type equal to the success variant', () => {
    const type = 'success';
    const { container } = render(<Alert message={message} type={type} />);
    const div = container.firstChild;
    expect(div).toHaveClass(type);
  });

  test('Should render with a type equal to the warning variant', () => {
    const type = 'warning';
    const { container } = render(<Alert message={message} type={type} />);
    const div = container.firstChild;
    expect(div).toHaveClass(type);
  });

  test('Should render with a type equal to the error variant', () => {
    const type = 'error';
    const { container } = render(<Alert message={message} type={type} />);
    const div = container.firstChild;
    expect(div).toHaveClass(type);
  });
});
