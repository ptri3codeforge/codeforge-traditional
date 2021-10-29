import React from 'react'
import renderer from 'react-test-renderer'
import BulletinBoard from '../src/Components/BulletinBoard'

test('Component should match snapshot', () => {
    const component = renderer.create(
        <BulletinBoard></BulletinBoard>
    )
    let tree = component.toJSON();
    console.log(tree)
    expect(tree).toMatchSnapshot()
})

test('BulletinBoard should be type of object', () => {
    const component = renderer.create(
        <BulletinBoard></BulletinBoard>
    )
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
    expect(typeof tree).toBe('object')
})