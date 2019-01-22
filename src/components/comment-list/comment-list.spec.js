import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import mockedArticles from '../../fixtures'
import CommentList from './index'

Enzyme.configure({ adapter: new Adapter() })

describe('Comment list tests', () => {
  test('should render', () => {
    const articleIndex = 0
    const commentCount = 5
    const article = mockedArticles[articleIndex]
    const wrapper = mount(<CommentList comments={article.comments} />)
    wrapper
      .find('.test--comments__btn')
      .at(0)
      .simulate('click')

    expect(article.comments.length).toBe(commentCount)
    expect(wrapper.find('.test--comment__container').length).toBe(commentCount)
    expect(wrapper.find('.test--comment__body').length).toBe(commentCount)
  })

  test('should close', (done) => {
    const articleIndex = 0
    const article = mockedArticles[articleIndex]
    const wrapper = mount(<CommentList comments={article.comments} />)
    const button = wrapper.find('.test--comments__btn').at(0)

    button.simulate('click')

    setTimeout(() => {
      wrapper.simulate('transitionEnd')
      button.simulate('click')

      setTimeout(() => {
        wrapper.simulate('transitionEnd')
        expect(wrapper.find('.test--comment__container').length).toBe(0)
        expect(wrapper.find('.test--comment__body').length).toEqual(0)
        done()
      }, 500)
    }, 500)
  })
})
