import React, {Component} from "react";

class App extends Component {
    constructor(props) {
        //(数据相关的操作)
        //1.数据的请求
        //2.当前组件的检测
        console.log("constructor");
        super(props)
        this.state = {
            num:666
        }
    }
    componentWillMount() {
        console.log("componentWillMount");
    }
    //dom编译完成，并且渲染到真实的dom中，
    //可以做dom的处理
    //可以做具体的事件监听
    //某些插件的实例化
    componentDidMount() {
        console.log("componentDidMount");
    }
    render() {
        //纯函数
        //1.不能调用setState进行数据的改变
        //2.不能做数据的产生和保存
        //3.返回数据和dom拼接好的jsx结构
        console.log("render");
        return <div>{this.state.num}</div>
    }
}


export default App;