import React from 'react';

export default function TermsPage() {
    return (
        <main className="bg-zinc-950 min-h-screen pt-32 pb-20 px-6">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tighter">Terms & Conditions</h1>
                <p className="text-zinc-500 mb-12">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

                <div className="prose prose-invert prose-zinc max-w-none space-y-12">

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
                        <p className="text-zinc-400">
                            Welcome to Parikh Renewable. These Terms and Conditions govern your use of our website and services. By accessing or using our website, you agree to be bound by these terms. If you disagree with any part of these terms, you may not access the service.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">2. Intellectual Property</h2>
                        <p className="text-zinc-400">
                            The content, design, extraction, and compilation of information on this website are the property of Parikh Renewable and are protected by applicable intellectual property laws. Unauthorized use of this material is prohibited.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">3. Use License</h2>
                        <p className="text-zinc-400 mb-4">
                            Permission is granted to temporarily download one copy of the materials (information or software) on Parikh Renewable's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                        </p>
                        <ul className="list-disc pl-6 text-zinc-400 space-y-2">
                            <li>Modify or copy the materials;</li>
                            <li>Use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
                            <li>Attempt to decompile or reverse engineer any software contained on Parikh Renewable's website;</li>
                            <li>Remove any copyright or other proprietary notations from the materials; or</li>
                            <li>Transfer the materials to another person or "mirror" the materials on any other server.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">4. Disclaimer</h2>
                        <p className="text-zinc-400">
                            The materials on Parikh Renewable's website are provided on an 'as is' basis. Parikh Renewable makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">5. Limitations</h2>
                        <p className="text-zinc-400">
                            In no event shall Parikh Renewable or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Parikh Renewable's website, even if Parikh Renewable or a Parikh Renewable authorized representative has been notified orally or in writing of the possibility of such damage.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">6. Contact Us</h2>
                        <p className="text-zinc-400">
                            If you have any questions about these Terms, please contact us at: <br />
                            <span className="text-white font-medium">support@parikhrenewable.com</span>
                        </p>
                    </section>

                </div>
            </div>
        </main>
    );
}
