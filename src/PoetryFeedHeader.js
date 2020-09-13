import React from 'react'
import "./PoetryFeedHeader.css"
import TopHeader from './TopHeader'

function PoetryFeedHeader() {
    return (
        <div className="poetry__feed__header">
            <TopHeader/>
            <div className="poetry__feed__footer">
                <h2>Feed</h2>
            <div className="line2"></div>
            <h3 className="active" >Popular</h3>
            </div>
        </div>
    
    )
}

export default PoetryFeedHeader
