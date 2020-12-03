import ComponentTwo from "./ComponentTwo"


const ComponentOne = ({menuItem, toppings}) => {

    // console.log("ComponentOne props:", props);

    return (
        <>
        <h2>MENU</h2>
        <div>
            Item: {menuItem}
        </div>
        {/* <div>
            Toppings: {toppings}
        </div> */}
        <div>
            Says: I'm a {menuItem }
        </div>

            <ComponentTwo menuItem={menuItem} toppings={toppings} extraTopping={"cheese"}/>

            <ComponentTwo menuItem={menuItem} toppings={toppings} extraTopping={"bacon"}/>
        </>
    )
}

export default ComponentOne