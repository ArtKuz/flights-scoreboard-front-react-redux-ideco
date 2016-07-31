import { renderComponent , expect } from '../test_helper';
import CountDelayFlights from '../../src/components/countDelayFlights';

describe('Тестируем CountAllFlights Component' , () => {
  let component;

  beforeEach(() => {
    const props = {
      flights: [
        {
          time: '2016-07-20T16:30:00',
          actual_time: '2016-07-20T16:22:00'
        },
        {
          time: '2016-07-20T16:30:00'
        },
        {
          time: '2016-07-20T16:30:00',
          actual_time: '2016-07-20T16:31:00'
        },
        {
          time: '2016-07-20T16:30:00',
          actual_time: '2016-07-20T16:32:00'
        }
      ]
    };
    component = renderComponent(CountDelayFlights, props);
  });

  it('Проверка корректности подсчета общего количества задержанных рейсов', () => {
    expect(component).to.contain('Задержанных рейсов: 2');
  });

});
