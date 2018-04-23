import { renderComponent , expect } from '../test_helper';
import App from '../../src/components/app';
import TableView from '../../src/components/RaiseTicket'

describe('RaiseTicket' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(RaiseTicket);
  });

  it('contains Button', () => {
    expect(component.find('Button')).to.exist;
  });
      it('contains Dropdown', () => {
    expect(component.find('select')).to.exist;
  });
   it('Form Field', () => {
    expect(component.find('FormControl')).to.have.value('');
  });
    it('contains Dropdown', () => {
    expect(component.find('select')).to.exist;
        expect(component.find('select')).to.be.visible;
  });
});
