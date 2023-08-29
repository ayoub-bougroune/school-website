import React from 'react'

const About = () => {
  return (
     <main className=" flex justify-center items-center mt-36 sm:mt-80">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="lg:mb-0 mb-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-800">
                Our School's Story
              </h2>
              <p className="mt-3 text-base sm:text-lg text-gray-800">
                At our school, our journey began with a vision to provide exceptional education that fosters creativity,
                critical thinking, and a lifelong love for learning. Established in [Year], we have grown to become a
                vibrant community that nurtures the potential of every student.
              </p>
              <p className="text-gray-700 my-4">
                Over the years, we have dedicated ourselves to creating an environment where students not only excel
                academically but also develop strong values, leadership skills, and a sense of responsibility.
              </p>
              <p className="text-gray-700">
                Our commitment to quality education, experienced faculty, state-of-the-art facilities, and a diverse range
                of extracurricular activities has made us a hub for holistic development.
              </p>
            </div>
            <div className="mt-8 lg:mt-0">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-800">
                Our School's Mission
              </h2>
              <p className="mt-3 text-base sm:text-lg text-gray-700">
                Our mission at [School Name] is to empower students with knowledge, skills, and values that will enable
                them to excel in an ever-changing world. We are committed to providing a nurturing environment that
                promotes intellectual curiosity, creativity, and a sense of social responsibility.
              </p>
              <p className="text-gray-700 my-4">
                Through innovative teaching methods, a holistic approach to education, and fostering a growth mindset,
                we aim to develop well-rounded individuals who are prepared to contribute positively to society and
                embrace challenges with confidence.
              </p>
              <p className="text-gray-700">
                Our dedicated educators and staff work collaboratively to instill a love for learning, critical thinking,
                and a strong sense of ethics in each student, ensuring they are equipped to lead purposeful lives and
                make meaningful contributions to the global community.
              </p>
            </div>
          </div>
        </div>
      </main>
  )
}

export default About
