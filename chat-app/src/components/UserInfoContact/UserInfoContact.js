import React, { useContext, useState } from 'react'
import './UserInfoContact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown, faPlus, faEnvelope, faBellSlash, faPhone, faCloud, faBan } from '@fortawesome/free-solid-svg-icons';
export default function UserInfoContact({ userInfo }) {

    const [showContact, setShowContact] = useState(true);
    const [showDND, setShowDND] = useState(true);

    const toggleEmailShow = () => {
        setShowContact(!showContact);
    }

    const toggleDNDShow = () => {
        setShowDND(!showDND);
    }
    return (
        <div class="userInfoContactContainer">
            <div className="openContactInfo">
                <div className="openContactInfoHeader">
                    <h3 className="openContactHeading">CONTACT</h3>
                    {
                        showContact ? (
                            <FontAwesomeIcon icon={faChevronUp} className="openContactInfoIcon" onClick={toggleEmailShow} />
                        ) :
                            (
                                <FontAwesomeIcon icon={faChevronDown} className="openContactInfoIcon" onClick={toggleEmailShow} />
                            )
                    }
                </div>
                {showContact &&
                    <div className="userEmailContainer">
                        <div className="userEmailHeader">
                            <h3 className="userEmailHeading">EMAIL</h3>
                            <FontAwesomeIcon icon={faPlus} className="userEmailPlusIcon" />
                        </div>
                        <div className="emailContainer">
                            <div className="emailItem">
                                <div className="iconAndEmail">
                                    <FontAwesomeIcon icon={faEnvelope} className="emailIcon" />
                                    <p className="emailItemEmailText">{userInfo.email}</p>
                                </div>
                            </div>
                            <div className="emailItem">
                                <div className="iconAndEmail">
                                    <FontAwesomeIcon icon={faEnvelope} className="emailIcon" />
                                    <p className="emailItemEmailText">{userInfo.email}</p>
                                </div>
                            </div>
                        </div>

                        <div className="userPhoneHeader">
                            <h3 className="userPhoneHeading">PHONE</h3>
                            <FontAwesomeIcon icon={faPlus} className="userPhonePlusIcon" />
                        </div>
                        <div className="phoneContainer">
                            <div className="phoneItem">
                                <div className="iconAndPhone">
                                    <FontAwesomeIcon icon={faEnvelope} className="phoneIcon" />
                                    <p className="phoneItemPhoneText">ali@gmail.com</p>
                                </div>
                            </div>

                        </div>
                    </div>
                }
            </div>
            <div className="openTagInfo">
                <div className="openTagInfoHeader">
                    <h3 className="openTagHeading">TAGS</h3>
                    <FontAwesomeIcon icon={faChevronDown} className="openTagInfoIcon" />
                </div>
            </div>

            <div className="openDNDInfo">
                <div className="openDNDInfoHeader">
                    <h3 className="openDNDHeading">DND</h3>
                    {
                        showDND ? (
                            <FontAwesomeIcon icon={faChevronUp} className="openDNDInfoIcon" onClick={toggleDNDShow} />
                        ) :
                            (
                                <FontAwesomeIcon icon={faChevronDown} className="openDNDInfoIcon" onClick={toggleDNDShow} />
                            )
                    }
                </div>
                {showDND &&
                    <div className="userDFDContainer">
                        <div className="DFDContainer">
                            <div className="DFDItem">
                                <div className="iconAndDFD">
                                    <FontAwesomeIcon icon={faBellSlash} className="DFDIcon" />
                                    <p className="DFDItemDFDText">DND All</p>
                                </div>
                                <label class="switch">
                                    <input type="checkbox" />
                                    <span class="slider round"></span>
                                </label>

                            </div>
                            <div className="DFDItem">
                                <div className="iconAndDFD">
                                    <FontAwesomeIcon icon={faPhone} className="DFDIcon" />
                                    <p className="DFDItemDFDText">DND Calls & Voicemails</p>
                                </div>
                            </div>
                            <div className="DFDItem">
                                <div className="iconAndDFD">
                                    <FontAwesomeIcon icon={faCloud} className="DFDIcon" />
                                    <p className="DFDItemDFDText">DND Text Message</p>
                                </div>
                            </div>
                            <div className="DFDItem">
                                <div className="iconAndDFD">
                                    <FontAwesomeIcon icon={faEnvelope} className="DFDIcon" />
                                    <p className="DFDItemDFDText">DND Emails</p>
                                </div>
                            </div>
                            <div className="DFDItem">
                                <div className="iconAndDFD">
                                    <FontAwesomeIcon icon={faBan} className="DFDIcon" />
                                    <p className="DFDItemDFDText">DND GMB</p>
                                </div>
                            </div>
                            <div className="DFDItem">
                                <div className="iconAndDFD">
                                    <FontAwesomeIcon icon={faBan} className="DFDIcon" />
                                    <p className="DFDItemDFDText">DND Facebook Messenger</p>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div >
    )
}
