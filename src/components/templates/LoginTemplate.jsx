const LoginTemplate = ({ children, title }) => {
  return (
    <section className="h-full gradient-form bg-gray-200 md:h-screen">
      <div className="container m-auto py-12 px-6 h-full">
        <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
          <div className="xl:w-10/12">
            <div className="block bg-white shadow-lg rounded-lg">
              <div className="lg:flex lg:flex-wrap g-0">
                <div className="lg:w-6/12 px-4 md:px-0">
                  <div className="md:p-12 md:mx-6">
                    <div className="text-center">
                      <img
                        className="mx-auto w-48 mb-4 pt-4"
                        src="/eCommerce_Color.svg"
                        alt="logo"
                      />
                      <h4 className="text-xl font-semibold mt-1 mb-8 pb-1">
                        {title}
                      </h4>
                    </div>
                    {children}
                  </div>
                </div>
                <div className="bg-gradient lg:w-6/12 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none">
                  <div className="text-white px-2 mx-6 my-16 md:px-12 md:mx-6">
                    <span className="text-xl font-semibold mb-6">
                      Un eCommerce diferente...
                    </span>
                    <h4 className="text-4xl">Con buenos precios y garantías</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginTemplate;
