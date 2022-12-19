function AvatarSelectionCards({avatar, setUserAvatar}) {

    function handleClick(e) {
        setUserAvatar(avatar)
    }
    
    return(
        <>
        <img src={avatar} className="avatarSelection" alt="avatar selection" onClick={e => handleClick()} />
        </>
    )

}

export default AvatarSelectionCards