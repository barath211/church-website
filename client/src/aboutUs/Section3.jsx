import React from "react";

const Section3 = () => {
  return (
    <section className="dark:bg-gray-100 dark:text-gray-800">
      <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
       
<h2 className="mb-12 text-4xl text-gray-700 font-bold leading-none text-center sm:text-3xl">
          OUR VISION
        </h2>
        <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 dark:divide-gray-300">
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
              Evangelism and Outreach
            </summary>
            <div className="px-4 pb-4">
              <p>
                Actively sharing the message of Jesus Christ with non-believers.
                Engaging with the local community through acts of service and
                love, reflecting Christ's compassion.
              </p>
            </div>
          </details>
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
              Spiritual Renewal
            </summary>
            <div className="px-4 pb-4">
              <p>
                Emphasizing deep, consistent prayer and vibrant worship to
                rekindle a passion for God.Seeking a fresh outpouring of the
                Holy Spirit to empower and guide the church.
              </p>
            </div>
          </details>
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
              Discipleship
            </summary>
            <div className="px-4 pb-4 space-y-2">
              <p>
                Providing robust teaching of biblical truths and practical
                training in living out the Christian faith. Developing
                one-on-one and small group mentoring relationships to foster
                spiritual growth.
              </p>
            </div>
          </details>
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
            Church Growth
            </summary>
            <div className="px-4 pb-4">
              <p>
               
Creating an inviting and inclusive atmosphere for new believers and visitors. Helping new believers integrate into the church community and become active participants.Establising churches in villages. </p>
            </div>
          </details>
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
            Leadership Development
            </summary>
            <div className="px-4 pb-4">
              <p>
              Equipping and empowering leaders who are passionate about the church’s vision.
              </p>
            </div>
          </details>
        </div>
      </div>
    </section>
  );
};

export default Section3;
