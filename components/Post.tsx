"use client";

import { marked } from "marked";


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
    //@ts-ignore
    renderer.link = function (href:string, title:string, text:string) {
        //@ts-ignore
        let link = marked.Renderer.prototype.link.call(this, href, title, text);
        return link.replace("<a", "<a target='_blank' ");

    };
    return <div className="text-base" dangerouslySetInnerHTML={{ __html: marked.parse(text || '', { renderer }) }}></div>
}