import React from 'react';
import Enzyme, {render, shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CommentList from './comment-list';
import articles from '../../fixtures';

Enzyme.configure({ adapter: new Adapter() });

describe('Comment List', function () {
    it('should render only comments no button', () => {
        
            
            const wrapper = mount(
                <CommentList comments={articles[0].comments} />   
            )
            expect(wrapper.find('.test--comment_container').length).toEqual(0)
            expect(wrapper.find('.test--comment_btn').length).toEqual(1)
    })

    it('should show article text after click on button', () => {
        const wrapper = mount(
            <CommentList comments = {articles[0].comments} />
        )

        wrapper.find('.test--comment_btn').at(0).simulate('click');

        expect(wrapper.find('.test--comment_container').length)
            .toEqual(articles[0].comments.length)
    });

});