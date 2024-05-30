const OurClients = () => {
  return (
    <>
      <section className="mt-[210px]">
        {/* <div className="grid grid-cols-4 place-items-center gap-16 border-2 p-[90px] mx-[90px] pb-48">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((key) => (
            <figure key={key}>
              <img src={`/src/assets/images/clients/${key}_logo.png`} alt="logo" />
            </figure>
          ))}
        </div> */}
        <div className="flex flex-wrap justify-between items-center px-24 pt-24 pb-36 border-2 max-w-[calc(100%-90px)] m-auto">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((key) => (
            <figure
              key={key}
              className={`basis-1/4 my-12 flex ${
                key % 4 === 0
                  ? 'justify-end'
                  : key % 4 === 1
                  ? 'justify-start'
                  : 'justify-center'
              }`}
            >
              <img
                src={`/src/assets/images/clients/${key}_logo.png`}
                alt="logo"
              />
            </figure>
          ))}
        </div>
      </section>
    </>
  );
};

export default OurClients;
