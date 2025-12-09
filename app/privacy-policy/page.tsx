import Link from "next/link";
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Privacy Policy',
    description: 'Privacy Policy for SmartMoney Calc. Learn how we handle your data.',
}

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-background text-text-primary px-4 py-12 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="p-8 sm:p-12">
                    <Link href="/" className="inline-flex items-center text-primary hover:text-primary-dark mb-8 transition-colors duration-200">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back to Calculators
                    </Link>

                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>

                    <div className="prose prose-lg text-gray-600 max-w-none space-y-6">
                        <p className="lead">
                            At SmartMoney Calc, accessible from https://smartmoney-calc.web.app, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by SmartMoney Calc and how we use it.
                        </p>

                        <p>
                            If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.
                        </p>

                        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Log Files</h2>
                        <p>
                            SmartMoney Calc follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.
                        </p>

                        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Cookies and Web Beacons</h2>
                        <p>
                            Like any other website, SmartMoney Calc uses "cookies". These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.
                        </p>

                        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Google DoubleClick DART Cookie</h2>
                        <p>
                            Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to www.website.com and other sites on the internet. However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL – <a href="https://policies.google.com/technologies/ads" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://policies.google.com/technologies/ads</a>
                        </p>

                        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Privacy Policies</h2>
                        <p>
                            You may consult this list to find the Privacy Policy for each of the advertising partners of SmartMoney Calc.
                        </p>
                        <p>
                            Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on SmartMoney Calc, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.
                        </p>
                        <p>
                            Note that SmartMoney Calc has no access to or control over these cookies that are used by third-party advertisers.
                        </p>

                        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Third Party Privacy Policies</h2>
                        <p>
                            SmartMoney Calc's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.
                        </p>
                        <p>
                            You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites.
                        </p>

                        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Children's Information</h2>
                        <p>
                            Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.
                        </p>
                        <p>
                            SmartMoney Calc does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.
                        </p>

                        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Online Privacy Policy Only</h2>
                        <p>
                            This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in SmartMoney Calc. This policy is not applicable to any information collected offline or via channels other than this website.
                        </p>

                        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Consent</h2>
                        <p>
                            By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions.
                        </p>
                    </div>
                </div>
                <div className="bg-gray-50 px-8 py-6 border-t border-gray-100">
                    <p className="text-sm text-gray-500 text-center">
                        Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </p>
                </div>
            </div>
        </div>
    )
}
