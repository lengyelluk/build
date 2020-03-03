import { Link } from 'react-router-dom'
import React, { PureComponent } from 'react'

import './style.css'

import { ADD_FLAT } from '../AddFlat'
import { FLAT_LIST } from '../FlatList'

class HomeScreen extends PureComponent {
    render() {
        return (
            <>
                <h1>Your new room just a click away</h1>
                <h3>With us you can find the right flatmate or the ideal room for you</h3>
                <div className='grid'>
                    <div className='menu-option'>
                        <h4 className='menu-option-heading'>RENT OUT A ROOM</h4>
                        <Link to={ADD_FLAT} ><img src={require("../../assets/images/rentOutRoom.jpg")} alt='rent out a room' className='menu-option-photo' /></Link>
                    </div>
                    <div className='menu-option'>
                        <h4 className='menu-option-heading'>FIND A ROOM</h4>
                        <Link to={FLAT_LIST} ><img src={require("../../assets/images/findRoom.jpg")} alt='find a room' className='menu-option-photo' /></Link>
                    </div>
                </div>			
            </>
        )
    }
}
export default HomeScreen
export const HOME = "/"