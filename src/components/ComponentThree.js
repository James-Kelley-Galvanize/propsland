const ComponentThree = (props) => {
    console.log("ComponentThree",props)
    return (
        <>
         Don't eat this if you're allergic to: {props.extraTopping} or {props.toppings}
        </>
    )
}


export default ComponentThree