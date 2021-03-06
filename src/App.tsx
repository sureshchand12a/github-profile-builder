import React, { useState, useEffect } from 'react'
import HomePage from './components/HomePage'
import Navbar from './components/Navbar'
import { AppContext } from './context/AppContext'
import "./components/styles/app.css";
import "./components/styles/slide.css";
import Footer from './components/footer';
import { Toaster } from 'react-hot-toast';

export default function App() {

    const [username, setUsername] = useState<string>("");
    const [aboutme, setAboutme] = useState<string>(`š­ Iām currently working on 
š± Iām currently learning 
šÆ Iām looking to collaborate on 
š¤ Iām looking for help with 
š¬ Ask me about 
š« How to reach me: 
š Pronouns: He/His
ā” Fun fact: `);
    const [activeSkill, setActiveSkill] = useState<string[]>([]);

    return (
        <AppContext.Provider
            value={{
                username, setUsername,
                aboutme, setAboutme,
                activeSkill, setActiveSkill
            }}
        >
            <Navbar />

            <div className="slider_container">
                <div className="container">
                    <div className="row">
                        <div className="offset-md-1 col-md-10">
                            <div className="slider_content shadow">
                                <HomePage />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
            <Toaster />
        </AppContext.Provider>
    )
}
