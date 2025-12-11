import { React, useState, useEffect } from "react";
import "../assets/css/main.css";
import Linkedlin from "../assets/images/linkedlin.svg";
import Github from "../assets/images/githb.svg";
import Twitter from "../assets/images/twitter.svg";
import { Link } from "react-router-dom";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const SERVICE_ID = 'service_x5828rn';
    const TEMPLATE_ID = 'template_ndc9krf';
    const PUBLIC_KEY = 'i6sE9oaYyxkV2N1pc';

    emailjs.send(SERVICE_ID, TEMPLATE_ID, {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_email: 'umoloblessing009@gmail.com'
    }, PUBLIC_KEY)
    .then(() => {
      setIsSubmitted(true);
      setIsLoading(false);
      setFormData({ name: '', email: '', message: '' });
    })
    .catch((error) => {
      console.error('Failed to send email:', error);
      alert('Failed to send message. Please try again.');
      setIsLoading(false);
    });
  };

  return (
    <div>
      <body class="bg-accent p-8 md:flex md:gap-x-10 lg:gap-x-14 lg:px-20">
        <header class="writing text-[18px] py-3 md:h-[95%] md:fixed">
          <nav class="flex flex-row items-center justify-between">
            <div class="flex gap-x-4 md:gap-x-14 items-center">
              <ul class="flex gap-x-4 md:gap-x-12">
                <li class="md:rotate-[-180deg] cursor-pointer uppercase tracking-widest font-light">
                  <Link to="/" class="hover:line-through">
                    home
                  </Link>
                </li>
              </ul>
              <span class="h-5 w-[2px] md:w-[1px] md:h-32 transform rotate-[90deg] md:rotate-0 bg-font-black"></span>
            </div>
            <div class="flex gap-3 text-sm">
              <p class="">&copy;</p>
              <p>/</p>
              <p class="md:rotate-[-180deg]">
                {currentDateTime.toLocaleString()}
              </p>
            </div>
          </nav>
        </header>

        <main class="md:px-32 lg:pl-96">
          <section class="hello">
            <h2 class="font-[cursive] text-[4.5rem] md:text-[8.5rem] lg:text-[12rem]">
              Hello!!!
            </h2>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} class="left space-y-8 font-bold">
                <div>
                  <label for="name">Name:</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    required
                  />
                </div>

                <div>
                  <label for="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Example@email.com"
                    required
                  />
                </div>

                <div>
                  <label for="message">Message:</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    cols="25"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Type your message here!!!"
                    required
                  ></textarea>
                </div>

                <button
                  class="bg-black rounded-lg py-1 px-2 text-[#ece7e1] mt-5 disabled:opacity-50"
                  type="submit"
                  disabled={isLoading}
                >
                  {isLoading ? 'Sending...' : 'Submit'}
                </button>
              </form>
            ) : (
              <div class="text-center py-10">
                <h3 class="text-3xl font-bold mb-4">Thank you for contacting me!</h3>
                <p class="text-lg mb-6">I'll get back to you as soon as possible.</p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  class="bg-black rounded-lg py-2 px-4 text-[#ece7e1] hover:bg-gray-800"
                >
                  Send Another Message
                </button>
              </div>
            )}

            <div class="mt-40">
              <div class="flex gap-5 justify-center hover:text-[#6C1BF0] rounded-xl py-2 px-3 underline bg-black text-[#ece7e1]">
                CONTACT ME:
                <ul class="flex gap-4">
                  <li class="lg:hover:scale-75">
                    <a href="https://www.linkedin.com/in/umolo-blessing-43634420a/">
                      <img src={Linkedlin} alt="" />
                    </a>
                  </li>
                  <li class="lg:hover:scale-75">
                    <a href="https://twitter.com/umolo_johnson">
                      <img src={Twitter} alt="" />
                    </a>
                  </li>
                  <li class="lg:hover:scale-75">
                    <a href="https://github.com/UmoloBlessing">
                      <img src={Github} alt="" />
                    </a>
                  </li>
                </ul>
              </div>

              <div class="contact-info mt-5 text-center">
                <p>
                  <i class="fas fa-envelope"></i> Email:
                  Umoloblessing009@gmail.com
                </p>
                <p>
                  <i class="fas fa-map-marker-alt"></i> Location: Lagos,
                  Nigeria.
                </p>
              </div>
            </div>
          </section>
        </main>
      </body>
    </div>
  );
};

export default Contact;