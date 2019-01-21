import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CommentList from './index'
import mockedArticles from '../../fixtures'

Enzyme.configure({ adapter: new Adapter() })
const commentsMock = mockedArticles[0].comments

describe('Commnet List', function() {
    it('should be closed comments by default', () => {
        const wrapper = mount(<CommentList comments={commentsMock} />),
            btn = wrapper.find('.test--cl__btn').at(0)

        expect(btn.text()).toBe('show comments')

        expect(wrapper.find('.test--comment__body').length).toEqual(0)
    })

    it('should show all comments for one article when button is clicked', () => {
        const wrapper = mount(<CommentList comments={commentsMock} />),
            btn = wrapper.find('.test--cl__btn').at(0)

        wrapper
            .find('.test--cl__btn')
            .at(0)
            .simulate('click')

        expect(btn.text()).toBe('hide comments')

        expect(wrapper.find('.test--comment__body').length).toEqual(
            commentsMock.length
        )
    })

    it('should render empty comment list', () => {
        const wrapper = mount(<CommentList comments={[]} />)

        wrapper
            .find('.test--cl__btn')
            .at(0)
            .simulate('click')

        expect(wrapper.find('.test--cl__empty-item').text()).toBe(
            'No comments yet'
        )
    })
})
