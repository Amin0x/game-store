import './checkout.css'

const CheckoutPage = ({ cart }) => {
    return (

        <div class='checkout-containers'>
            <div class='window'>
                <div class='order-info'>
                    <div class='order-info-content'>
                        <h4>ملخص الطلب</h4>
                        <div class='line'></div>
                        <table class='order-table'>
                            <tbody>
                                {cart !== undefined && cart.items.map((item) => {
                                    return (
                                    <>
                                        <tr>
                                            <td>
                                                <img src='https://dl.dropboxusercontent.com/s/sim84r2xfedj99n/%24_32.JPG' class='full-width' alt=""></img>
                                            </td>
                                            <td>
                                                <div><span class='thin'>Nike</span></div>
                                                <div>Free Run 3.0 Women </div>
                                                <div><span class='thin small'> Color: Grey/Orange, Size: 10.5</span></div>
                                                <div class="quantity">
                                                    <select>
                                                        <option value="1">1</option>
                                                        <option value="1">2</option>
                                                        <option value="1" selected>3</option>
                                                        <option value="1">4</option>
                                                        <option value="1">5</option>
                                                        <option value="1">6</option>
                                                    </select>
                                                </div>
                                            </td>
                                            <td>
                                                <div class='price'>$99.95</div>
                                                <div class='line'></div>
                                            </td>
                                        </tr>
                                        
                                    </>)
                                }

                                )}

                            </tbody>
                        </table>

                        <div class='total'>
                            <div className="total">
                                <div class="subtotal">
                                    <div class='thin dense'>الجملة الفرعية</div>
                                    <div class='thin dense'>$68.75</div>
                                </div>
                                <div class="vat">
                                    <div class='thin dense'>الضريبة</div>
                                    <div class='thin dense'>$68.75</div>
                                </div>
                                <div class="delivery">
                                    <div class='thin dense'>التوصيل</div>
                                    <div class='thin dense'>$4.95</div>
                                </div>
                                <div class="total">
                                    <div>الجملة</div>
                                    <div class="total">$435.55</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="address-info">
                    <h4>العنوان</h4>
                    <p>جميع الحقول مطلوبة</p>
                    <div class="email form-row">
                        <lable className="label-field">الايميل</lable>
                        <input class='input-field'></input>
                    </div>
                    <div class="frist-name form-row">
                        <lable class="label-field">الاسم</lable>
                        <input class='input-field'></input>
                    </div>
                    <div class="phone form-row">
                        <lable class="label-field">الهاتف</lable>
                        <input class='input-field'></input>
                    </div>
                    <div class="address form-row">
                        <lable class="label-field">عنوان الشحن</lable>
                        <input class='input-field'></input>
                        <input class='input-field'></input>
                    </div>
                    <div class="address-town form-row">
                        <lable class="label-field">المدينة</lable>
                        <input class='input-field'></input>
                    </div>
                    <div class="billing-check">
                        <input type="checkbox" class='input-field'></input>
                        <lable>الفاتورة نفس عنوان الشحن</lable>
                    </div>

                    <div className="billing-address active">
                        <h4>عنوان الفاتورة</h4>
                        <p>جميع الحقول مطلوبة</p>
                        <div class="email form-row">
                            <lable clabel-field>الايميل</lable>
                            <input class='input-field'></input>
                        </div>
                        <div class="frist-name form-row">
                            <lable class="label-field">الاسم</lable>
                            <input class='input-field'></input>
                        </div>
                        <div class="phone form-row">
                            <lable class="label-field">الهاتف</lable>
                            <input class='input-field'></input>
                        </div>
                    </div>
                </div>
                <div class='credit-info'>
                    <div class='credit-info-content'>
                        <div class='half-input-table'>
                            <div>حدد طريقة الدفع من فضلك: </div>
                            <div class='dropdown' id='card-dropdown'>
                                <div class='dropdown-btn' id='current-card'>Visa</div>
                                <div class='dropdown-select'>
                                    <ul>
                                        <li>Master Card</li>
                                        <li>American Express</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <img src='https://dl.dropboxusercontent.com/s/ubamyu6mzov5c80/visa_logo%20%281%29.png' height='80' class='credit-card-image' id='credit-card-image' alt=""></img>
                        <div class="card-number form-row">
                            <lable clabel-field>Card Number</lable>
                            <input class='input-field'></input>
                        </div>
                        <div class="card-holder form-row">
                            <lable class="label-field">Card Holder</lable>
                            <input class='input-field'></input>
                        </div>
                        <div class='half-input-table'>
                            <div class="expire form-row">
                                <lable class="label-field">Expires</lable>
                                <input class='input-field'></input>
                            </div>
                            <div class="cvc form-row">
                                <lable class="label-field">CVC</lable>
                                <input class='input-field'></input>
                            </div>
                        </div>
                        <div class="order-summary" id="orderSummary">
                            <div class="order-summary-wrap">
                                <div class="title">
                                    <h4>تفاصيل الطلب</h4>
                                </div>
                                <div class="line"></div>
                                <div class="orderbox">
                                    <div class="title"> <strong>الجملة</strong></div>
                                    <div class="price"> <strong>12333</strong></div>
                                </div>
                                <div class="line"></div>
                                <div class="orderbox">
                                    <div class="title"> <strong>الشحن</strong></div>
                                    <div class="price"> <strong>12333</strong></div>
                                </div>
                                <div class="line"></div>
                                <div class="orderbox">
                                    <div class="title"> <strong>الضريبة</strong></div>
                                    <div class="price"> <strong>12333</strong></div>
                                </div>
                                <div class="line"></div>
                                <div class="orderbox total">
                                    <div class="title"> <strong>الجملة</strong></div>
                                    <div class="price"> <strong>12333</strong></div>
                                </div>
                            </div>
                        </div>
                        <button class='pay-btn'>Checkout</button>

                    </div>

                </div>
            </div>
        </div>
    );
}

export default CheckoutPage;