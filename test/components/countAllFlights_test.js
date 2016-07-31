import { renderComponent , expect } from '../test_helper';
import CountAllFlights from '../../src/components/countAllFlights';

describe('Тестируем CountAllFlights Component' , () => {
  let component;

  beforeEach(() => {
    const props = {
      flights: [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
    };
    component = renderComponent(CountAllFlights, props);
  });

  it('Проверка корректности подсчета общего количества рейсов', () => {
    expect(component).to.contain('Всего рейсов: 10');
  });

});
