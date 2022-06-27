import React, { useState } from 'react'
import { generateSocialProfile } from '../../constants/config';
import { SlideProps } from '../../constants/type';
import SliderHeader from '../elements/SliderHeader'
import Skills from './Skills';

function SocialProfile({ onBackPress }: SlideProps) {

    const [visible, setVisible] = useState<boolean>(true);
    const [twitter, setTwitter] = useState<string>("");
    const [codepen, setCodepen] = useState<string>("");
    const [codesandbox, setCodesandbox] = useState<string>("");
    const [stackoverflow, setStackoverflow] = useState<string>("");
    const [linkedin, setLinkedin] = useState<string>("");
    const [facebook, setFacebook] = useState<string>("");
    const [instagram, setInstagram] = useState<string>("");
    const [dribble, setDribble] = useState<string>("");
    const [behance, setBehance] = useState<string>("");
    const [hashnode, setHashnode] = useState<string>("");
    const [medium, setMedium] = useState<string>("");
    const [youtube, setYoutube] = useState<string>("");
    const [codechef, setCodechef] = useState<string>("");
    const [hackerrank, setHackerrank] = useState<string>("");
    const [codeforces, setCodeforces] = useState<string>("");
    const [leetcode, setLeetcode] = useState<string>("");
    const [topcoder, setTopcoder] = useState<string>("");
    const [hackerearth, setHackerearth] = useState<string>("");
    const [rss, setRss] = useState<string>("");

    const updateProfile = () => {
        let markdowncode = '';

        markdowncode += generateSocialProfile("twitter", twitter);
        markdowncode += generateSocialProfile("codepen", codepen);
        markdowncode += generateSocialProfile("codesandbox", codesandbox);
        markdowncode += generateSocialProfile("stackoverflow", stackoverflow);
        markdowncode += generateSocialProfile("linkedin", linkedin);
        markdowncode += generateSocialProfile("facebook", facebook);
        markdowncode += generateSocialProfile("instagram", instagram);
        markdowncode += generateSocialProfile("dribble", dribble);
        markdowncode += generateSocialProfile("behance", behance);
        markdowncode += generateSocialProfile("hashnode", hashnode);
        markdowncode += generateSocialProfile("medium", medium);
        markdowncode += generateSocialProfile("codechef", codechef);
        markdowncode += generateSocialProfile("hackerrank", hackerrank);
        markdowncode += generateSocialProfile("codeforces", codeforces);
        markdowncode += generateSocialProfile("leetcode", leetcode);
        markdowncode += generateSocialProfile("topcoder", topcoder);
        markdowncode += generateSocialProfile("hackerearth", hackerearth);
        markdowncode += generateSocialProfile("rss", rss);

        if( markdowncode.length > 3 ){
            markdowncode = `## 🌐 Socials:\n` + markdowncode;
        }

        localStorage.setItem("social_profile_markdown", markdowncode);
    }

    if( visible ){
        return (
            <div className='text-center social_profile_container'>
                <SliderHeader
                    title="Social Profiles"
                    onBackPress={onBackPress}
                />
    
                <div className="slider_content_settings">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <div className="webflow-style-input">
                                    <input type="text" placeholder="Twitter Username" value={twitter} onChange={(e: React.FormEvent<HTMLInputElement>) => setTwitter(e.currentTarget.value)}></input>
                                    <button type="button">
    
                                        <svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Twitter icon</title><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
                                    </button>
                                </div>
                            </div>
                        </div>
    
                        <div className="col-md-6">
                            <div className="form-group">
                                <div className="webflow-style-input">
                                    <input type="text" placeholder="codepen Username" value={codepen} onChange={(e: React.FormEvent<HTMLInputElement>) => setCodepen(e.currentTarget.value)}></input>
                                    <button type="button">
                                        <svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>CodePen icon</title><path d="M18.144 13.067v-2.134L16.55 12zm1.276 1.194a.628.628 0 01-.006.083l-.005.028-.011.053-.01.031c-.005.016-.01.031-.017.047l-.014.03a.78.78 0 01-.021.043l-.019.03a.57.57 0 01-.08.1l-.026.025a.602.602 0 01-.036.03l-.029.022-.01.008-6.782 4.522a.637.637 0 01-.708 0L4.864 14.79l-.01-.008a.599.599 0 01-.065-.052l-.026-.025-.032-.034-.021-.028a.588.588 0 01-.067-.11l-.014-.031a.644.644 0 01-.017-.047l-.01-.03c-.004-.018-.008-.036-.01-.054l-.006-.028a.628.628 0 01-.006-.083V9.739c0-.028.002-.055.006-.083l.005-.027.011-.054.01-.03a.574.574 0 01.12-.217l.031-.034.026-.025a.62.62 0 01.065-.052l.01-.008 6.782-4.521a.638.638 0 01.708 0l6.782 4.521.01.008.03.022.035.03c.01.008.017.016.026.025a.545.545 0 01.08.1l.019.03a.633.633 0 01.021.043l.014.03c.007.016.012.032.017.047l.01.031c.004.018.008.036.01.054l.006.027a.619.619 0 01.006.083zM12 0C5.373 0 0 5.372 0 12 0 18.627 5.373 24 12 24c6.628 0 12-5.372 12-12 0-6.627-5.372-12-12-12m0 10.492L9.745 12 12 13.51 14.255 12zm.638 4.124v2.975l4.996-3.33-2.232-1.493zm-6.272-.356l4.996 3.33v-2.974l-2.764-1.849zm11.268-4.52l-4.996-3.33v2.974l2.764 1.85zm-6.272-.356V6.41L6.366 9.74l2.232 1.493zm-5.506 1.549v2.134L7.45 12Z" /></svg>
                                    </button>
                                </div>
                            </div>
                        </div>
    
                        <div className="col-md-6">
                            <div className="form-group">
                                <div className="webflow-style-input">
                                    <input type="text" placeholder="code sandbox Username" value={codesandbox} onChange={(e: React.FormEvent<HTMLInputElement>) => setCodesandbox(e.currentTarget.value)}></input>
                                    <button type="button">
                                        <svg viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><title>CodeSandbox icon</title><path d="M2 6l10.455-6L22.91 6 23 17.95 12.455 24 2 18V6zm2.088 2.481v4.757l3.345 1.86v3.516l3.972 2.296v-8.272L4.088 8.481zm16.739 0l-7.317 4.157v8.272l3.972-2.296V15.1l3.345-1.861V8.48zM5.134 6.601l7.303 4.144 7.32-4.18-3.871-2.197-3.41 1.945-3.43-1.968L5.133 6.6z" /></svg>
                                    </button>
                                </div>
                            </div>
                        </div>
    
                        <div className="col-md-6">
                            <div className="form-group">
                                <div className="webflow-style-input">
                                    <input type="text" placeholder="Stackoverflow User ID" value={stackoverflow} onChange={(e: React.FormEvent<HTMLInputElement>) => setStackoverflow(e.currentTarget.value)}></input>
                                    <button type="button">
    
                                        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Stack Overflow icon</title><path d="M18.986 21.865v-6.404h2.134V24H1.844v-8.539h2.13v6.404h15.012zM6.111 19.731H16.85v-2.137H6.111v2.137zm.259-4.852l10.48 2.189.451-2.07-10.478-2.187-.453 2.068zm1.359-5.056l9.705 4.53.903-1.95-9.706-4.53-.902 1.936v.014zm2.715-4.785l8.217 6.855 1.359-1.62-8.216-6.853-1.35 1.617-.01.001zM15.751 0l-1.746 1.294 6.405 8.604 1.746-1.294L15.749 0h.002z" /></svg>
                                    </button>
                                </div>
                            </div>
                        </div>
    
                        <div className="col-md-6">
                            <div className="form-group">
                                <div className="webflow-style-input">
                                    <input type="text" placeholder="linkedin Username" value={linkedin} onChange={(e: React.FormEvent<HTMLInputElement>) => setLinkedin(e.currentTarget.value)}></input>
                                    <button type="button">
    
                                        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn icon</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                                    </button>
                                </div>
                            </div>
                        </div>
    
                        <div className="col-md-6">
                            <div className="form-group">
                                <div className="webflow-style-input">
                                    <input type="text" placeholder="Facebook Username" value={facebook} onChange={(e: React.FormEvent<HTMLInputElement>) => setFacebook(e.currentTarget.value)}></input>
                                    <button type="button">
                                        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Facebook icon</title><path d="M23.9981 11.9991C23.9981 5.37216 18.626 0 11.9991 0C5.37216 0 0 5.37216 0 11.9991C0 17.9882 4.38789 22.9522 10.1242 23.8524V15.4676H7.07758V11.9991H10.1242V9.35553C10.1242 6.34826 11.9156 4.68714 14.6564 4.68714C15.9692 4.68714 17.3424 4.92149 17.3424 4.92149V7.87439H15.8294C14.3388 7.87439 13.8739 8.79933 13.8739 9.74824V11.9991H17.2018L16.6698 15.4676H13.8739V23.8524C19.6103 22.9522 23.9981 17.9882 23.9981 11.9991Z" /></svg>
                                    </button>
                                </div>
                            </div>
                        </div>
    
                        <div className="col-md-6">
                            <div className="form-group">
                                <div className="webflow-style-input">
                                    <input type="text" placeholder="Instagram Username" value={instagram} onChange={(e: React.FormEvent<HTMLInputElement>) => setInstagram(e.currentTarget.value)}></input>
                                    <button type="button">
                                        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram icon</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" /></svg>
                                    </button>
                                </div>
                            </div>
                        </div>
    
                        <div className="col-md-6">
                            <div className="form-group">
                                <div className="webflow-style-input">
                                    <input type="text" placeholder="dribble Username" value={dribble} onChange={(e: React.FormEvent<HTMLInputElement>) => setDribble(e.currentTarget.value)}></input>
                                    <button type="button">
    
                                        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Dribbble icon</title><path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.814zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z" /></svg>
                                    </button>
                                </div>
                            </div>
                        </div>
    
                        <div className="col-md-6">
                            <div className="form-group">
                                <div className="webflow-style-input">
                                    <input type="text" placeholder="behance Username" value={behance} onChange={(e: React.FormEvent<HTMLInputElement>) => setBehance(e.currentTarget.value)}></input>
                                    <button type="button">
                                        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Behance icon</title><path d="M6.938 4.503c.702 0 1.34.06 1.92.188.577.13 1.07.33 1.485.61.41.28.733.65.96 1.12.225.47.34 1.05.34 1.73 0 .74-.17 1.36-.507 1.86-.338.5-.837.9-1.502 1.22.906.26 1.576.72 2.022 1.37.448.66.665 1.45.665 2.36 0 .75-.13 1.39-.41 1.93-.28.55-.67 1-1.16 1.35-.48.348-1.05.6-1.67.767-.61.165-1.252.254-1.91.254H0V4.51h6.938v-.007zM16.94 16.665c.44.428 1.073.643 1.894.643.59 0 1.1-.148 1.53-.447.424-.29.68-.61.78-.94h2.588c-.403 1.28-1.048 2.2-1.9 2.75-.85.56-1.884.83-3.08.83-.837 0-1.584-.13-2.272-.4-.673-.27-1.24-.65-1.72-1.14-.464-.49-.823-1.08-1.077-1.77-.253-.69-.373-1.45-.373-2.27 0-.803.135-1.54.403-2.23.27-.7.644-1.28 1.12-1.79.495-.51 1.063-.895 1.736-1.194s1.4-.433 2.22-.433c.91 0 1.69.164 2.38.523.67.34 1.22.82 1.66 1.4.44.586.75 1.26.94 2.02.19.75.25 1.54.21 2.38h-7.69c0 .84.28 1.632.71 2.065l-.08.03zm-10.24.05c.317 0 .62-.03.906-.093.29-.06.548-.165.763-.3.21-.135.39-.328.52-.583.13-.24.19-.57.19-.96 0-.75-.22-1.29-.64-1.62-.43-.32-.99-.48-1.69-.48H3.24v4.05H6.7v-.03zm13.607-5.65c-.352-.385-.94-.592-1.657-.592-.468 0-.855.074-1.166.238-.302.15-.55.35-.74.59-.19.24-.317.48-.392.75-.075.26-.12.5-.135.71h4.762c-.07-.75-.33-1.3-.68-1.69v.01zM6.52 10.45c.574 0 1.05-.134 1.425-.412.374-.27.554-.72.554-1.338 0-.344-.07-.625-.18-.846-.13-.22-.3-.39-.5-.512-.21-.124-.45-.21-.72-.257-.27-.053-.56-.074-.84-.074H3.23v3.44h3.29zm9.098-4.958h5.968v1.454h-5.968V5.48v.01z" /></svg>
                                    </button>
                                </div>
                            </div>
                        </div>
    
                        <div className="col-md-6">
                            <div className="form-group">
                                <div className="webflow-style-input">
                                    <input type="text" placeholder="hashnode Username (with @" value={hashnode} onChange={(e: React.FormEvent<HTMLInputElement>) => setHashnode(e.currentTarget.value)}></input>
                                    <button type="button">
    
                                        <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24"><title>Hashnode icon</title><path d="M3.84 0h16.32A3.84 3.84 0 0 1 24 3.84v16.32A3.84 3.84 0 0 1 20.16 24H3.84A3.84 3.84 0 0 1 0 20.16V3.84A3.84 3.84 0 0 1 3.84 0zm14.175 21.638l-.004-.001a2.577 2.577 0 0 0 .209-5.139l-4.917-8.682c-.719-1.292-2.108-1.236-2.609.598-.43 1.736-.319 3.372-.444 5.348-.001.013-.01.024-.023.027s-.026-.002-.033-.013l-4.39-8.751c.358-.281.568-.711.569-1.167a1.459 1.459 0 1 0-1.459 1.459c.069 0 .125-.014.18-.014 1.848 4.75 3.904 10.293 4.64 11.571.5 1.222 2.209.833 2.251-.486l.18-6.932c0-.042.055-.042.07-.014l3.526 8.389a2.573 2.573 0 0 0 2.254 3.806z" /></svg>
                                    </button>
                                </div>
                            </div>
                        </div>
    
                        <div className="col-md-6">
                            <div className="form-group">
                                <div className="webflow-style-input">
                                    <input type="text" placeholder="Medium Username (with @" value={medium} onChange={(e: React.FormEvent<HTMLInputElement>) => setMedium(e.currentTarget.value)}></input>
                                    <button type="button">
    
                                        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Medium icon</title><path d="M0 0v24h24V0H0zm19.938 5.686L18.651 6.92a.376.376 0 0 0-.143.362v9.067a.376.376 0 0 0 .143.361l1.257 1.234v.271h-6.322v-.27l1.302-1.265c.128-.128.128-.165.128-.36V8.99l-3.62 9.195h-.49L6.69 8.99v6.163a.85.85 0 0 0 .233.707l1.694 2.054v.271H3.815v-.27L5.51 15.86a.82.82 0 0 0 .218-.707V8.027a.624.624 0 0 0-.203-.527L4.019 5.686v-.27h4.674l3.613 7.923 3.176-7.924h4.456v.271z" /></svg>
                                    </button>
                                </div>
                            </div>
                        </div>
    
                        <div className="col-md-6">
                            <div className="form-group">
                                <div className="webflow-style-input">
                                    <input type="text" placeholder="youtube Username" value={youtube} onChange={(e: React.FormEvent<HTMLInputElement>) => setYoutube(e.currentTarget.value)}></input>
                                    <button type="button">
    
                                        <svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>YouTube icon</title><path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" /></svg>
                                    </button>
                                </div>
                            </div>
                        </div>
    
                        <div className="col-md-6">
                            <div className="form-group">
                                <div className="webflow-style-input">
                                    <input type="text" placeholder="codechief Username" value={codechef} onChange={(e: React.FormEvent<HTMLInputElement>) => setCodechef(e.currentTarget.value)}></input>
                                    <button type="button">
    
                                        <svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>CodeChef icon</title><path d="M11.007 0c-.787.031-1.515.37-2.222.685a12.27 12.27 0 01-1.864.703c-.635.176-1.3.354-1.814.788-.222.18-.356.439-.529.662-.309.486-.448 1.067-.457 1.638.036.61.216 1.2.376 1.786.368 1.262.807 2.503 1.197 3.759.366 1.161.703 2.344 1.294 3.416.197.394.35.808.535 1.206.027.067.052.158.142.149.136-.012.243-.115.368-.164.828-.414 1.74-.642 2.655-.749.708-.074 1.43-.078 2.131.054.72.163 1.417.426 2.092.724.36.172.719.348 1.088.498.048.04.135.058.16-.016.219-.327.469-.635.667-.976.495-1.061.522-2.279 1.038-3.331.358-.721.892-1.337 1.266-2.048.175-.266.431-.467.588-.747.437-.669.78-1.398 1.05-2.15.102-.293.172-.612.09-.919-.06-.299-.202-.57-.318-.848a2.481 2.481 0 00-.278-.66c-.407-.676-1.07-1.149-1.743-1.536-1.045-.59-2.196-.969-3.351-1.28A20.733 20.733 0 0011.426.01a5.005 5.005 0 00-.42-.01zm-.889.606c-.261.223-.363.569-.468.883-.168.568-.263 1.163-.207 1.756.064 1.062.197 2.12.33 3.175.18 1.352.387 2.7.677 4.034.026.165.064.347.05.51-.115-.175-.182-.383-.258-.58-.25-.765-.432-1.549-.604-2.334a26.008 26.008 0 01-.562-4.317c-.025-.843-.004-1.726.37-2.501.118-.226.259-.46.48-.597a.411.411 0 01.218-.049l-.026.02zM6.516 1.77c.128 0 .139.159.168.252.266.798.422 1.628.679 2.428.174.649.238 1.323.308 1.991.097 1.039.108 2.085.246 3.12.026.199.082.393.119.59.01.067-.059.049-.083.014-.148-.161-.183-.391-.246-.592-.16-.645-.242-1.305-.334-1.962-.174-1.316-.287-2.64-.529-3.945-.158-.612-.356-1.215-.46-1.838.006-.051.093-.048.132-.058zM4.589 3.607c.229.056.365.268.512.434.4.535.54 1.204.695 1.843.283 1.265.446 2.553.725 3.82.131.666.293 1.326.507 1.971.014.051.035.133.038.17-.233-.43-.393-.896-.565-1.353-.598-1.698-.823-3.496-1.3-5.228-.133-.478-.308-.95-.596-1.358-.047-.088-.08-.204-.037-.297.006-.004.014-.003.02-.002zm12.646 13.196c-.136.007-.31.11-.276.267.094.218.334.308.526.416.441.216.938.29 1.358.546.092.06.149.197.064.287-.18.266-.47.44-.723.634-.372.266-.777.51-1.057.879-.066.107-.041.267.082.32.109.079.243.018.338-.051.518-.294.995-.654 1.478-1.002.32-.239.644-.477.926-.76.085-.135-.03-.274-.118-.371-.273-.285-.62-.487-.965-.67a4.959 4.959 0 00-1.458-.495 1.251 1.251 0 00-.175 0zM5.96 16.83c-.527.134-.997.42-1.474.673-.425.243-.854.496-1.205.841a.699.699 0 00-.172.488c.065.108.2.14.301.206.852.442 1.735.822 2.63 1.168.132.042.265.113.406.107.158-.02.309-.204.213-.356-.146-.243-.42-.361-.65-.506-.547-.303-1.154-.512-1.636-.918-.046-.091.094-.128.142-.18.549-.395 1.229-.593 1.713-1.077.089-.09.164-.259.048-.358-.086-.073-.206-.087-.316-.088zm8.115.793c-.43.027-.835.431-.774.876.032.259.089.525.228.749.12.18.33.286.546.287.273.031.59-.059.726-.318.137-.237.212-.514.205-.787-.038-.46-.466-.845-.93-.807zm-4.49.01c-.464.028-.807.505-.77.953.011.444.315.902.765.994.352.06.71-.19.803-.53.125-.35.132-.761-.044-1.095-.157-.25-.478-.327-.754-.322zm.112.653c.241.064.294.47.045.558-.141.034-.239-.12-.234-.244-.008-.127.05-.287.189-.314zm4.437.143c.097 0 .226.071.19.187-.013.171-.215.333-.377.226-.132-.07-.172-.296-.02-.368a.418.418 0 01.207-.045zm-3.518 2.977c-.553.051-1.044.335-1.542.559-.304.156-.662.312-1.005.187-.377-.12-.707-.35-1.059-.52-.075-.013-.061.077-.047.122.081.53.129 1.102.454 1.55.338.437.902.618 1.433.667.797.072 1.642-.118 2.271-.629.309-.262.571-.631.585-1.049-.006-.324-.244-.596-.524-.734a1.085 1.085 0 00-.566-.153zm2.58.008c-.396.052-.815.262-.972.65-.129.358.034.748.272 1.02.426.509 1.07.793 1.718.884.577.078 1.186.014 1.714-.24.438-.225.767-.655.85-1.142.064-.291.081-.59.124-.884-.066-.078-.148.038-.218.052-.337.142-.647.367-1.01.435-.363.024-.687-.172-1.015-.293-.43-.178-.851-.403-1.315-.478a1.21 1.21 0 00-.147-.004zm-2.881-5.091c-.07 0-.143.014-.216.03a2.93 2.93 0 00-.454.152c-.15.061-.292.127-.407.18a4.07 4.07 0 01-.218.092.277.277 0 01-.182-.034c-.062-.037-.12-.101-.141-.255l-.27.038c.031.218.14.37.27.45.13.079.268.09.378.067.085-.018.16-.058.276-.111.116-.053.255-.118.397-.176.143-.058.288-.11.41-.138a.52.52 0 01.252-.009c.14.06.19.13.215.179.025.05.03.067.03.067l.263-.06s.002-.024-.05-.128a.678.678 0 00-.35-.307.482.482 0 00-.204-.037zm2.744 3.937a.136.136 0 00-.102.05s-.122.148-.286.295c-.165.148-.38.28-.493.283-.112.003-.314-.118-.47-.26-.155-.14-.267-.284-.267-.284a.136.136 0 10-.214.167s.124.16.299.319c.175.16.397.337.66.33.259-.008.484-.19.666-.352.182-.163.315-.325.315-.325a.136.136 0 00-.108-.223zM11.007.001c-.787.03-1.515.368-2.222.684a12.27 12.27 0 01-1.864.703c-.635.176-1.3.354-1.814.788-.222.18-.356.44-.529.663-.309.485-.448 1.066-.457 1.637.036.61.216 1.2.376 1.786.368 1.263.807 2.503 1.197 3.759.366 1.161.703 2.344 1.294 3.417.197.393.35.807.535 1.205.027.067.052.158.142.15.136-.013.243-.116.368-.165.828-.414 1.74-.641 2.655-.749.708-.074 1.43-.078 2.131.055.72.163 1.417.425 2.092.723.36.172.719.348 1.088.498.048.04.135.058.16-.016.219-.327.469-.635.667-.975.495-1.062.522-2.28 1.038-3.332.358-.721.892-1.336 1.266-2.047.175-.266.431-.468.588-.747.437-.67.78-1.4 1.05-2.151.102-.293.172-.612.09-.919-.06-.298-.202-.57-.318-.848a2.481 2.481 0 00-.278-.659c-.407-.676-1.07-1.15-1.743-1.536-1.045-.591-2.196-.97-3.351-1.281A20.733 20.733 0 0011.426.01a5.005 5.005 0 00-.42-.01zm-.889.606c-.261.222-.363.568-.468.883-.168.567-.263 1.163-.207 1.755.064 1.062.197 2.12.33 3.175.18 1.352.387 2.701.677 4.034.026.165.064.347.05.51-.115-.175-.182-.383-.258-.58-.25-.765-.432-1.549-.604-2.334a26.008 26.008 0 01-.562-4.316c-.025-.844-.004-1.727.37-2.502.118-.225.259-.46.48-.597a.411.411 0 01.218-.049l-.026.02zM6.516 1.77c.128 0 .139.16.168.252.266.798.422 1.628.679 2.429.174.648.238 1.322.308 1.99.097 1.04.108 2.086.246 3.12.026.199.082.394.119.59.01.068-.059.05-.083.014-.148-.16-.183-.39-.246-.592-.16-.645-.242-1.304-.334-1.962-.174-1.315-.287-2.64-.529-3.945-.158-.612-.356-1.215-.46-1.838.006-.051.093-.048.132-.058zM4.589 3.608c.229.055.365.267.512.433.4.535.54 1.204.695 1.843.283 1.265.446 2.554.725 3.82.131.666.293 1.327.507 1.971.014.051.035.133.038.17-.233-.43-.393-.896-.565-1.352-.598-1.7-.823-3.497-1.3-5.23-.133-.477-.308-.95-.596-1.357-.047-.087-.08-.204-.037-.296.006-.004.014-.003.02-.002zm12.646 13.195c-.136.007-.31.11-.276.268.094.217.334.307.526.416.441.215.938.289 1.358.545.092.06.149.197.064.287-.18.267-.47.44-.723.634-.372.266-.777.51-1.057.879-.066.107-.041.267.082.32.109.079.243.019.338-.05.518-.295.995-.655 1.478-1.002.32-.24.644-.478.926-.761.085-.135-.03-.274-.118-.37-.273-.286-.62-.488-.965-.672a4.959 4.959 0 00-1.458-.493 1.251 1.251 0 00-.175-.001zm-11.276.029c-.527.133-.997.42-1.474.672-.425.243-.854.497-1.205.842a.699.699 0 00-.172.487c.065.109.2.14.301.206.852.442 1.735.823 2.63 1.168.132.042.265.113.406.108.158-.02.309-.205.213-.357-.146-.243-.42-.361-.65-.506-.547-.303-1.154-.512-1.636-.918-.046-.09.094-.128.142-.18.549-.394 1.229-.592 1.713-1.077.089-.09.164-.258.048-.357-.086-.074-.206-.088-.316-.088zm8.115.792c-.43.028-.835.432-.774.876.032.26.089.526.228.75.12.179.33.285.546.287.273.03.59-.06.726-.319.137-.236.212-.514.205-.787-.038-.46-.466-.844-.93-.807zm-4.49.01c-.464.028-.807.505-.77.953.011.444.315.902.765.995.352.059.71-.19.803-.53.125-.35.132-.762-.044-1.096-.157-.249-.478-.327-.754-.322zm.112.654c.241.063.294.47.045.557-.141.034-.239-.12-.234-.244-.008-.127.05-.287.189-.313zm4.437.142c.097 0 .226.072.19.187-.013.172-.215.333-.377.227-.132-.071-.172-.297-.02-.369a.418.418 0 01.207-.045zm-3.518 2.977c-.553.052-1.044.336-1.542.56-.304.155-.662.311-1.005.186-.377-.119-.707-.35-1.059-.52-.075-.012-.061.078-.047.122.081.53.129 1.102.454 1.55.338.438.902.619 1.433.667.797.072 1.642-.118 2.271-.629.309-.262.571-.63.585-1.049-.006-.324-.244-.596-.524-.734a1.085 1.085 0 00-.566-.153zm2.58.008c-.396.052-.815.262-.972.65-.129.359.034.748.272 1.021.426.508 1.07.792 1.718.883.577.078 1.186.015 1.714-.24.438-.225.767-.655.85-1.142.064-.29.081-.59.124-.884-.066-.077-.148.039-.218.052-.337.143-.647.367-1.01.436-.363.024-.687-.172-1.015-.294-.43-.178-.851-.402-1.315-.477a1.21 1.21 0 00-.147-.004z" /></svg>
                                    </button>
                                </div>
                            </div>
                        </div>
    
                        <div className="col-md-6">
                            <div className="form-group">
                                <div className="webflow-style-input">
                                    <input type="text" placeholder="hackerrank Username" value={hackerrank} onChange={(e: React.FormEvent<HTMLInputElement>) => setHackerrank(e.currentTarget.value)}></input>
                                    <button type="button">
    
                                        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>HackerRank icon</title><path d="M12 0c1.285 0 9.75 4.886 10.392 6 .645 1.115.645 10.885 0 12S13.287 24 12 24s-9.75-4.885-10.395-6c-.641-1.115-.641-10.885 0-12C2.25 4.886 10.715 0 12 0zm2.295 6.799c-.141 0-.258.115-.258.258v3.875H9.963V6.908h.701c.141 0 .254-.115.254-.258 0-.094-.049-.176-.123-.221L9.223 4.92c-.049-.063-.141-.109-.226-.109-.084 0-.16.045-.207.107L7.11 6.43c-.072.045-.12.126-.12.218 0 .143.113.258.255.258h.704l.008 10.035c0 .145.111.258.254.258h1.492c.142 0 .259-.115.259-.256v-4.004h4.073v4.152h-.699c-.143 0-.256.115-.256.258 0 .092.048.174.119.219l1.579 1.51c.044.061.141.109.225.109.085 0 .159-.045.208-.109l1.679-1.51c.072-.045.12-.127.12-.219 0-.143-.115-.258-.255-.258h-.704l-.007-10.034c0-.145-.114-.26-.255-.26h-1.494v.002z" /></svg>
                                    </button>
                                </div>
                            </div>
                        </div>
    
                        <div className="col-md-6">
                            <div className="form-group">
                                <div className="webflow-style-input">
                                    <input type="text" placeholder="codeforces Username" value={codeforces} onChange={(e: React.FormEvent<HTMLInputElement>) => setCodeforces(e.currentTarget.value)}></input>
                                    <button type="button">
    
                                        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Codeforces icon</title><path d="M4.5 7.5C5.328 7.5 6 8.172 6 9v10.5c0 .828-.672 1.5-1.5 1.5h-3C.673 21 0 20.328 0 19.5V9c0-.828.673-1.5 1.5-1.5h3zm9-4.5c.828 0 1.5.672 1.5 1.5v15c0 .828-.672 1.5-1.5 1.5h-3c-.827 0-1.5-.672-1.5-1.5v-15c0-.828.673-1.5 1.5-1.5h3zm9 7.5c.828 0 1.5.672 1.5 1.5v7.5c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5V12c0-.828.672-1.5 1.5-1.5h3z" /></svg>
                                    </button>
                                </div>
                            </div>
                        </div>
    
                        <div className="col-md-6">
                            <div className="form-group">
                                <div className="webflow-style-input">
                                    <input type="text" placeholder="leetcode Username" value={leetcode} onChange={(e: React.FormEvent<HTMLInputElement>) => setLeetcode(e.currentTarget.value)}></input>
                                    <button type="button">
    
                                        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LeetCode icon</title><path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.902-.038l-10.1 10.101c-.981.982-1.494 2.337-1.494 3.835 0 1.498.513 2.895 1.494 3.875l4.347 4.361c.981.979 2.337 1.452 3.834 1.452s2.853-.512 3.835-1.494l2.609-2.637c.514-.514.496-1.365-.039-1.9s-1.386-.553-1.899-.039zM20.811 13.01H10.666c-.702 0-1.27.604-1.27 1.346s.568 1.346 1.27 1.346h10.145c.701 0 1.27-.604 1.27-1.346s-.569-1.346-1.27-1.346z" /></svg>
                                    </button>
                                </div>
                            </div>
                        </div>
    
                        <div className="col-md-6">
                            <div className="form-group">
                                <div className="webflow-style-input">
                                    <input type="text" placeholder="topcoder Username" value={topcoder} onChange={(e: React.FormEvent<HTMLInputElement>) => setTopcoder(e.currentTarget.value)}></input>
                                    <button type="button">
    
                                        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Topcoder icon</title><path d="M20.514 16.517c.192-.026.376-.112.542-.21.345-.201.646-.473.936-.75.226-.214.444-.436.653-.67.12-.146.256-.296.376-.451.105-.143.21-.285.315-.436.076-.115.15-.23.212-.35.33-.598.601-1.336.361-2.016-.031-.094-.076-.185-.121-.27-.091-.154-.211-.291-.331-.413-.21-.201-.468-.36-.723-.489-.376-.188-.781-.313-1.201-.406-.603-.137-1.205-.201-1.821-.226-.842-.041-1.684-.006-2.512.076.105.109.196.225.301.338.195.226.392.467.571.723.227.3.437.631.647.962.602.992 1.054 2.075 1.383 3.173.105.33.182.662.255 1.008.031.12.048.256.077.391l.08.016zm-18.585-.151c.052-.204.105-.412.16-.616.08-.301.176-.6.266-.896.069-.217.15-.429.227-.645.09-.225.185-.45.277-.676.033-.076.061-.153.098-.23.102-.215.211-.427.322-.637.135-.242.256-.481.391-.707.18-.316.377-.602.586-.888l.016-.015c-.331-.016-.677-.016-1.008-.016-.24 0-.496.016-.736.045-.166.016-.33.031-.496.061-.121.016-.24.045-.361.075-.586.15-1.248.421-1.533 1.007-.031.076-.061.151-.091.242-.032.12-.047.27-.047.406 0 .211.045.421.089.632.091.315.242.617.393.902.285.496.646.962 1.022 1.398l.481.525-.056.033zm18.151-.045c-.492-2.302-1.546-4.532-3.194-6.236l-.083-.086-.041-.04c-.2.014-.399.045-.603.074-2.154.332-4.26.918-6.285 1.715.168.045.336.09.507.15.706.226 1.413.466 2.108.723 2.421.902 4.755 2.029 6.998 3.322l.586.347.007.031zm-17.706-.139l.873-.843c.15-.143.15-.142.301-.28 1.533-1.354 3.318-2.375 5.18-3.217-.275-.076-.549-.136-.824-.195-1.053-.241-2.113-.437-3.188-.527-.084.121-.166.227-.247.346-.181.271-.354.527-.517.813-.15.24-.271.481-.392.723-.104.195-.21.391-.286.586-.029.045-.045.105-.06.15-.091.226-.195.451-.286.677-.074.181-.135.36-.195.541-.09.286-.18.557-.255.843-.046.15-.091.301-.12.45l.016-.067zm6.914-4.587c.21-.091.417-.175.628-.255.233-.094.466-.182.7-.269 1.023-.376 2.061-.692 3.113-.947.873-.211 1.744-.376 2.633-.511l.06-.016c-.241-.226-.496-.421-.752-.617-.481-.36-1.007-.662-1.563-.902-1.295-.556-2.723-.736-4.105-.48-.753.134-1.491.39-2.167.752-1.067.571-2 1.383-2.768 2.315l-.03.016.466.044.572.076c.813.135 1.594.301 2.391.48.301.076.587.151.873.227l-.051.087z" /></svg>
                                    </button>
                                </div>
                            </div>
                        </div>
    
                        <div className="col-md-6">
                            <div className="form-group">
                                <div className="webflow-style-input">
                                    <input type="text" placeholder="Hackerearth Username" value={hackerearth} onChange={(e: React.FormEvent<HTMLInputElement>) => setHackerearth(e.currentTarget.value)}></input>
                                    <button type="button">
    
                                        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>HackerEarth icon</title><path d="M20.983.002H9.508v6.494h.11a3.629 3.629 0 0 1 3.557-1.332l-.023-.004c1.966.144 3.91 1.336 4.02 5.158v7.554a.299.299 0 0 1-.287.287h-2.11a.287.287 0 0 1-.287-.287V10.55c0-1.778-.585-3.114-2.341-3.114h-.038a2.606 2.606 0 0 0-2.6 2.78v-.008 7.665a.287.287 0 0 1-.287.287H7.124a.287.287 0 0 1-.287-.287V.004H3.193L3.126.003c-.823 0-1.493.652-1.523 1.468V22.458c.03.857.73 1.541 1.59 1.546h17.792a1.458 1.458 0 0 0 1.413-1.55v.004V1.474A1.38 1.38 0 0 0 21.021.005l-.038.001h.002zm-2.54 20.983H5.555V19.66h12.888z" /></svg>
                                    </button>
                                </div>
                            </div>
                        </div>
    
                        <div className="col-md-6">
                            <div className="form-group">
                                <div className="webflow-style-input">
                                    <input type="text" placeholder="Rss Feed URL" value={rss} onChange={(e: React.FormEvent<HTMLInputElement>) => setRss(e.currentTarget.value)}></input>
                                    <button type="button">
                                        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>RSS icon</title><path d="M19.199 24C19.199 13.467 10.533 4.8 0 4.8V0c13.165 0 24 10.835 24 24h-4.801zM3.291 17.415c1.814 0 3.293 1.479 3.293 3.295 0 1.813-1.485 3.29-3.301 3.29C1.47 24 0 22.526 0 20.71s1.475-3.294 3.291-3.295zM15.909 24h-4.665c0-6.169-5.075-11.245-11.244-11.245V8.09c8.727 0 15.909 7.184 15.909 15.91z" /></svg>
                                    </button>
                                </div>
                            </div>
                        </div>
    
                        <div className="col-md-12">
                            <div className='btn_container'>
                                <button type="button" className="btn" onClick={() => {
                                    updateProfile();
                                    setVisible(false);
                                }}>Next</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <Skills
            onBackPress={() => setVisible(true)}
        />
    )
}

export default SocialProfile