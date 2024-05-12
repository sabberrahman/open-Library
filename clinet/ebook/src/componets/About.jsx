
import Navbar from './Navbar'
import Footer from './Footer'
import { PaperClipIcon } from '@heroicons/react/20/solid'



export default function About() {
  return (
    <div> 
        <Navbar/>
        <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 dark:text-white '>
      <div className="px-4 sm:px-0 dark:text-white">
        <h3 className="text-base font-semibold leading-7 text-gray-900 dark:text-white">Applicant Information</h3>
        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Personal details and application.</p>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 dark:text-gray-900 text-white">Full name</dt>
            <dd className="mt-1 text-sm leading-6 dark:text-gray-900 text-white sm:col-span-2 sm:mt-0">Shohanur Rahman Sabbir</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 dark:text-gray-900 text-white">Application for</dt>
            <dd className="mt-1 text-sm leading-6 dark:text-gray-900 text-white sm:col-span-2 sm:mt-0">Mern Stack Developer</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 dark:text-gray-900 text-white">Email address</dt>
            <dd className="mt-1 text-sm leading-6 dark:text-gray-900 text-white sm:col-span-2 sm:mt-0">sabberrahman.contact@gmail.com</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6  dark:text-gray-900 text-white">Salary expectation</dt>
            <dd className="mt-1 text-sm leading-6  dark:text-gray-900 text-white sm:col-span-2 sm:mt-0">$1/3 company ROI</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6  dark:text-gray-900 text-white">About</dt>
            <dd className="mt-1 text-sm leading-6  dark:text-gray-900 text-white sm:col-span-2 sm:mt-0">
            MERN Stack dev bringing web ideas to life since 2020.   Building user-friendly UIs with React, scalable backends with Node.js, and leveraging MongoDB for data magic.
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6  dark:text-gray-900 text-white">Attachments</dt>
            <dd className="mt-2 text-sm  dark:text-gray-900 text-white sm:col-span-2 sm:mt-0">
              <ul role="list" className="divide-y divide-gray-100 rounded-md border border-gray-200">
                <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                  <div className="flex w-0 flex-1 items-center">
                    <PaperClipIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                    <div className="ml-4 flex min-w-0 flex-1 gap-2">
                      <span className="truncate font-medium">resume_Mern_developer.pdf</span>
                      <span className="flex-shrink-0 text-gray-400">2.4mb</span>
                    </div>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                      Download
                    </a>
                  </div>
                </li>
                <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                  <div className="flex w-0 flex-1 items-center">
                    <PaperClipIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                    <div className="ml-4 flex min-w-0 flex-1 gap-2">
                      <span className="truncate font-medium">coverletter_Mern_developer.pdf</span>
                      <span className="flex-shrink-0 text-gray-400">4.5mb</span>
                    </div>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                      Download
                    </a>
                  </div>
                </li>
              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </div>
   
    <Footer/>
</div>
  )
}
