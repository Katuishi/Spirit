import React from 'react';
class Receipt extends React.Component
{
    render()
    {
        return(
            <div className="container-receipt">
                <div>
                    <img src={this.props.img} aria-hidden width="200" height="200" alt=""/>
                </div>
                <div className="methods-drinks">
                    <div className="drinks">
                        <p className="letters-drinks"><span>1</span> Pica Pollo max-width: 100px;max-width: 100px;max-width: 100px;max-width: 100px;max-width: 100px;max-width: 100px;</p>
                        <p className="letters-drinks"><span>2</span> Pica Pollo </p>
                        <p className="letters-drinks"><span>3</span> Pica Pollo </p>
                        <p className="letters-drinks"><span>4</span> Pica Pollo </p>
                    </div>
                    <div className="methods">
                        <p className="letters-methods"><span>1</span> Pica Pollo </p>
                        <p className="letters-methods"><span>2</span> Pica Pollo </p>
                        <p className="letters-methods"><span>3</span> Pica Pollo </p>
                        <p className="letters-methods"><span>4</span> Pica Pollo </p>
                    </div>
                </div>
            </div>
                

        
        )
    }



}
export default Receipt