import React from 'react';

export default function PrivacyPage() {
    return (
        <main className="bg-zinc-950 min-h-screen pt-32 pb-20 px-6">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tighter">Privacy Policy</h1>
                <p className="text-zinc-500 mb-12">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

                <div className="prose prose-invert prose-zinc max-w-none space-y-12">

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">1. Information Collection</h2>
                        <p className="text-zinc-400">
                            At Parikh Renewable, accessible from our website, one of our main priorities is the privacy of our visitors. We collect information that you voluntarily provide to us when you fill out forms on our website, such as your name, email address, phone number, and project details.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
                        <p className="text-zinc-400 mb-4">
                            We use the information we collect in various ways, including to:
                        </p>
                        <ul className="list-disc pl-6 text-zinc-400 space-y-2">
                            <li>Provide, operate, and maintain our website;</li>
                            <li>Improve, personalize, and expand our website;</li>
                            <li>Understand and analyze how you use our website;</li>
                            <li>Develop new products, services, features, and functionality;</li>
                            <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">3. Log Files</h2>
                        <p className="text-zinc-400">
                            Parikh Renewable follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">4. Cookies and Web Beacons</h2>
                        <p className="text-zinc-400">
                            Like any other website, Parikh Renewable uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">5. Third Party Privacy Policies</h2>
                        <p className="text-zinc-400">
                            Parikh Renewable's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">6. Contact Us</h2>
                        <p className="text-zinc-400">
                            If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us at: <br />
                            <span className="text-white font-medium">support@parikhrenewable.com</span>
                        </p>
                    </section>

                </div>
            </div>
        </main>
    );
}
