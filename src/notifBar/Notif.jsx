import './Notif.css'

function Notif() {

    return (
        <div className="notif-bar">

            <div className="phone-number">

                <span className="material-symbols-outlined">
                    phone_callback
                </span>
                <p>+4904-049-950</p>

            </div>

            <div className="discount">

                <p>Get 50% Off on the Selected items </p>
                <span>|</span>
                <a href="#">Shop now</a>

            </div>

            <div className="selection">
                <form className="lang">
                    <select id="language" name="language">
                        <option value="English">English</option>
                        <option value="Uzbek">Uzbek</option>
                        <option value="Russian">Russian</option>
                        <option value="Spanish">Spanish</option>
                    </select>
                </form>

                <form className="contr">
                    <select name="contr" id="">
                        <option value="">Location</option>
                        <option value="">USA</option>
                        <option value="">UAE</option>
                        <option value="">Russian</option>
                    </select>
                </form>
            </div>



        </div>
    )
}

export default Notif;