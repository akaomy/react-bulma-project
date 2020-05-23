import React from "react";
import '../App.css'

function MainContent() {
    return (
        <div className="tile is-ancestor tile-margin-top">
            <div className="tile is-4 is-vertical is-parent">
                <div className="tile is-child box">
                    <h2 className="title">Lorem ipsum</h2>
                    <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to
                        demonstrate the visual form of a document or a typeface without relying on meaningful
                        content.</p>
                </div>
                <div className="tile is-child box">
                    <h2 className="title">Source text</h2>
                    <p>The discovery of the text's origin is attributed to Richard McClintock, a Latin scholar at
                        Hampden–Sydney College. McClintock connected Lorem ipsum to Cicero's writing sometime
                        before 1982 while searching for instances of the Latin word consectetur, which was rarely
                        used in classical literature.[4] McClintock first published his discovery in a 1994 letter
                        to the editor of Before & After magazine, contesting the editor's earlier claim that Lorem
                        ipsum had no meaning.[5]</p>
                </div>
            </div>
            <div className="tile is-parent">
                <div className="tile is-child box">
                    <h2 className="title">Variations</h2>
                    <p>Lorem ipsum passages were popularized on Letraset dry-transfer sheets from the early 1970s,
                        which were produced to be used by graphic designers for filler text.[3][4] Aldus Corporation
                        created a version in the mid-1980s for their desktop publishing program PageMaker.</p>
                    <img src="https://via.placeholder.com/850x500" alt="placeholder"/>
                </div>
            </div>
        </div>
    );
}

export default MainContent;