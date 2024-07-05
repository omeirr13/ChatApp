import React from 'react'
import './MessageItem.css'
export default function MessageItem({ content, right, timestamp }) {
    return (
        <>
            <div class="wrapper">
                <div className={`messageItemContainer ${right ? 'right' : ''}`}>
                    <p>{content}</p>
                </div>
                <p className={`messageTimestamp ${right ? 'rightTimestamp' : ''}`}>{timestamp}</p>
            </div>
        </>
    )
}
