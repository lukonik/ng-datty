import { fireEvent, render, screen } from '@testing-library/angular';
import { CounterComponent } from './ng-datty.component';

describe('Counter', () => {
  it('should render counter', async () => {
    await render(CounterComponent, {
      inputs: {
        counter: 5,
        hello: 'Hello Alias!',
      },
    });

    expect(screen.getByText('Current Count: 5')).toBeVisible();
    expect(screen.getByText('Hello Alias!')).toBeVisible();
  });

  it('should increment the counter on click', async () => {
    await render(CounterComponent, { inputs: { counter: 5 } });

    const incrementButton = screen.getByRole('button', { name: '+' });
    fireEvent.click(incrementButton);

    expect(screen.getByText('Current Count: 6')).toBeVisible();
  });
});
