export default function ContactPage() {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">যোগাযোগ করুন</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">আমাদের ঠিকানা</h2>
            <address className="not-italic space-y-4">
              <p className="flex items-start">
                <svg className="w-5 h-5 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <span>১২৩ ফার্মাসি রোড, ঢাকা - ১২১৬, বাংলাদেশ</span>
              </p>
              
              <p className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <span>+৮৮০ ১২৩৪৫৬৭৮৯</span>
              </p>
              
              <p className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <span>info@bestpharma.com</span>
              </p>
            </address>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">কর্মঘণ্টা</h3>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>শনি - বৃহস্পতি:</span>
                  <span>সকাল ৯টা - সন্ধ্যা ৬টা</span>
                </li>
                <li className="flex justify-between">
                  <span>শুক্রবার:</span>
                  <span>বন্ধ</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-4">বার্তা পাঠান</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-1">আপনার নাম</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-600"
                  placeholder="আপনার নাম লিখুন"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-1">ইমেইল</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-600"
                  placeholder="আপনার ইমেইল লিখুন"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block mb-1">ফোন নম্বর</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-600"
                  placeholder="আপনার ফোন নম্বর লিখুন"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-1">বার্তা</label>
                <textarea 
                  id="message" 
                  rows={5}
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-600"
                  placeholder="আপনার বার্তা লিখুন"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition-colors"
              >
                পাঠান
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }