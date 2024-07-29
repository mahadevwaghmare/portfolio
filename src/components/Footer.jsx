import "./stylecss.css";
import React from "react";

export default function Footer(){
    return(
        <footer class="body-font bg-skin-primary mt-auto content-end">
                {/* <hr class="my-4 border-skin-primary-muted"/> */}
                {/* <div class="truncate">
                    <div class="flex text-lg gap-3 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="20" height="20" preserveAspectRatio="xMidYMid meet" class="inline h-6 w-6 text-[#1DB954]" viewBox="0 0 16 16">
                            <path fill="currentColor" d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.669 11.538a.498.498 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686zm.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858zm.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288z"></path>
                        </svg>
                        <div class="overflow-hidden">
                            <a target="_blank" rel="noopener noreferrer" class="truncate underline-offset-4 hover:underline
              text-skin-primary-muted
            ">Not Playing
                           
                            </a>
                        </div>
                    </div>
                </div> */}
                <hr class="my-4 border-skin-primary-muted"/>
                <ul class="flex flex-row justify-center gap-4">
                    <li data-umami-event="footer-Work" class="my-2 w-max cursor-pointer list-none hover:underline hover:underline-offset-4
                 text-skin-primary-muted
              ">
                        <a href="/work">Work</a>
                    </li>
                    <li data-umami-event="footer-Craft" class="my-2 w-max cursor-pointer list-none hover:underline hover:underline-offset-4
                 text-skin-primary-muted
              ">
                        <a href="/craft">Craft</a>
                    </li>
                    <li data-umami-event="footer-Socials" class="my-2 w-max cursor-pointer list-none hover:underline hover:underline-offset-4
                 text-skin-primary-muted
              ">
                        <a href="/socials">Socials</a>
                    </li>
                    <li data-umami-event="footer-Spotify" class="my-2 w-max cursor-pointer list-none hover:underline hover:underline-offset-4
                 text-skin-primary-muted
              ">
                        <a href="/spotify">Spotify</a>
                    </li>
                    <li data-umami-event="footer-RSS" class="my-2 w-max cursor-pointer list-none hover:underline hover:underline-offset-4
                 text-skin-primary-muted
              ">
                        <a href="/rss.xml">RSS</a>
                    </li>
                </ul>
            </footer>
    )
}