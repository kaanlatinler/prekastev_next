import React from "react";
import Link from "next/link";

const MyButton = React.forwardRef(({ href, name }, ref) => {
  return (
    <a href={href} ref={ref}>
      {name}
    </a>
  );
});

MyButton.displayName = "MyButton";

const Subheader = ({ title, subtitle, link }) => {
  return (
    <section id="subheader" data-speed="8" data-type="background">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>{title}</h1>
            <ul className="crumb">
              <li>
                <Link href="/index.html" passHref legacyBehavior>
                  <MyButton name={"HOME"} />
                </Link>
              </li>
              <li className="sep">/</li>
              {subtitle.length > 0 ? (
                <>
                  <li>
                    <Link href={`/${link}.html`} passHref legacyBehavior>
                      <MyButton name={title} />
                    </Link>
                  </li>
                  <li className="sep">/</li>
                  <li>{subtitle}</li>
                </>
              ) : (
                ""
              )}
              <li>{title}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subheader;
