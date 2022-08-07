function Profile() {

    return (
        <div className="profile">
            <div className="bg__profile">
                <img src="https://www.fotolandscape.com/wp-content/uploads/2014/12/DSC_0225.jpg" alt="" />
            </div>
            <div className="user__info">
                <div className="avatar">
                    <div className="avatar__img">
                        Сдесь аватар
                    </div>
                    <div className="avatar__name">
                        а сдесь имя
                    </div>
                </div>
                <div className="user__posts">
                    <div className="post__user">1 - Пост</div>
                    <div className="post__user">2 - Пост</div>
                    <div className="post__user">3 - Пост</div>
                    <div className="post__user">4 - Пост</div>
                </div>
            </div>
        </div>
    );
}

export default Profile;