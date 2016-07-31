import { renderComponent , expect } from '../test_helper';
import FlightNew from '../../src/containers/flightNew';

describe('Тестируем FlightNew Component' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(FlightNew);
  });

  describe('Ввод текста', () => {

    beforeEach(() => {
      component.find('input').simulate('change', 'new text');
    });

    it('Ввод текста в input', () => {
      expect(component.find('input')).to.have.value('new text');
    });

  });
});
