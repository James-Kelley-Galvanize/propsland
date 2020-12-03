import ComponentThree from './ComponentThree'
import ComponentOne from './ComponentOne'

const ComponentTwo = ({extraTopping, menuItem, toppings}) => {
    // console.log("ComponentTwo")
    return (
        <div>
           OPTION: {menuItem} with {extraTopping}
           <div>
           <ComponentThree toppings={toppings} extraTopping={extraTopping}/>
           </div>
         
        </div>
        
    )
}


export default ComponentTwo