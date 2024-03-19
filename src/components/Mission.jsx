import React from 'react'
import "./mission.css"

const Mission = () => {
  return (
    <div>
       {/* <!-- Features Section --> */}
    <section id="experience">
      {/* <!-- Flex container --> */}
      <div
        class="mission container flex flex-col px-4 mx-auto mb-64 mt-36 space-y-12 md:space-y-0 md:flex-row"
      >
        {/* <!-- What's Different --> */}
        <div class="intro flex flex-col space-y-12 md:w-1/2">
          <h2 class="max-w-md text-4xl font-bold text-center md:text-left">
            About Me
          </h2>
          <p class="max-w-sm text-center text-darkGrayishBlue md:text-left">
          Rizky Akbar Setiawan adalah seorang mahasiswa S1 Teknik Robotika dan Kecerdasan Buatan di Universitas Airlangga yang diharapkan lulus pada tahun 2025. Selama masa studinya, Rizky telah menunjukkan keterlibatannya dalam berbagai organisasi dan proyek. Dia menjabat sebagai Kepala Divisi Kader di HIMATERA UNAIR, di mana dia bertanggung jawab atas pengembangan dan pelatihan kader dalam organisasi. Rizky juga memiliki pengalaman sebagai Staff Mekanikal dalam tim Akasha Darshaka yang berpartisipasi dalam Kontes KRTI, Divisi Fixed Wing. Di sana, dia mendesain dan membangun peluncur pesawat sayap tetap otonom. Dengan latar belakang pendidikan dan pengalaman kerja ini, Rizky menunjukkan keterampilan dalam pemecahan masalah, kepemimpinan tim, dan mekanik.
          </p>
        </div>

        {/* <!-- Numbered List --> */}
        <div class="pointer flex flex-col space-y-8 md:w-1/2">
          {/* <!-- List Item 1 --> */}
          <div
            class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row"
          >
            {/* <!-- Heading --> */}
            <div class="rounded-l-full bg-brightRedSupLight md:bg-transparent">
              <div class="flex items-center space-x-2">
                <div
                  class="px-4 py-2 text-black rounded-full md:py-1 bg-brightRed"
                >
                  01
                </div>
                <h3 class="text-base font-bold md:mb-4 md:hidden">
                  HIMATERA UNAIR
                </h3>
              </div>
            </div>

            <div>
              <h3 class="hidden mb-4 text-lg font-bold md:block">
              Head of Cadre Division (HIMATERA UNAIR)
              </h3>
              <p class="text-darkGrayishBlue">
                Responsible for the development and coaching of cadres in 
                the organization. Involves several aspects, namely cadre planning,
                training and coaching, and monitoring
              </p>
            </div>
          </div>

          {/* <!-- List Item 2 --> */}
          <div
            class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row"
          >
            {/* <!-- Heading --> */}
            <div class="rounded-l-full bg-brightRedSupLight md:bg-transparent">
              <div class="flex items-center space-x-2">
                <div
                  class="px-4 py-2 text-black rounded-full md:py-1 bg-brightRed"
                >
                  02
                </div>
                <h3 class="text-base font-bold md:mb-4 md:hidden">
                HIMATERA UNAIR
                </h3>
              </div>
            </div>

            <div>
              <h3 class="hidden mb-4 text-lg font-bold md:block">
              Steering Committee of ROTATION 23
              </h3>
              <p class="text-darkGrayishBlue">
              provide direction, guidance and strategic support in managing projects or initiatives involving various interested parties.
              </p>
            </div>
          </div>

          {/* <!-- List Item 3 --> */}
          <div
            class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row"
          >
            {/* <!-- Heading --> */}
            <div class="rounded-l-full bg-brightRedSupLight md:bg-transparent">
              <div class="flex items-center space-x-2">
                <div
                  class="px-4 py-2 text-black rounded-full md:py-1 bg-brightRed"
                >
                  03
                </div>
                <h3 class="text-base font-bold md:mb-4 md:hidden">
                Lorem ipsum dolor sit amet
                </h3>
              </div>
            </div>

            <div>
              <h3 class="hidden mb-4 text-lg font-bold md:block">
              Staff Mechanical of Akasha Darshaka Team Akasura KRTI              </h3>
              <p class="text-darkGrayishBlue">
              Part of Akasha Darshaka team that participates in KRTI Contest, Fixed Wing Division. Designs and build autonomous fixed wing plane aircarft launcer
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    </div>
  )
}

export default Mission