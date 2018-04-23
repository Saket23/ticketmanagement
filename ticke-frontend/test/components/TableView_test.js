import { renderComponent , expect } from '../test_helper';
import App from '../../src/components/app';
import TableView from '../../src/components/TableView'

describe('TableView' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(TableView);
  });

  it('contains Button', () => {
    expect(component.find('.button-display')).to.exist;
  });
      it('contains Bootstrap Table', () => {
    expect(component.find('BootstrapTable')).to.exist;
  });
});
