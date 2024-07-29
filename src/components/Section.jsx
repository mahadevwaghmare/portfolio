import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import { CiLight } from "react-icons/ci";
import "./stylecss.css";
import { FaLinkedin } from "react-icons/fa6";


export function Section() {
    return (

        <div>
            <div>
                <header className="my-5 rounded-md bg-skin-primary" id="header">
                    <nav className="flex items-center">
                        <div className="ml-0">
                            <a className="text-2xl font-bold text-skin-secondary" href="/">
                                <p className="font-bold">🌱</p>
                            </a>
                        </div>
                        <div className="ml-auto">
                            <div className="flex flex-wrap items-center">
                                <a target="_blank" href="#" data-umami-event="hero-twitter" className=" mr-1 w-max rounded-md p-2 text-lg text-[#1DA1F2] hover:bg-skin-secondary-muted" rel="noopener noreferrer">
                                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="20" height="20" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23Z"></path>
                                    </svg>
                                </a>
                                <a target="_blank" href="#" data-umami-event="hero-github" className="mr-1 w-max rounded-md p-2 text-lg text-skin-secondary hover:bg-skin-secondary-muted" rel="noopener noreferrer">
                                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="20" height="20" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"></path>
                                    </svg>
                                </a>

                                <a target="_blank" href="#" data-umami-event="hero-github" className="mr-1 w-max rounded-md p-2 text-lg text-skin-secondary hover:bg-skin-secondary-muted" rel="noopener noreferrer">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48">
                                        <path fill="#0288D1" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path><path fill="#FFF" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"></path>
                                    </svg>
                                </a>

                                {/* <p className="text-white cursor-pointer text-[18px] ml-2"><p href="#"><FaLinkedin /></p></p> */}
                                {/* <button role="button" aria-label="Toggle dark mode" className="ml-1 rounded-md p-2 hover:bg-skin-secondary-muted">
                                    <svg width="1em" height="1em" viewBox="0 0 24 24" className="text-skin-secondary">
                                        <path fill="currentColor" d="M12 11.807A9.002 9.002 0 0 1 10.049 2a9.942 9.942 0 0 0-5.12 2.735c-3.905 3.905-3.905 10.237 0 14.142c3.906 3.906 10.237 3.905 14.143 0a9.946 9.946 0 0 0 2.735-5.119A9.003 9.003 0 0 1 12 11.807z"></path>
                                    </svg>
                                </button> */}
                            </div>
                        </div>
                    </nav>
                </header>
            </div>
            <div className="flex flex-col bg-skin-primary text-[19px]">
                <div className="flex flex-col">
                    <p className="mt-1  text-skin-primary-muted">
                        I&#x27;m <span className="text-skin-secondary">Mahadev Waghmare</span>
                        , an engineer, learner and builder. <br />
                        {/* Senior Software Engineer - I */}
                        Final Year B.Tech Student
                        <strong> (Computer Science & Engineering)</strong>
                    </p>
                    <div className="flex flex-wrap items-center">
                        <a target="_blank" href="mailto:mahadevwaghmare049@gmail.com" data-umami-event="hero-calendar" className="text-md mt-3 w-max rounded-md p-2 text-lg text-skin-secondary underline underline-offset-4 hover:bg-skin-secondary-muted md:text-lg" rel="noopener noreferrer">
                            Hire Me
                            <svg width="1em" height="1em" viewBox="0 0 24 24" className="inline text-xl">
                                <path fill="currentColor" d="M18 7.05a1 1 0 0 0-1-1L9 6a1 1 0 0 0 0 2h5.56l-8.27 8.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0L16 9.42V15a1 1 0 0 0 1 1a1 1 0 0 0 1-1Z"></path>
                            </svg>
                        </a>
                        <a target="_blank" rel="noopener noreferrer" data-umami-event="hero-resume" className="mr-2 mt-3 w-max rounded-md p-2 text-lg text-skin-secondary underline underline-offset-4 hover:bg-skin-secondary-muted" href="https://drive.google.com/file/d/1WnVWTXGzQtCaQ0Y1pw_Vn1Zgf4f18yyJ/view?usp=drive_link">
                            Resume
                            <svg width="1em" height="1em" viewBox="0 0 24 24" className="inline text-xl">
                                <path fill="currentColor" d="M18 7.05a1 1 0 0 0-1-1L9 6a1 1 0 0 0 0 2h5.56l-8.27 8.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0L16 9.42V15a1 1 0 0 0 1 1a1 1 0 0 0 1-1Z"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

        </div>
    )
}