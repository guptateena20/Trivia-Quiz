import React from 'react'
import { useNavigate } from 'react-router-dom'
import "../Styles/StartPage/StartPage.css"

const Startpage = () => {
    const navigate = useNavigate()
    function handleClick(){
        navigate("/quiz", {replace : true})
    }
    return (
        <>
            <div className='main_container'>
                <div className='inner_div'>
                    <h1 className='quizzical'>Quizzical</h1>
                    <p className='description'>Some description if needed</p>
                    <div className='start_page_btn_div'>
                        <button className='start_page_btn' onClick = {handleClick}>Start quiz</button>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Startpage