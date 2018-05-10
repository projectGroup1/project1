import React, {Component} from "react";
import formCss from "../css/style.css";

class Form extends Component {
    constructor (props) {
        super(props)
        this.state = {
            email: "",
            pas: "",
            micro: "",
            auth: "",
            city: "",
            dist: ""
        }
    }
    emailChange(e) {
        this.setState ({
            email: e.target.value
        })
    }
    pasChange(e) {
        this.setState ({
            pas: e.target.value
        })
    }
    microChange(e) {
        this.setState ({
            micro: e.target.value
        })
    }
    authChange(e) {
        this.setState({
            auth: e.target.value
        })
    }
    submit() {
        document.forms[0].target="rfFrame";
        console.log(this.state)
    }
    render() {
        return (
            <div className={formCss.box}>
                <form>
                    <div>
                        <label htmlFor="email">邮箱：</label>
                        <input id="email" type="text" value={this.state.email} onChange={this.emailChange.bind(this)}/>
                    </div>
                    <div>
                        <label htmlFor="pas">设置密码：</label>
                        <input id="pas" type="text" value={this.state.pas} onChange={this.pasChange.bind(this)}/>
                    </div>
                    <div>
                        <label htmlFor="micro">官方注册微博名：</label>
                        <input id="micro" type="text" value={this.state.micro} onChange={this.microChange.bind(this)}/>
                    </div>
                    <div className={formCss.sel}>
                        <label htmlFor="dress">所在地：</label>
                        <select name="" id="city" onChange={this.cityChange.bind(this)}>
                            <option value="北京">北京</option>
                            <option value="上海">上海</option>
                            <option value="天津">天津</option>
                        </select>
                        <select name="" id="dist" onChange={this.distChange.bind(this)}>
                            <option value="西城区">西城区</option>
                            <option value="东城区">东城区</option>
                            <option value="大兴区">大兴区</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="auth">验证码：</label>
                        <input id="auth" type="text" value={this.state.auth} onChange={this.authChange.bind(this)}/>
                    </div>
                    <div className={formCss.btn}>
                        <button className={formCss.bg} type="button" onClick={this.submit.bind(this)}>立即注册</button>
                    </div>
                </form>
            </div>
        )
    }
    cityChange(e){
        var obj=document.getElementById('city');
        var index=obj.selectedIndex; //序号，取当前选中选项的序号
        var val = obj.options[index].value;
        this.setState({
            city: e.target.value
        })
    }
    distChange(e) {
        var obj=document.getElementById('dist');
        var index=obj.selectedIndex; //序号，取当前选中选项的序号
        var val = obj.options[index].value;
        this.setState({
            dist: e.target.value
        })
        console.log(e.target.value)
    }
}


export default Form;