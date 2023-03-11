import React from "react";

function Footer() {
  return (
    <>
      <div id="footer" className="flex items-center justify-center">
        <span className="font-monospace dark-slate text-xs lg:text-sm p-8">
         Built by{" "}
          <a
            className="hover-accent"
            href="https://github.com/ghousek1"
            target="_blank"
            rel="noreferrer"
          >
            Ghouse K1
          </a>
        </span>
      </div>
    </>
  );
}

export default Footer;
