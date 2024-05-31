const PageFooter = () => {
  return (
    <>
      <footer className="flex justify-between pt-40 pb-44 max-w-[calc(100%-90px)] m-auto px-[130px]">
        <div className="flex">
          <div className="border-r-2 pr-24 mr-24">
            <p className="text-4xl mb-12 mt-1">
              tomorrow
              <br />
              heads
              <span className="inline-block border-2 border-white rounded-full ml-3 -mb-[4px] w-[32px] h-[32px]" />
            </p>
            <p className="leading-[1.25rem]">
              Your guide into tomorrow
              <br />
              2020 All rights reserved.
            </p>
          </div>
          <ul className="flex flex-col justify-around text-lg">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Work</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="w-[250px] text-right">
          <p className="mb-7">
            We are always happy to discuss Your ideas, products and projects!
          </p>
          <a href="tel:+380990667188" className="block font-bold mb-1">
            +38 099 066 71 88
          </a>
          <a
            href="mailto:tomorrowheads@gmail.com"
            className="block font-bold mb-1"
          >
            tomorrowheads@gmail.com
            <instagram />
          </a>
          <p className="font-bold mb-6">Kyiv, Ukraine</p>
          <ul className="flex *:ml-5 ml-auto justify-end">
            <li>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon-instagram" />
              </a>
            </li>
            <li>
              <a
                href="https://telegram.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon-telegram" />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon-facebook" />
              </a>
            </li>
            <li>
              <a
                href="https://www.behance.net"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon-behance" />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default PageFooter;
