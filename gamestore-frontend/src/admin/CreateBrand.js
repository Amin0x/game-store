import Sidebar from "./SideBar";
import './css.css'


const CreateBrand = () => {

    return (
        <div class="container page">
            <Sidebar />
            <div class="form-content">
                <div className="content">
                    <form>
                        <div>
                            <label></label>
                            <input/>
                        </div>
                        <div>
                            <label></label>
                            <input/>
                        </div>
                        <div>
                            <label></label>
                            <input/>
                        </div>
                        <div>
                            <label></label>
                            <input/>
                        </div>
                        <button>submit</button>
                    </form>
                </div>
            </div>
        </div>
    )

}

export default CreateBrand;