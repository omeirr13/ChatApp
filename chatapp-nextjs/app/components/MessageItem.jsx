export default function MessageItem({ content, right, timestamp }) {
    return (
        <>
            <div class="flex flex-col">
                <div className={`text-black bg-[#eeeeee] mt-0 mx-[10px] mb-2 w-max max-w-[26rem] rounded-t-2xl rounded-r-2xl rounded-b-2xl rounded-bl-none py-0 px-[10px] ${right ? 'text-white !bg-[#3478f5] rounded-tl-2xl rounded-tr-2xl !rounded-bl-2xl rounded-br-none ml-auto' : ''}`}>
                    <p className="m-[10px]">{content}</p>
                </div>
                <p className={`text-xs text-[#E0E0E0] mt-0 ml-3 ${right ? '!ml-auto mr-3' : ''}`}>{timestamp}</p>
            </div>
        </>
    )
}
 