import Image from 'next/image';

export default function Page() {
  return (
    <main className="flex flex-col lg:flex-row items-start justify-center min-h-screen bg-white p-8">
      <section className="w-full max-w-md lg:w-[686px] lg:max-w-none md:w-[60%] md:max-w-[635px] md:flex-shrink-0 flex flex-col justify-center h-[1024px] lg:items-center">
        <div className="w-full flex flex-col justify-center items-center h-full">
          <div className="w-full flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold mb-4 text-black text-center">Create Your Account</h1>
            <p className="mb-8 text-black text-center">
              Welcome to a smarter way of managing tasks and products. Our comprehensive suite is designed to streamline your workflow.
            </p>
          </div>

          <button className="flex items-center justify-center w-full py-3 mb-4 text-lg text-black bg-white border border-gray-300 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 326667 333333" className="w-6 h-6 mr-2" fill="currentColor">
              <path d="M326667 170370c0-13704-1112-23704-3518-34074H166667v61851h91851c-1851 15371-11851 38519-34074 54074l-311 2071 49476 38329 3428 342c31481-29074 49630-71852 49630-122593m0 0z" fill="#4285f4"/>
              <path d="M166667 333333c44999 0 82776-14815 110370-40370l-52593-40742c-14074 9815-32963 16667-57777 16667-44074 0-81481-29073-94816-69258l-1954 166-51447 39815-673 1870c27407 54444 83704 91852 148890 91852z" fill="#34a853"/>
              <path d="M71851 199630c-3518-10370-5555-21482-5555-32963 0-11482 2036-22593 5370-32963l-93-2209-52091-40455-1704 811C6482 114444 1 139814 1 166666s6482 52221 17777 74814l54074-41851m0 0z" fill="#fbbc04"/>
              <path d="M166667 64444c31296 0 52406 13519 64444 24816l47037-45926C249260 16482 211666 1 166667 1 101481 1 45185 37408 17777 91852l53889 41853c13520-40185 50927-69260 95001-69260m0 0z" fill="#ea4335"/>
            </svg>
            Register with Google
          </button>

          <div className="flex items-center mb-4 w-full">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-4 text-black">Register with email</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          <form className="w-full mx-auto bg-white p-6 rounded-lg shadow-md">
            <div className="mb-5">
              <label className="block mb-2 text-black">Full Name</label>
              <input type="text" id="fullName" className="w-full p-2 border border-gray-300 rounded-lg" placeholder="Enter your full name" />
            </div>

            <div className="mb-5">
              <label className="block mb-2 text-black">Email Address</label>
              <input type="email" id="email" className="w-full p-2 border border-gray-300 rounded-lg" placeholder="Enter your email" />
            </div>

            <div className="mb-5">
              <label className="block mb-2 text-black">Phone Number</label>
              <input type="text" id="phoneNumber" className="w-full p-2 border border-gray-300 rounded-lg" placeholder="eg. +1 123 345 6789" />
            </div>

            <div className="mb-5">
              <label className="block mb-2 text-black">Password</label>
              <input type="password" id="password" className="w-full p-2 border border-gray-300 rounded-lg" placeholder="Enter your password" />
            </div>

            <button type="submit" className="w-full py-3 text-lg text-white bg-blue-700 rounded-lg">Register</button>

            <p className="mt-4 text-sm text-center text-gray-600">
              By clicking the button, you agree to our Terms, Privacy Policy and Security Policy.
            </p>
          </form>
        </div>
      </section>

      <div className="relative hidden lg:block lg:w-[754px] lg:h-[1024px]">
        <div className="relative w-full h-full">
          <Image src="/image1.png" alt="Desktop View" layout="fill" objectFit="cover" />
        </div>
      </div>
      <div className="relative hidden md:block lg:hidden md:w-[40%] md:h-[1024px]">
        <div className="relative w-full h-full">
          <Image src="/image2.png" alt="Tablet View" layout="fill" objectFit="cover" />
        </div>
      </div>
      
    </main>
  );
}
