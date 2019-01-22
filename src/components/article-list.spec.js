import Enzyme, { mount, render } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import mockedArticles from '../fixtures'
import ArticleList from './article-list'

Enzyme.configure({ adapter: new Adapter() })

describe('Article List', function() {
  it('should render', () => {
    const wrapper = mount(<ArticleList articles={mockedArticles} />)

    expect(wrapper.find('.test--art__container').length).toEqual(7)
  })

  it('should render without open articles', () => {
    const wrapper = render(<ArticleList articles={mockedArticles} />)

    expect(wrapper.find('.test--article_body').length).toEqual(0)
  })

  it('should show article text after click on button', () => {
    const wrapper = mount(<ArticleList articles={mockedArticles} />)

    wrapper
      .find('.test--article__btn')
      .at(0)
      .simulate('click')

    expect(wrapper.find('.test--article_body').length).toEqual(1)
  })

  it('should close', (done) => {
    const wrapper = mount(<ArticleList articles={mockedArticles} />)
    const button = wrapper.find('.test--article__btn').at(0)
    button.simulate('click')

    setTimeout(() => {
      wrapper.simulate('transitionEnd')
      button.simulate('click')

      setTimeout(() => {
        wrapper.simulate('transitionEnd')
        expect(wrapper.find('.test--article_body').length).toEqual(0)
        done()
      }, 500)
    }, 500)
  })

  it('should call fetch data on init', (done) => {
    const wrapper = mount(
      <ArticleList articles={mockedArticles} fetchData={() => done()} />
    )
  })
})
