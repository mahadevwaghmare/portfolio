import React from "react";
import "./stylecss.css";

export function Navbar(){
    return(
        <div class="bg-[#264e33] p-1 px-3">
            <p class="font-bold text-[15px] text-center text-[#ff0]">
                Hi, I am open to new collaboration opportunities. Know about
                <a data-umami-event="banner-work" href="/about">
                    <span class="underline underline-offset-4 break-words">
                    me &amp;my work here
                    </span>
                </a>
                and reach me via
                <a data-umami-event="banner-mail" href="mailto:hi@shubhamverma.me">
                    <span class="underline underline-offset-4 break-words">
                    mail
                    </span>
                </a>
                or below socials.
            </p>
        </div>
    )
}