import './App.css';

function App() {
    return (
        <div className="container">
            <header className="header">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Logo%21_Logo.svg/2560px-Logo%21_Logo.svg.png" alt="" className="logo" />
            </header>
            <div className="main">
                <div className="side__bar">
                    <nav className="nav__list">
                        <a href="#" className="nav__item">Profile</a>
                        <a href="#" className="nav__item">Messages</a>
                        <a href="#" className="nav__item">News</a>
                        <a href="#" className="nav__item">Music</a>
                        <a href="#" className="nav__item">Settings</a>
                    </nav>
                </div>
                <div className="content">
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
            </div>
        </div>
    );
}

export default App;
