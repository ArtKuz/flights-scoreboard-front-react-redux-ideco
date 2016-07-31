import { renderComponent , expect } from '../test_helper';
import App from '../../src/components/app';

describe('Тестируем App Component' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });

  it('renders something', () => {
    expect(component).to.exist;
  });

  it('Наличие header`а', () => {
    expect(component.find('.header')).to.exist;
  });

});
