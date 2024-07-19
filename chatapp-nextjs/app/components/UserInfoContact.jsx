import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown, faPlus, faEnvelope, faBellSlash, faPhone, faCloud, faBan } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
export default function UserInfoContact({ userInfo }) {

    const [showContact, setShowContact] = useState(true);
    const [showTags, setShowTags] = useState(true);
    const [showDND, setShowDND] = useState(true);

    const toggleEmailShow = () => {
        setShowContact(!showContact);
    }

    const toggleDNDShow = () => {
        setShowDND(!showDND);
    }

    const toggleTagsShow = () => {
        setShowTags(!showTags);
    }
    return (
        <div class="w-[100%] flex flex-col">
            <div>
                <div className="py-4 px-3 flex justify-between">
                    <h3 className="text-[15px]">CONTACT</h3>
                    {
                        showContact ? (
                            <FontAwesomeIcon icon={faChevronUp} onClick={toggleEmailShow} />
                        ) :
                            (
                                <FontAwesomeIcon icon={faChevronDown} onClick={toggleEmailShow} />
                            )
                    }
                </div>
                {showContact &&
                    <div className="flex flex-col">
                        <div className="flex py-0 px-[13px] justify-between">
                            <h3 className="text-[#666666] m-0 text-[13px]">EMAIL</h3>
                            <FontAwesomeIcon icon={faPlus} className="text-[#843fff]" />
                        </div>
                        <div className="flex flex-col my-2 mx-4 rounded-xl bg-[#f7f7f7]">
                            <div className="emailItem relative h-[30px] mt-[1px] py-[3px] px-[11px] flex items-center">
                                <div className="flex gap-[10px]">
                                    <FontAwesomeIcon icon={faEnvelope} className="text-[15px]" />
                                    <p className="text-xs">{userInfo.email}</p>
                                </div>
                            </div>
                            <div className="emailItem relative h-[30px] mt-[1px] py-[3px] px-[11px] flex items-center">
                                <div className="flex gap-[10px]">
                                    <FontAwesomeIcon icon={faEnvelope} className="text-[15px]" />
                                    <p className="text-xs">{userInfo.email}</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex py-0 px-[13px] justify-between">
                            <h3 className="text-[#666666] m-0 text-[13px]">PHONE</h3>
                            <FontAwesomeIcon icon={faPlus} className="text-[#843fff]" />
                        </div>
                        <div className="flex flex-col my-[8px] mx-[15px] rounded-xl bg-[#f7f7f7]">
                            <div className="relative h-[30px] mt-[1px] py-[3px] px-[11px] flex items-center">
                                <div className="flex gap-[10px]">
                                    <FontAwesomeIcon icon={faPhone} className="text-[13px]" />
                                    <p className="text-[13px]">0333-3333333</p>
                                </div>
                            </div>

                        </div>
                    </div>
                }
            </div>
            <div className="border-t border-gray-200 border-solid ">
                <div className="py-4 px-3 flex justify-between">
                    <h3 className="text-[15px]">TAGS</h3>
                    {
                        showTags ? (
                            <FontAwesomeIcon icon={faChevronUp} onClick={toggleTagsShow} />
                        ) :
                            (
                                <FontAwesomeIcon icon={faChevronDown} onClick={toggleTagsShow} />
                            )
                    }
                </div>
            </div>

            <div className="border-t border-gray-200 border-solid">
                <div className="py-4 px-3 flex justify-between">
                    <h3 className="text-[15px]">DND</h3>
                    {
                        showDND ? (
                            <FontAwesomeIcon icon={faChevronUp} onClick={toggleDNDShow} />
                        ) :
                            (
                                <FontAwesomeIcon icon={faChevronDown} onClick={toggleDNDShow} />
                            )
                    }
                </div>
                {showDND &&
                    <div className="flex flex-col">
                        <div className="flex flex-col my-2 mx-4">
                            <div className="relative h-7 my-[1px] py-1 px-3 flex justify-between items-center DFDItem">
                                <div className="flex gap-3">
                                    <FontAwesomeIcon icon={faBellSlash} className="text-xs text-gray-500" />
                                    <p className="text-xs">DND All</p>
                                </div>
                                <label class="switch">
                                    <input type="checkbox" />
                                    <span class="slider round"></span>
                                </label>

                            </div>
                            <div className="relative h-7 my-[1px] mt-3 py-1 px-3 flex justify-between items-center">
                                <div className="flex gap-3">
                                    <FontAwesomeIcon icon={faPhone} className="text-xs text-gray-500" />
                                    <p className="text-xs">DND Calls & Voicemails</p>
                                </div>
                            </div>
                            <div className="relative h-7 mt-[1px] py-1 px-3 flex justify-between items-center">
                                <div className="flex gap-3">
                                    <FontAwesomeIcon icon={faCloud} className="text-xs text-gray-500" />
                                    <p className="text-xs">DND Text Message</p>
                                </div>
                            </div>
                            <div className="relative h-7 mt-[1px] py-1 px-3 flex justify-between items-center">
                                <div className="flex gap-3">
                                    <FontAwesomeIcon icon={faEnvelope} className="text-xs text-gray-500" />
                                    <p className="text-xs">DND Emails</p>
                                </div>
                            </div>
                            <div className="relative h-7 mt-[1px] py-1 px-3 flex justify-between items-center">
                                <div className="flex gap-3">
                                    <FontAwesomeIcon icon={faBan} className="text-xs text-gray-500" />
                                    <p className="text-xs">DND GMB</p>
                                </div>
                            </div>
                            <div className="relative h-7 mt-[1px] py-1 px-3 flex justify-between items-center">
                                <div className="flex gap-3">
                                    <FontAwesomeIcon icon={faBan} className="text-xs text-gray-500" />
                                    <p className="text-xs">DND Facebook Messenger</p>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div >
    )
}
