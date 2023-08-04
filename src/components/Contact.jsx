import React from "react";

const Contact = () => {
  const contact_info = [
    { logo: "mail", text: "yasirucareer@gmail.com" },
    { logo: "logo-whatsapp", text: "+94774047401" },
    { logo: "globe-outline", text: "www.yasiruvisions.com", },
  ];
  return (
    <section id="contact" className="py-10 px-3 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          Contact <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Get in touch</p>

        <div
          className="mt-16 flex md:flex-row flex-col
         gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto"
        >
          <form className="flex flex-col flex-1 gap-5">
            <input type="text" placeholder="Your Name" />
            <input type="Email" placeholder="Your Email Address" />
            <textarea placeholder="Your Message" rows={10}></textarea>
            <button className="btn-primary hover:bg-cyan-500 w-fit">Send Message</button>
          </form>
          <div className="flex flex-col  gap-7 ">
            {contact_info.map((contact, i) => (
              <div
                key={i}
                className="flex flex-row  
                  text-left gap-4 flex-wrap items-center"
              >
                <div className="min-w-[3.5rem]  text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full">
                  <ion-icon name={contact.logo}></ion-icon>
                </div>
                <p className="md:text-base text-sm  break-words">
                  {contact.logo === "globe-outline" ? (
                    <a href={`http://${contact.text}`} target="_blank" rel="noopener noreferrer">
                      {contact.text}
                    </a>
                  ) : contact.logo === "logo-whatsapp" ? (
                    <a href={`https://wa.me/${contact.text}`} target="_blank" rel="noopener noreferrer">
                      {contact.text}
                    </a>
                  ) : (
                    <a href={`mailto:${contact.text}`}>{contact.text}</a>
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
