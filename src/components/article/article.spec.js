import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Article from '.';
import mockedArticles from '../../fixtures';

Enzyme.configure({ adapter: new Adapter() });

describe('Article', () => {
    it('should be closing after toggle btn click', (done) => {
      const wrapper = mount(
          <Article
            article={mockedArticles[0]}
            isOpen
            toggleArticle={() => done()}
          />
      );

      wrapper.find('.test--article__btn').at(0).simulate('click');
    });
});
