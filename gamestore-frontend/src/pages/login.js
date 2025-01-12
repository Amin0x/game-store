import './login.css';


const LoginPage = () => {
    return (
        <div className="login-dark">
            <form method="post">
                <h2 className="sr-only">تسجيل الدخول</h2>
                <div className="illustration"><i className="icon ion-ios-locked-outline"></i></div>
                <div className="form-group"><input className="form-control" type="email" name="email" placeholder="البريد الإلكتروني" /></div>
                <div className="form-group"><input className="form-control" type="password" name="password" placeholder="كلمة المرور" /></div>
                <div className="form-group"><button className="btn btn-primary btn-block" type="submit">تسجيل الدخول</button></div>
                <a href="/auth/password-forgot" className="forgot">هل نسيت بريدك الإلكتروني أو كلمة المرور؟</a>
            </form>
        </div >
    );
}

export default LoginPage;