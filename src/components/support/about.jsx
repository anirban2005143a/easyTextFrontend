import React from 'react'
import Navbar from '../navbar.jsx'

const About = () => {
  return (
    <>
      <Navbar />
      <div class="max-w-6xl mx-auto p-6 mt-24 text-orange-50">
        <section class="mb-12">
            <h1 class="text-4xl font-bold mb-6">About Us</h1>
            <p class="text-lg leading-relaxed">
                Welcome to our platform! We are passionate about making content creation as seamless and accessible as possible. Our innovative tool harnesses the power of AI to transform your ideas into fully realized content—whether you're drafting a blog, crafting a video description, or searching for job-related content, we’ve got you covered.
            </p>
        </section>

        <section class="mb-12">
            <h2 class="text-3xl font-semibold mb-4">Our Mission</h2>
            <p class="text-lg leading-relaxed">
                Our mission is simple: to empower creators, marketers, and professionals by providing a free, easy-to-use tool that removes the barriers to high-quality content creation. We believe that everyone should have access to the resources they need to bring their ideas to life, without the hassle of sign-ups or hidden fees.
            </p>
        </section>

        <section class="mb-12">
            <h2 class="text-3xl font-semibold mb-4">What We Offer</h2>
            <ul class="list-disc list-inside text-lg leading-relaxed">
                <li><strong>Versatile Content Generation:</strong> Our platform is designed to turn your text input into various forms of content. Whether you're looking for blog titles, full articles, summaries, video titles, descriptions, advertising content, or even job-related content, our AI-driven tool can handle it all.</li>
                <li><strong>User-Friendly Experience:</strong> We’ve made sure that our platform is optimized for use on both mobile and desktop devices, so you can create content on the go or from the comfort of your office. With no sign-up required, you can jump straight into content creation without any delays.</li>
                <li><strong>Completely Free:</strong> We’re committed to keeping our platform free for everyone. We believe that access to content creation tools should be universal, which is why we’ve eliminated all costs associated with using our service.</li>
            </ul>
        </section>

        <section class="mb-12">
            <h2 class="text-3xl font-semibold mb-4">Our Vision</h2>
            <p class="text-lg leading-relaxed">
                We envision a world where content creation is not just reserved for those with resources but is available to anyone with a creative idea. By leveraging AI, we aim to break down the barriers to content creation, making it easier for everyone to share their voice and reach their audience.
            </p>
        </section>

       

        <section class="mb-12">
            <h2 class="text-3xl font-semibold mb-4">Get in Touch</h2>
            <p class="text-lg leading-relaxed">
                We’re always eager to hear from you! Whether you have feedback, suggestions, or just want to say hello, feel free to reach out. Your input helps us improve and continue to deliver a service that meets your needs.
            </p>
        </section>
    </div>


    </>
  )
}

export default About