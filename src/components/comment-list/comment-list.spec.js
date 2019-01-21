import React from 'react';
import Enzyme, {render, shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CommentList, { ENTER_TIMEOUT, LEAVE_TIMEOUT } from '.';
import mockedArticles from '../../fixtures';

const { comments: mockedComments } = mockedArticles[0];

Enzyme.configure({ adapter: new Adapter() });

describe('Comment List', function () {
    it('should render', () => {
        const wrapper = mount(
            <CommentList comments = {mockedComments} />
        );

        expect(wrapper.find('.test--comment-list__container').length)
            .toEqual(1)
    });

    it('should render closed if comments no empty', () => {
        const wrapper = mount(
            <CommentList comments={mockedComments} />
        );

        expect(wrapper.find('.test--comment-list__list').length)
            .toEqual(0);
    });

    it('should render closed if comments empty', () => {
        const wrapper = mount(
            <CommentList />
        );

        expect(wrapper.find('.test--comment-list__stub').length)
            .toEqual(0);
    });

    // Подсмотрено
    it('should toggle comments list', (done) => {
        const wrapper = mount(
            <CommentList comments={mockedComments} />
        );

        wrapper.find('.test--comment-list__toggle-btn').at(0).simulate('click');
        expect(wrapper.find('.test--comment-list__list').length)
            .toEqual(1);
        setTimeout(() => {
            wrapper.simulate('transitionEnd');
            wrapper.find('.test--comment-list__toggle-btn').at(0).simulate('click');
            setTimeout(() => {
                // Почему без этой симуляции тест не проходит?
                // Без неё узел - лист не удаляется из DOM, какой таймаут не выстави
                wrapper.simulate('transitionEnd');
                expect(wrapper.find('.test--comment-list__list').length)
                    .toEqual(0);
                done();
            }, LEAVE_TIMEOUT);
        }, ENTER_TIMEOUT);
    });
});
