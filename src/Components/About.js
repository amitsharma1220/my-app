import React from 'react'

export default function About(props) {
    // const [mystyle, setmyStyle] = useState({
    //     color:'black',
    //     backgroundColor:'white'
    // });

    // const [btnText, setBtnText] = useState("Enable Dark Mode");
    // const toggleMode = () =>{
    //     if(mystyle.color === 'black'){
    //         setmyStyle({
    //             color:'white',
    //             backgroundColor:'black',
    //             border:'1px solid white'
    //         });
    //         setBtnText("Enable Normal Mode");
    //     }
    //     else{
    //         setmyStyle({
    //             color:'black',
    //             backgroundColor:'white'
    //         });
    //         setBtnText("Enable Dark Mode");
    //     }
    // };

    let mystyle = {
        color : props.mode === 'dark' ? 'white' : 'black',
        backgroundColor : props.mode === 'dark' ? '#1a1212' : 'white',
        border : '2px solid',
        borderColor : props.mode === 'dark' ? 'white' : 'dark'
    }

    return (
        <div className='container my-3' >
            <h1 className='my-3' style={{color : props.mode === 'dark' ? 'white':'black'}}>About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={mystyle}>
                    <strong>Analyze Your Text</strong>
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample" style={mystyle}>
                    <div className="accordion-body">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem molestias fugiat amet dolorem voluptatem. Asperiores dolores ab, consectetur, optio iure maiores praesentium eum quisquam minus sint qui! Iste eaque similique nobis vel voluptate minima quisquam molestias asperiores ex neque maxime animi, sit sequi debitis. Cum officia architecto ab accusantium voluptatem? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit blanditiis quasi distinctio voluptatibus voluptatem ab labore pariatur nobis, perspiciatis quaerat assumenda tempore minima earum quisquam molestiae? Odio, odit saepe nulla veritatis asperiores impedit sed quos enim culpa ab deleniti ducimus, possimus aspernatur aliquam blanditiis quisquam illum incidunt quia? Labore illo adipisci libero tempore possimus numquam delectus ea modi veritatis ad!
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={mystyle}>
                    <strong>Free To Use</strong>
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample" style={mystyle}>
                    <div className="accordion-body">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam id unde dolores blanditiis repellendus, aut laudantium, deleniti commodi, perspiciatis eum similique quasi dicta corporis eos facilis eaque tempora nisi facere sit alias! Vel harum rerum ea consequuntur ipsum suscipit cupiditate eveniet modi saepe, laudantium, quas dolorem ab cumque delectus aspernatur. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus a in cum ad rem nesciunt aspernatur eum consectetur voluptatum voluptates ullam numquam rerum repellat minima itaque repellendus, illum, debitis officia laboriosam? Repudiandae nemo, doloribus quaerat, quisquam doloremque ratione deserunt aliquam pariatur nihil repellendus rerum consectetur molestias harum architecto tempore nulla?
                    </div>
                    </div>
                </div>
                <div className="accordion-item" >
                    <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={mystyle}>
                        <strong>Browser Compatible</strong>
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample" style={mystyle}>
                    <div className="accordion-body">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus mollitia voluptatum facere vero itaque explicabo sunt magni debitis dolores, ipsum sapiente a ipsam eos harum inventore labore, quo eius tenetur veritatis voluptas! Ipsa in perferendis illum debitis ullam, dolore cumque quo sapiente inventore, maxime dolores, quasi exercitationem! Iste expedita debitis totam quae qui nostrum corporis voluptatibus voluptatem rerum minima, ipsum optio atque alias. Minima minus quas esse cumque repellat? Rem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt nam nobis quidem accusantium? Libero possimus at debitis ea officia illum. Eum, perspiciatis? Exercitationem architecto, qui assumenda enim eius corrupti consequuntur ut possimus voluptates. Exercitationem numquam commodi vero qui corrupti maiores molestias obcaecati? Temporibus quia voluptatum ipsa recusandae officia. Sit, perspiciatis! Sint iusto ipsum vel explicabo, pariatur nulla asperiores repudiandae quod doloremque amet eligendi quos facere ex veritatis iure blanditiis sed. Aperiam impedit at sunt culpa ad expedita ipsum beatae natus?
                    </div>
                    </div>
                </div>
            </div>
            {/* <button className="btn btn-primary my-3" onClick={toggleMode}>{btnText}</button> */}
        </div>
    )
}
