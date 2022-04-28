import React from 'react';
import "C:/Users/mondher/Desktop/ReactBoi/my-web-app/node_modules/bootstrap/dist/css/bootstrap.css";

class Counter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            counter: 1,
            list: [0]
        }
    }
    compute=(op)=>{
        let sign=op==='+'?1:-1;
        if (this.state.counter==1 && op==='_') sign=0
        let cc=this.state.counter+sign;
        this.setState( {
            counter:cc,
            list:new Array(cc).fill(0)
        }
        );
}

    render() {
        return (
            <div>
                <div className="card m-1">
                    <div className="card-header">
                        <strong>
                            {this.props.title} : {this.state.counter}
                        </strong>
                    </div>

                    <div className="card-body">
                        {
                            this.state.list.map((v,index)=>
                                <span>{index}
                                <img width={100} src={this.props.image}/>
                                </span>
                            )
                        }
                        <div className="position-absolute top-50 start-50">
                            <button  onClick={()=>this.compute('+')} type="button" className="btn btn-primary btn-lg">+</button>
                            <button  onClick={()=>this.compute('-')} type="button" className="btn btn-secondary btn-lg">-</button>
                        </div>
                    </div>
                </div>


            </div>
        );
    }
}

export default Counter;