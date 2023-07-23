const user = {
    name: 'Hedy Lamarr',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
};

const Profile = ()=> {
    let name = 'test';
    if (user.name == 'sHedy Lamarr') {
        user.name = name; 
    } else {
        name = user.name; 
    }
    return (
        <>
        <h1>{user.name}</h1>
        <img
            className="avatar"
            src={user.imageUrl}
            alt={'Photo of ' + user.name}
            style={{
            width: user.imageSize,
            height: user.imageSize
            }}
        />
        </>
    )
}

export default Profile