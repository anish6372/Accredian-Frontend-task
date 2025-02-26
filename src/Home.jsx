import { useState } from "react";
import referimage from "./assets/referandearn.png";
import { FaUser, FaBook, FaBriefcase } from "react-icons/fa";
import { FaHeadset } from "react-icons/fa";
import first from "./assets/first.png";

export default function ReferAndEarn() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    referrerName: "",
    referrerEmail: "",
    refereeName: "",
    refereeEmail: "",
  });
  const [errors, setErrors] = useState({});

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.referrerName)
      newErrors.referrerName = "Referrer name is required";
    if (!formData.referrerEmail)
      newErrors.referrerEmail = "Referrer email is required";
    if (!formData.refereeName)
      newErrors.refereeName = "Referee name is required";
    if (!formData.refereeEmail)
      newErrors.refereeEmail = "Referee email is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await fetch("http://localhost:5001/refer", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          console.log("Form submitted", formData);
          handleClose();
        } else {
          const errorData = await response.json();
          console.error("Error submitting form:", errorData);
        }
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    }
  };

  return (
    <div className="bg-gray-100 font-sans">
      
      <div className="bg-blue-200 text-center py-2 text-sm">
        Navigate your ideal career path with tailored expert advice{" "}
        <a href="#" className="text-blue-600">
          Contact Expert
        </a>
      </div>

      {/* Navigation Bar */}
      <nav className="py-4 px-4 sm:px-10 flex flex-col sm:flex-row justify-between items-center">
        <div className="flex items-center space-x-6">
          <span className="text-blue-600 font-bold text-xl">accredian</span>
          <button className="text-white font-semibold bg-blue-500 p-1 h-8 rounded">
            Courses ▾
          </button>
        </div>

        <div className="flex flex-wrap justify-center sm:justify-end items-center space-x-4 mt-4 sm:mt-0">
          <button className="text-gray-700">Refer & Earn</button>
          <button className="text-gray-700">Resources</button>
          <button className="text-gray-700">About Us</button>
          <button className="bg-gray-400 text-white rounded-md p-2">
            Login
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Try for Free
          </button>
        </div>
      </nav>

      <div className="border-black-200 bg-blue-100 flex flex-wrap justify-between w-full  ms-130 sm:w-[450px]  mt-4 rounded-2xl py-2">
        <h5 className="ms-4 sm:ms-12">Refer</h5>
        <h5>Benefits</h5>
        <h5>FaQS</h5>
        <h5 className="me-4 sm:me-8">Support</h5>
      </div>

      
      <section className="relative text-center py-10 bg-blue-100 mt-4 w-[400px] sm:w-3/6 sm:ms-84 rounded-md h-auto sm:h-[400px] ms-69">
  <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
    <div>
    <img
        src={first}
        alt="Money"
        className="absolute top-2 left-4 w-15 h-14 "
      />
      <h2 className="text-3xl sm:text-5xl font-bold ms-4">Let's Learn </h2>
      <h2 className="text-3xl sm:text-5xl font-bold">& Earn</h2>
      <div className="mt-8 me-12">
        <p className="text-gray-600 text-xl">Get a chance to win</p>
        <p className="text-gray-600 mb-6 text-xl">
          up-to{" "}
          <span className="text-blue-700 text-2xl font-bold">Rs. 15,000</span>
        </p>
      </div>
      <button
        onClick={handleOpen}
        className="bg-blue-500 w-28 text-white border-black-200 rounded-md h-9 me-20 mt-8"
      >
        Refer now
      </button>
    </div>

    
    <div className="relative mt-[-40px] overflow-hidden w-full sm:w-[350px] h-[400px]">
      <img
        src={referimage}
        alt="Refer and Earn"
        className="transition-transform duration-300 ease-in-out transform hover:scale-110 w-full h-full object-cover"
      />

     
      <img
        src={first}
        alt="Money"
        className="absolute top-2 left-4 w-15 h-14 "
      />
      <img
        src={first}
        alt="Money"
        className="absolute top-1/3 right-6 w-15 h-14 "
      />
      <img
        src={first}
        alt="Money"
        className="absolute bottom-10 left-10 w-15 h-14 "
      />
      <img
        src={first}
        alt="Money"
        className="absolute bottom-4 right-12 w-15 h-14 "
      />
    </div>
  </div>
</section>


      
      {open && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg shadow-lg w-11/12 sm:w-1/2">
            <h2 className="text-2xl font-bold mb-4">Refer a Friend</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700">Referrer Name</label>
                <input
                  type="text"
                  name="referrerName"
                  value={formData.referrerName}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                />
                {errors.referrerName && (
                  <p className="text-red-500 text-sm">{errors.referrerName}</p>
                )}
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Referrer Email</label>
                <input
                  type="email"
                  name="referrerEmail"
                  value={formData.referrerEmail}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                />
                {errors.referrerEmail && (
                  <p className="text-red-500 text-sm">{errors.referrerEmail}</p>
                )}
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Referee Name</label>
                <input
                  type="text"
                  name="refereeName"
                  value={formData.refereeName}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                />
                {errors.refereeName && (
                  <p className="text-red-500 text-sm">{errors.refereeName}</p>
                )}
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Referee Email</label>
                <input
                  type="email"
                  name="refereeEmail"
                  value={formData.refereeEmail}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                />
                {errors.refereeEmail && (
                  <p className="text-red-500 text-sm">{errors.refereeEmail}</p>
                )}
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={handleClose}
                  className="bg-gray-500 text-white px-4 py-2 rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      
      <section className="py-10 bg-blue-100 text-center mt-8 h-auto sm:h-[450px]">
        <h3 className="text-2xl font-semibold mb-6">
          How Do I <span className="text-blue-600">Refer?</span>
        </h3>
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div className="text-center p-4">
            <div className="w-24 h-24 bg-white shadow-lg rounded-full flex items-center justify-center mx-auto mb-4">
              <FaUser className="text-4xl text-blue-600" />
            </div>
            <div>
              <p></p>
              <p></p>
              <p></p>
            </div>
            <p>Submit referrals easily .</p>
            <p>via our website's referral</p>
            <p>section</p>
          </div>
          <div className="text-center p-4">
            <div className="w-24 h-24 bg-white shadow-lg rounded-full flex items-center justify-center mx-auto mb-4">
              <FaBook className="text-4xl text-blue-600" />
            </div>
            <div>
              <p>Earn rewards once</p>
              <p> your referral joins an Accredian</p>
              <p>program</p>
            </div>
          </div>
          <div className="text-center p-4">
            <div className="w-24 h-24 bg-white shadow-lg rounded-full flex items-center justify-center mx-auto mb-4">
              <FaBriefcase className="text-4xl text-blue-600" />
            </div>
            <div>
              <p>Referrer receives a bonus</p>
              <p>30 days after program </p>
              <p>enrollment.</p>
            </div>
          </div>
        </div>
        <button
          onClick={handleOpen}
          className="bg-blue-500 text-white px-6 py-2 rounded mt-16"
        >
          Refer Now
        </button>
      </section>

     
      <section className="py-10 bg-gray-100 text-center ms-4 sm:ms-40">
        <h3 className="text-2xl font-semibold mb-6 me-4 sm:me-32">
          What Are The <span className="text-blue-600">Referral Benefits?</span>
        </h3>
        <div className="ms-125 mb-0">
            <div className="flex justify-between ms-104">
                
            <button className=" border-black-200 rounded h-7">Enrolled</button>

            </div>
            
        </div>
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row ">
          <div className="w-full sm:w-1/5 bg-white shadow-lg rounded-lg p-4 mb-4 sm:mb-0">
            <button className="bg-blue-500 text-white px-4 py-2 rounded w-full mb-2">
              All Programs
            </button>
            <ul className="text-left text-gray-700 py-5">
              <li className="py-4 border-b">Product Management</li>
              <li className="py-4 border-b">Strategy & Leadership</li>
              <li className="py-4 border-b">Business Management</li>
              <li className="py-4 border-b">Fintech</li>
              <li className="py-4 border-b">Senior Management</li>
              <li className="py-4 border-b">Data Science</li>
              <li className="py-4 border-b">Digital Transformation</li>
              <li className="py-4">Business Analytics</li>
            </ul>
          </div>

          <div className="w-full sm:w-3/5  shadow-lg rounded-lg p-4 ml-0 sm:ml-4">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-blue-300">
                  <th className="p-2 text-left">Programs</th>
                  <th className="p-2">Referrer Bonus</th>
                  <th className="p-2">Referee Bonus</th>
                </tr>
              </thead>
              <tbody className="bg-gray-100">
                <tr className="">
                  <td className="p-2 text-left">
                    <h5>Professional Certificate Program in </h5>
                    <h5>Product Management</h5>
                  </td>
                  <td className="p-2">₹ 7,000</td>
                  <td className="p-2">₹ 9,000</td>
                </tr>
                <tr className="">
                  <td className="p-2 text-left">
                    <h5>PG Certificate Program in Strategic </h5>
                    <h5>Product Management</h5>
                  </td>
                  <td className="p-2">₹ 9,000</td>
                  <td className="p-2">₹ 11,000</td>
                </tr>
                <tr className="">
                  <td className="p-2 text-left">
                    {" "}
                    <h5>Executive Program in Data Driven</h5>{" "}
                    <h5>Product Management</h5>{" "}
                  </td>
                  <td className="p-2">₹ 10,000</td>
                  <td className="p-2">₹ 10,000</td>
                </tr>
                <tr className="">
                  <td className="p-2 text-left">
                    {" "}
                    <h5>Executive Program in Product Management</h5>
                    <h5> and Digital Tranformation</h5>
                  </td>
                  <td className="p-2">₹ 10,000</td>
                  <td className="p-2">₹ 10,000</td>
                </tr>
                <tr className="">
                  <td className="p-2 text-left">
                    {" "}
                    <h5>Executive Program in</h5>
                    <h5>Product Management</h5>
                  </td>
                  <td className="p-2">₹ 10,000</td>
                  <td className="p-2">₹ 10,000</td>
                </tr>
                <tr className="">
                  <td className="p-2 text-left">
                    {" "}
                    <h5>Advanced certification in</h5>{" "}
                    <h5>Project Management</h5>
                  </td>
                  <td className="p-2">₹ 10,000</td>
                  <td className="p-2">₹ 10,000</td>
                </tr>
                <tr className="">
                  <td className="p-2 text-left">
                    {" "}
                    <h5>Executive Program in Product Management</h5>
                    <h5> and project Mangement</h5>
                  </td>
                  <td className="p-2">₹ 10,000</td>
                  <td className="p-2">₹ 10,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <div className="ms-180 ">
        <button className="bg-gray-400 text-white ms-100 w-22 rounded p-1">
          show more
        </button>
      </div>

      <div className="ms-4 sm:ms-76">
        <button
          onClick={handleOpen}
          className="bg-blue-500 text-white px-6 py-2 rounded mt-4 ms-24 sm:ms-96 me-24 sm:me-96 mb-16"
        >
          Refer Now
        </button>
      </div>

      <section className="py-10 text-center ">
        <h3 className="text-2xl font-semibold mb-16 me-4 sm:me-24">
          Frequently Asked <span className="text-blue-500">Questions</span>
        </h3>
        <div className="flex flex-col sm:flex-row justify-between ">
          <button className="bg-gray-200 text-blue-500 p-2 ms-4 sm:ms-76 w-40 mb-4 sm:mb-0">
            Eligibility
          </button>
          <span className="text-blue-500 me-4 sm:me-84 text-sm">
            Do I need to have prior product management and project management
            experience to enroll in this program?
          </span>
        </div>
        <div className="flex flex-col sm:flex-row justify-between mt-4">
          <button className="bg-gray-200 text-blue-500 p-2 w-40 ms-76 sm:ms-76 mb-4 sm:mb-0">
            How to use?
          </button>
          <span className="text-white-300   me-84 text-sm">
            Do I need to have prior product management and project management
            experience to enroll in this program?
          </span>
        </div>
        <div className="flex flex-col sm:flex-row space-x-0 sm:space-x-16 mt-4">
          <button className="bg-gray-200 text-blue-500 p-2 w-40 ms-4 sm:ms-76 mb-4 sm:mb-0">
            Terms & Conditions
          </button>
          <span className="text-black-800 text-sm">
            What is the minimum system configuration required?
          </span>
        </div>
      </section>

      <section className="border-black-300 rounded-md bg-blue-500 w-full sm:w-[900px] ms-4 sm:ms-66 h-[135px] mt-12">
        <div className="flex flex-col sm:flex-row justify-between items-center py-12 mb-4">
          <div className="flex items-center me-36">
            <div className="bg-white p-3 rounded-md sm:ms-20">
              <FaHeadset className="text-blue-500 text-2xl" />
            </div>
            <div className="ml-4">
              <h2 className="text-white text-lg">
                Want to delve deeper into the program?
              </h2>
              <span className="text-[11px] text-white">
                Share your details to receive expert insight from our program
                team.
              </span>
            </div>
          </div>
          <button className="bg-gray-200 p-2 pe-5 ps-5 me-4 sm:me-12 mb-4 border-black-300 rounded">
            Get in touch
          </button>
        </div>
      </section>

     
      <footer className="bg-black text-white py-10 mt-20">
        <div className="flex flex-col sm:flex-row justify-between border-b">
          <div>
            <h1 className="text-white ms-4 sm:ms-48 text-xl">accredian</h1>
            <p className="sm:ms-48 text-[8px] text-white">
              {" "}
              credentials that matters
            </p>
          </div>

          <div>
            <button className="bg-blue-600 text-white px-4 rounded mt-4 sm:mt-0 me-4 sm:me-86 mb-8 h-8">
              Schedule 1-on-1 Call Now
            </button>
            <p className="text-white sm:me-86 mt-[-30px] mb-2 text-[12px] ms-4">
              speak with our Learning Adviser
            </p>
          </div>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 mt-4">
          <div>
            <h4 className="font-bold mb-4">Programs</h4>
            <ul>
              <li className="py-3">Data Science & AI</li>
              <li className="py-3">Product Management</li>
              <li className="py-3">Business Analytics</li>
              <li className="py-3">Digital Transformation</li>
              <li className="py-3">Business Management</li>
              <li className="py-3">Project Mangement</li>
              <li className="py-3">Strategy & Leadership</li>
              <li className="py-3">Senior Management</li>
              <li className="py-3">Fintech</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contact Us</h4>
            <p>Email us(For Data Science Queries):admissions@accredian.com</p>
            <p>Email us(For Product Management Queries):pm@acccredian.com</p>
            <p>Data Science Admission Helpline:+91 9079653292 (9 AM-7 PM)</p>
            <p>Product Management Admission Helpline:+91 9625811095</p>
            <p>Enrolled student Helpline:+91 7969322507</p>
            <p>Office Address:4th Floor,250,Phase IV,Udyog Vihar,Sector 18,Gurugram,</p>
            <p>Haryana 122015</p>
            <h4>Why Accredian</h4>
            <h4 className="font-bold mt-4">Follow Us</h4>
            <div className="flex space-x-4">
              <span>📘</span>
              <span>🐦</span>
              <span>📷</span>
              <span>🎥</span>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4">Accredian</h4>
            <ul>
              <li>About</li>
              <li>Career</li>
              <li>Blog</li>
              <li>Asmission Policy</li>
              <li>Referal Policy</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Master of Faqs</li>
            </ul>
          </div>
        </div>
        <p className="text-center mt-6">
          &copy; 2024 Accredian. A brand of Fullstack Education Pvt.ltd.All
          right Reserved
        </p>
      </footer>
    </div>
  );
}
