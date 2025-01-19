import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="am-footer-top">
        <div className="am-address-section">
          <h4>العنوان</h4>
          <p><strong>الفرع الرئيسي</strong></p>
          <p>سوق العليا</p>
          <p>الرياض</p>
          <p>المملكة العربية السعودية</p>
          <p><i className="fa fa-phone" aria-hidden="true"></i> هاتف: <strong>+91-9122588799</strong></p>
        </div>

        <div className="am-link-section">
          <div className="mb-3">
            <h4>الروابط السريعة</h4>
            <div><a href="">المنتجات</a></div>
            <div><a href="">خدمات ما بعد البيع</a></div>
            <div><a href="">الدعم الفني</a></div>
            <div><a href=""></a></div>
            <div><a href=""></a></div>
          </div>
          <div className="mb-3">
            <h4>الشركة</h4>
            <div><a href="">المنتجات</a></div>
            <div><a href="">خدمات ما بعد البيع</a></div>
            <div><a href="">الدعم الفني</a></div>
            <div><a href=""></a></div>
            <div><a href=""></a></div>
          </div>
        </div>

        <div className="am-subscrip-section">
          <h4>أشترك في القائمة البريدية</h4>
          <div className='desc mb-3'>ادخل بريدك لتصلك اخر الاخبار</div>
          <div className="search">
            <i className="fa fa-search"></i>
            <input type="text" className="form-control" placeholder="Have a question? Ask Now" />
            <button className="btn btn-primary">اشترك</button>
          </div>
        </div>


      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row">

            <div className="col-md-3">
              <div className="footer-site-info">2020 © <a href="https://www.youtube.com/watch?v=pdr4IzBpacI&t=34s" target="_blank">أفضل برنامج HTML و CSS </a></div>
            </div>

            <div className="col-md-6">
              <nav id="footer-navigation" className="site-navigation footer-navigation centered-box" role="navigation">
                <ul id="footer-menu" className="nav-menu styled clearfix inline-inside">
                  <li id="menu-item-26" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-26"><a href="#">الدعم</a></li>
                  <li id="menu-item-27" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-27"><a href="#">اتصل بنا</a></li>
                  <li id="menu-item-28" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-28"><a href="#">إخلاء المسؤولية</a></li>
                  <li id="menu-item-29" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-29"><a href="#">أضف المزيد</a></li>
                </ul>
              </nav>
            </div>

            <div className="col-md-3">
              <div id="footer-socials">
                <div className="socials inline-inside socials-colored">

                  <a href="#" target="_blank" title="فيسبوك" className="socials-item">
                    <i className="fab fa-facebook-f facebook"></i>
                  </a>
                  <a href="#" target="_blank" title="تويتر" className="socials-item">
                    <i className="fab fa-twitter twitter"></i>
                  </a>
                  <a href="#" target="_blank" title="إنستغرام" className="socials-item">
                    <i className="fab fa-instagram instagram"></i>
                  </a>
                  <a href="#" target="_blank" title="يوتيوب" className="socials-item">
                    <i className="fab fa-youtube youtube"></i>
                  </a>
                  <a href="#" target="_blank" title="تيليجرام" className="socials-item">
                    <i className="fab fa-telegram telegram"></i>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;