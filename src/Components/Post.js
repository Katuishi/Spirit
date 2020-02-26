import React , {Component} from 'react';

class Post extends Component
{

    render(){
        return(
            <section>
                <div className="post">
                    <div className="post-upper">
                         <img src={this.props.img} aria-hidden width="200" height="200" alt=""/>

                    </div>
                    <div className="post-lower">

                        <p>{this.props.desc}</p>

                    </div>git 
                </div>
            </section>
        )
    }
}
 export default  Post;