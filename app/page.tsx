import Image from 'next/image';

export default function Page() {
  return (
    <main className="flex h-screen w-screen bg-white">
     <div className="w-full sm:w-3/4 md:w-1/2 h-full flex items-center justify-center bg-white">
    
  <div className="w-full max-w-md p-8 bg-white rounded-lg  ">
  <h2 className="font-switzer font-semibold  text-center text-[#101010] mb-4 mt-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl lg:leading-[57.6px]">
              Create Your Account
            </h2>



    <p className="mb-8 text-center text-black">
      Welcome to a smarter way of managing tasks and products. Our comprehensive suite is designed to streamline your workflow.
    </p>

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
      <span className="mx-4 text-black">register with your email</span>
      <div className="flex-grow border-t border-gray-300"></div>
    </div>

    <form className=" size-full max-w-screen-sm max-h-[700px]">
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
    </form>

    <p className="mt-4 text-sm text-center text-gray-600">
      By clicking the button, you agree to our Terms, Privacy Policy and Security Policy.
    </p>
  </div>
</div>


      <div className="w-0 hidden sm:block sm:w-1/4 md:w-1/2 h-full">
        <div className="relative w-full h-full">
          <Image src="/image1.png" alt="Desktop View" layout="fill" objectFit="cover" />
        </div>
      </div>
    </main>
  );
}
