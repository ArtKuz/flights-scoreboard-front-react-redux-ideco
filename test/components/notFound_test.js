import { renderComponent , expect } from '../test_helper';
import NotFound from '../../src/components/notFound';

describe('Тестируем NotFound Component' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(NotFound);
  });

  it('Наличие тега <p>', () => {
    expect(component.find('p')).to.exist;
  });

  it('Проверка корректного класса <p class="bg-danger">', () => {
    expect(component.find('p')).to.have.class('bg-danger');
  });
});
