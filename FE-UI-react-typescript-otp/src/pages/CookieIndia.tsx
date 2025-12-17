import { useState } from "react";
import CookieModal from "../components/UI/CookieModal/CookieModal";

const CookieIndia = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="sectionContent">
        <div className="innerContent">
          <div className="boxContent">
            <h2 className="headTitle">COOKIES NOTICE</h2>
            <p className="desc">
              {" "}
              A cookie is a small text file that is saved on your computer or
              mobile device when you visit a website. Cookies are then sent back
              to the originating website on each subsequent visit, or to another
              website that recognises that cookie, to develop a record of your
              online activity. Cookies on this site may be:
            </p>
            <ul className="list-disc">
              <li>
                <span className="txtDesc">
                  automatically deleted after every visit (session cookies) or
                  remaining in place during multiple visits (persistent
                  cookies);
                </span>
              </li>
              <li>
                <span className="txtDesc">
                  delivered in a first-party (set by us) or third-party (set by
                  another website) context.
                </span>
              </li>
            </ul>
            <p className="desc">
              On this website, we and third parties are using cookies for
              different purposes, including: facilitating your navigation,
              personalising content, tailoring advertising to your interests,
              and measuring site usage. Specifically, we use the following
              cookies:
            </p>
          </div>
          <div className="boxContent">
            <h2 className="headTitle"> THIRD PARTY WEBSITES' COOKIES </h2>
            <p className="desc">
              When using our website, you may encounter embedded content, or you
              may be directed to other websites for certain activities. These
              websites and embedded content may use their own cookies. We do not
              have control over the placement of cookies by other websites, even
              if you are directed to them from our website.
            </p>
            <p className="desc">
              Our Cookie Preferences Tool can be used to customize your cookie
              preferences. The tool will record your consent to our cookie
              policy and will ask for it again every 12 months, to ensure you
              stay up-to-date with changes to our cookie policy. Our tool
              controls the Performance, Functional and Targeting cookies set by
              us. Strictly Necessary cookies cannot be disabled, nor can the
              tool be used to block cookies on third-party websites linked from
              our website.
            </p>
            <p className="desc">
              Many of the cookies used on our website can be also enabled or
              disabled through your browser. To do so, follow the instructions
              usually located within the “Help,” “Tools” or “Edit” menus in your
              browser. Please note that disabling a cookie or category of
              cookies does not delete the cookie from your browser unless
              manually completed through your browser function.
            </p>
          </div>
          <button className="btnClick" onClick={() => setOpen(true)}>
            Cookie settings
          </button>
        </div>
      </div>
      <CookieModal isOpen={open} onClose={() => setOpen(true)} />
    </>
  );
};

export default CookieIndia;
