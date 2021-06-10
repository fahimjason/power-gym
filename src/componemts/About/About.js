import React from "react";

const About = () => {
  return (
    <div>
      <section id="about" class="relative py-20 bg-black text-white">
        <div class="container mx-auto px-4">
          <div class="items-center flex flex-wrap">
            <div
              class="w-full md:w-4/12 ml-auto mr-auto px-4"
              data-aos="fade-right"
            >
              <img
                alt="..."
                class="max-w-full rounded-lg shadow-lg"
                src="https://images.unsplash.com/photo-1550345332-09e3ac987658?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
              />
            </div>
            <div
              class="w-full md:w-5/12 ml-auto mr-auto px-4"
              data-aos="fade-left"
            >
              <div class="md:pr-12">
                <small class="text-orange-500">About our gym</small>
                <h3 class="text-4xl uppercase font-bold">Safe Body Building</h3>
                <p class="mt-4 text-lg leading-relaxed">
                  The extension comes with three pre-built pages to help you get
                  started faster. You can change the text and images and you're
                  good to go.
                </p>
                <ul class="list-none mt-6">
                  <li class="py-2">
                    <div class="flex items-center">
                      <div>
                        <span class="font-semibold inline-block py-3 mr-3 text-orange-500">
                          <i class="fas fa-dumbbell fa-2x"></i>
                        </span>
                      </div>
                      <div>
                        <h4 class="text-xl">
                          {"The latest & greatest gym equipment"}
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li class="py-2">
                    <div class="flex items-center">
                      <div>
                        <span class="font-semibold inline-block py-3 mr-3 text-orange-500">
                          <i class="fas fa-hard-hat fa-2x"></i>
                        </span>
                      </div>
                      <div>
                        <h4 class="text-xl">
                          5-inch, quality foam floor padding
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li class="py-2">
                    <div class="flex items-center">
                      <div>
                        <span class="font-semibold inline-block py-3 mr-3 text-orange-500">
                          <i class="fas fa-users fa-2x"></i>
                        </span>
                      </div>
                      <div>
                        <h4 class="text-xl">3 professional trainers</h4>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
