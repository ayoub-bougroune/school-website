import React from 'react';
import { P, adresses, phone, Email} from "../../constants/contact"

const ContactSection = () => {
  return (
    <div className="container mt-60 my-32 mx-auto md:px-6">
        <div className="text-center mt-10 md:text-left ">
        <h1 className="font-bold text-2xl md:text-4xl ml-2 md:ml-40 p-4 md:p-7 ">
          Contact
        </h1>
        <div className="border-b-4 w-14 ml-48 border-gray-500"></div>
       </div>
          <section className="mb-32 m-40">
            <div className="flex flex-wrap">
              <div className="mb-10 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:px-6">
                <h2 className="mb-6 text-lg font-bold">The school is closed in August. It will open on September 1, 2022 from 9 a.m. to 4:30 p.m.</h2>
                <p className="mb-6 text-neutral-700 dark:text-neutral-700">
                 {P}
                </p>
                <span className="font-bold text-2xl text-black mt-5 mb-5">ADDRESS</span>
                <p className="mb-5 mt-5 text-neutral-700 dark:text-neutral-700">
                 {adresses}
                </p>
                <span className="font-bold text-2xl text-black mt-5 mb-5">CONTACT US</span>
                <p className="mb-5 mt-5 text-neutral-700 dark:text-neutral-700">
                 Tel:{phone}
                </p>
                <p className="mb-2 mt-5 text-neutral-700 dark:text-neutral-700">
                  {Email}
                </p>
              </div>
              <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:px-6">
                <form>
                  <div className="relative mb-6" data-te-input-wrapper-init>
                    <input type="text"
                      className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-700 dark:placeholder:text-neutral-500 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                      id="exampleInput90" placeholder="Name" />
                    <label
                      className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-700 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-500 dark:peer-focus:text-primary"
                      htmlFor="exampleInput90">Name
                    </label>
                  </div>
                  <div className="relative mb-6" data-te-input-wrapper-init>
                    <input type="email"
                      className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-700 dark:placeholder:text-neutral-500 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                      id="exampleInput91" placeholder="Email address" />
                    <label
                      className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-700 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-500 dark:peer-focus:text-primary"
                      htmlFor="exampleInput91">Email address
                    </label>
                  </div>
                  <div className="relative mb-6" data-te-input-wrapper-init>
                    <input type="email"
                      className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-700 dark:placeholder:text-neutral-500 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                      id="exampleInput91" placeholder="Téléphone" />
                    <label
                      className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-700 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-500 dark:peer-focus:text-primary"
                      htmlFor="exampleInput91">Téléphone
                    </label>
                   </div>
                  <div className="relative mb-6" data-te-input-wrapper-init>
                    <input type="email"
                      className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-700 dark:placeholder:text-neutral-500 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                      id="exampleInput91" placeholder="Sujet" />
                    <label
                      className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-700 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-500 dark:peer-focus:text-primary"
                      htmlFor="exampleInput91">Sujet
                    </label>
                  </div>
                  <div className="relative mb-6" data-te-input-wrapper-init>
                    <textarea
                      className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-700 dark:placeholder:text-neutral-500 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            id="exampleFormControlTextarea1" rows={3} placeholder="Your message"></textarea>
                    <label htmlFor="exampleFormControlTextarea1"
                      className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-700 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-500 dark:peer-focus:text-primary">Message</label>
                  </div>

                  <button type="button" data-te-ripple-init data-te-ripple-color="light"
                    className="mb-6  bg-blue-500 inline-block w-full rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                    Send
                  </button>
                </form>
              </div>
            </div>
          </section>
       </div>
  );
};

export default ContactSection;
