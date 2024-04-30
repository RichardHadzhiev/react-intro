import ReactLogo from "../assets/react.svg"

function Example (){

    const title = "Some JSX examples"

    const user = {
        firstName: "Richard",
        age: 28
    }
    function renderSubtitle (){
        return <h2>This is the subtitle.</h2>
    }

    const divStyle = {
        border: '1px solid white',
        margin: "2em auto",
        padding: "1em",
        borderRadius: "1em"

    }
    return (
        <div style={divStyle}>
            <img src="vite.svg" alt="" />
            <img src={ReactLogo} alt="" />
            <h1>Some JSX</h1>
            <h2>{title}</h2>
            {renderSubtitle()}
            <div className="box">
                <p>Name: {user.firstName}</p>
                <p>Age: {user.age}</p>
            </div>
        
        </div>
    )
}

export default Example;