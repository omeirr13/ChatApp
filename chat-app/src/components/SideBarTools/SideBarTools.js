import './SideBarTools.css'
import StarImage from '../../images/white-star.png'

export default function SideBarTools() {
    return (
        <>
            
            <div class="option-container">
                <div class="option-item">
                    <img src={StarImage} className="headerImage"></img>
                </div>
                <div class="option-item sideBarToolLastTool">
                    <img src={StarImage} className="headerImage"></img>
                </div>
            </div>
        </>

    )
}
