import React from 'react'
import NavBar from '../NavBar';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom"
function KitchenMenu() {
    const navigate = useNavigate()
    return (
        <>

            <center style={{ marginTop: '200px' }}>
                <h1>Welcome to food's kitchen</h1>
                <div>
                    <Button size="medium" variant="contained" onClick={() => navigate("/menu")} >Go to Menu</Button>
                </div>
            </center>

        </>
    )
}

export default KitchenMenu