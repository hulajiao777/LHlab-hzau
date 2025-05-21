"use client";

import { marked } from "marked";

// import Markdown from "./ClientMd";
import { getMd } from "./fetch-md";


export default function Post({ post }: any) {

    return <>

        <div className="main content">
            <div className="left">
                <article>
                    <Markdown text={post} />
                </article>
            </div>

            {/* <div className="right"> */}
                {/* < img src="https://ice.frostsky.com/2024/04/01/6d16b318ac3766b0d06546998c5066ed.jpeg" alt="" /> */}
            {/* </div> */}
        </div>
    </>
}



 function Markdown({ text }: any) {
    var renderer = new marked.Renderer();
    renderer.link = function (href:any, title:any, text:any) {

        let link = marked.Renderer.prototype.link.call(this, href, title, text);
        return link.replace("<a", "<a target='_blank' ");

    };
    return <div className="text-base" dangerouslySetInnerHTML={{ __html: marked.parse(text || '', { renderer }) }}></div>
}