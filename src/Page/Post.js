import React ,{}from 'react';
import Header from '../Components/Header';
import { Footer } from '../Components/Footer';
import { connect } from 'react-redux'
import {withRouter} from 'react-router-dom'
import { fetchReceipt} from '../Redux/FetchAction'

const Receipt = ({receipt,fetchReceipt}) =>{
    
    // useEffect(() => {
    //     fetchReceipt()
    
    // }, [])

    return(
        <div>
            <Header/>
            
                {/* {
                    receipt.loading ? ( <div> ...loading</div>):
                    (<Receipt></Receipt>)
                } */}
            <div>lol</div>
            <Footer/>
        </div>
        
    )
}
const mapStateToProps = state =>({
    receipt:state.receipt
})
const mapDispatchToProps = dispatch =>({
    fetchReceipt(){
        dispatch(fetchReceipt())
    }
})
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Receipt))
    