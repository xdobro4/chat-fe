import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import SendMessage from '../../app/components/SendMessage';
import ReactDOM from 'react-dom';

describe('SendMessage', () => {
  const props = {
    dispatch: expect.createSpy()
  };

  describe('Shallow', () => {
    let output;
    let renderer;

    beforeEach(() => {
      renderer = TestUtils.createRenderer();
      renderer.render(<SendMessage {...props} />);
      output = renderer.getRenderOutput();
    });
    it('should render correctly', () => {
      expect(output.type).toBe('form');

      const input = output.props.children;

      expect(input.type).toBe('input');
      expect(input.props.type).toBe('text');
      expect(input.ref).toBe('message');
    });
  });

  describe('Component onSubmit', () => {
    let component;
    let componentInstance;
    const props = {
      dispatch: expect.createSpy()
    };

    const renderComponent = () => {
      componentInstance = TestUtils.renderIntoDocument(<SendMessage {...props} />);
      component = ReactDOM.findDOMNode(componentInstance);
    };

    beforeEach(() => {
      renderComponent();
    });

    it('test empty value', () => {
      TestUtils.Simulate.submit(component);
      expect(props.dispatch.calls.length).toBe(0);
    });

    it('test non empty value', () => {
      const input = componentInstance.refs.message;

      input.value = 'Use Redux!';
      TestUtils.Simulate.submit(component);

      expect(props.dispatch.calls.length).toBe(1);
    });
  });
});

