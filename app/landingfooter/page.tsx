import Image from 'next/image';
import Link from 'next/link';

const Landingfooter = () => {
  const solutions = [
    'Project Management',
    'Increase Productivity',
    'Agile Workflows',
    'Mind Map',
    'Strategy & Planning',
    'Goal Management',
    'Work Management'
  ];

  const resources = [
    'Help Center',
    'Blog',
    'Community',
    'Support',
    'Developer & API',
    'Partners',
    'Accessibility'
  ];

  const company = [
    'About Us',
    'Careers',
    'Press',
    'Sitemap',
    'Investor Relations',
    'Customers',
    'Affiliates'
  ];

  const products = [
    'Home',
    'Pricing',
    'Enterprise',
    'Customer Success',
    'Trust & Security',
    'App & Integration',
    'Template'
  ];

  return (
    <div>
      <div className="relative bg-black w-full text-white py-40">
        <Image
          src="/bgimage.jpg" 
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 w-full h-full"
        />
        <div className="absolute inset-0 w-full h-full bg-[#101010d2] opacity-100"></div>
        <div className="relative w-full px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-switzer mb-4 font-semibold text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Elevate Your Workflow Today&#33;</h2>
          <p className="mt-2 text-sm font-normal font-switzer md:text-base  lg:text-lg mb-4 text-[#C2C2C2]">
            Take the next step towards seamless task management with our cutting-edge software&#46; Choose the perfect plan for your needs&#44; and empower your team to achieve more&#46;
          </p>
          <div className="mt-4 flex flex-col sm:flex-col md:flex-row items-center justify-center">
            <div className="relative flex items-center w-full sm:w-full md:w-3/5 h-14 border border-gray-300 bg-black text-white shadow-lg rounded-md">
              <div className="absolute left-4 flex items-center ">
                <Image
                  src="/icons/email.png"
                  alt="Email Icon"
                  width={20}
                  height={20}
                />
              </div>
              <input
                type="email"
                placeholder="robbi&#64;taskmanly"
                className="pl-12 pr-4 py-2 w-full h-full text-white bg-black text-sm font-normal font-switzer md:text-base focus:outline-none"
                style={{
                  boxShadow: '0 0 12px 4px rgba(0, 0, 255, 0.6)' 
                }}
              />
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-full md:w-[132px] h-[56px]  font-medium text-base font-switzer mt-4 md:mt-0 md:ml-2 rounded-md">
              Try for Free
            </button>
          </div>
        </div>
      </div>
      <footer className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
          <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-8">
            <div className="flex flex-col items-center lg:items-start mb-8 lg:mb-0">
              <div className="flex items-center justify-center md:justify-start">
                <Image
                  src="/icons/star.png"
                  alt="Star Logo"
                  width={40}
                  height={40}
                />
                <Image
                  src="/icons/task.png"
                  alt="Taskmanly Text Logo"
                  width={150}
                  height={40}
                  className="ml-2"
                />
              </div>
              <p className="mt-4 text-center text-sm font-normal font-switzer md:text-base lg:text-start">Welcome to a smarter way of managing tasks and products	&#46;</p>
              <div className="mt-4 flex justify-center lg:justify-start">
                <Link href="#">
                  <Image
                    src="/icons/apple.png"
                    alt="App Store"
                    width={150}
                    height={40}
                  />
                </Link>
                <Link href="#" className="ml-2">
                  <Image
                    src="/icons/googleplay.png"
                    alt="Google Play"
                    width={150}
                    height={70}
                  />
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 w-full text-left">
              <div className="flex flex-col  items-start">
                <h3 className="text-left text-[#C2C2C2] text-sm font-normal font-switzer md:text-base">Product</h3>
                <ul className="mt-4 space-y-2">
                  {products.map((product, index) => (
                    <li key={index}>
                      <Link href="#" className="hover:underline text-sm font-normal font-switzer md:text-base">{product}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col items-start">
                <h3 className="text-left text-[#C2C2C2] text-sm font-normal font-switzer md:text-base">Solution</h3>
                <ul className="mt-4 space-y-2">
                  {solutions.map((solution, index) => (
                    <li key={index}>
                      <Link href="#" className="hover:underline text-sm font-normal font-switzer md:text-base">{solution}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col items-start">
                <h3 className="text-left text-[#C2C2C2] text-sm font-normal font-switzer md:text-base">Resources</h3>
                <ul className="mt-4 space-y-2">
                  {resources.map((resource, index) => (
                    <li key={index}>
                      <Link href="#" className="hover:underline text-sm font-normal font-switzer md:text-base">{resource}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col items-start">
                <h3 className="text-left text-[#C2C2C2] text-sm font-normal font-switzer md:text-base">Company</h3>
                <ul className="mt-4 space-y-2">
                  {company.map((item, index) => (
                    <li key={index}>
                      <Link href="#" className="hover:underline text-sm font-normal font-switzer md:text-base">{item}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-col lg:flex-row gap-4 justify-between items-center">
            <div className="flex flex-col md:flex-row items-center space-x-4 gap-5">
              <p className="text-sm font-normal font-switzer md:text-base">	&#169; 2024 Taskmanly&#46; All rights reserved&#46;</p>
              <p className="text-sm font-normal font-switzer md:text-base">Privacy Policy</p>
              <p className="text-sm font-normal font-switzer md:text-base">Terms of Service</p>
              <p className="text-sm font-normal font-switzer md:text-base">Manages Cookies</p>
            </div>
            <div className="mt-4 md:mt-0 flex space-x-4">
              <Link href="#">
                <Image src="/icons/fb.png" alt="Facebook" width={25} height={25} />
              </Link>
              <Link href="#">
                <Image src="/icons/insta.png" alt="Instagram" width={20} height={20} />
              </Link>
              <Link href="#">
                <Image src="/icons/linkedin.png" alt="LinkedIn" width={20} height={20} />
              </Link>
              <Link href="#">
                <Image src="/icons/twitter.png" alt="Twitter" width={20} height={20} />
              </Link>
              <Link href="#">
                <Image src="/icons/youtube.png" alt="YouTube" width={20} height={20} />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landingfooter;
