import CookieConsent from "react-cookie-consent";

export default function ReactCookieConsent() {
  return (
    <>
      <CookieBanner />
      {/* <Cookie />
      <CookieTwo /> */}
    </>
  );
}

function CookieBanner() {
  const handleAccept = () => {
    console.log("Cookies accepted");

    // Enable analytics here
  };

  const handleDecline = () => {
    console.log("Cookies declined");

    // Disable optional cookies here
  };

  return (
    <CookieConsent
      cookieName="cookieConsent"
      onAccept={handleAccept}
      onDecline={handleDecline}
      enableDeclineButton
      buttonText="Accept Cookies"
      declineButtonText="Reject"
    >
      We use cookies on this website.
    </CookieConsent>
  );
}

function Cookie() {
  return (
    <>
      <main className="min-h-screen bg-black text-white">
        <section className="flex min-h-screen items-center justify-center">
          <h1 className="text-5xl font-bold">My Website</h1>
        </section>
      </main>

      <CookieConsent>
        This website uses cookies to improve your experience.
      </CookieConsent>
    </>
  );
}

function CookieTwo() {
  return (
    <>
      <main className="min-h-screen bg-zinc-950 text-white">
        <div className="flex min-h-screen items-center justify-center">
          <h1 className="text-5xl font-bold">My Portfolio</h1>
        </div>
      </main>

      <CookieConsent
        location="bottom"
        buttonText="Accept"
        declineButtonText="Decline"
        enableDeclineButton
        cookieName="websiteCookieConsent"
        expires={365}
        containerClasses="!bg-zinc-900 !px-6 !py-4"
        contentClasses="!text-sm !text-zinc-300"
        buttonClasses="!rounded-lg !bg-yellow-400 !px-5 !py-2 !font-semibold !text-black"
        declineButtonClasses="!rounded-lg !bg-zinc-700 !px-5 !py-2 !text-white"
      >
        We use cookies to improve your browsing experience.
      </CookieConsent>
    </>
  );
}
