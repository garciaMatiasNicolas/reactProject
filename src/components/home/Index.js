import Carrousel from "./Carrousel"
import CarrouselItems from "./Carrousel-items"


const Index = ()=>{

    return(
       
            <div className="d-flex justify-content-between flex-column">
                <Carrousel/>
                <CarrouselItems/>
            </div>
    )
}

export default Index