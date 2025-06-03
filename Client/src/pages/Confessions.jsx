import React from 'react'
import CommunityNavbar from '../components/CommunityNavbar'

const Confessions = () => {
  return (
    <main>
      <CommunityNavbar/>
      <div className="px-40 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        <div className="flex flex-wrap justify-between gap-3 p-4">
          <div className="flex min-w-72 flex-col gap-3">
            <p className="text-[#181111] text-[32px] font-bold leading-tight">
              Community Confessions
            </p>
            <p className="text-[#886364] text-sm font-normal leading-normal">
              Browse through confessions submitted by others.
            </p>
          </div>
        </div>

        <div className="flex gap-3 p-3 flex-wrap pr-4">
          <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#f4f0f0] pl-4 pr-4">
            <p className="text-[#181111] text-sm font-medium leading-normal">All</p>
          </div>
          <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#f4f0f0] pl-4 pr-4">
            <p className="text-[#181111] text-sm font-medium leading-normal">Popular</p>
          </div>
          <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#f4f0f0] pl-4 pr-4">
            <p className="text-[#181111] text-sm font-medium leading-normal">Recent</p>
          </div>
        </div>

        <div className="p-4">
          <div
            className="bg-cover bg-center flex flex-col items-stretch justify-end rounded-xl pt-[132px]"
            style={{
              backgroundImage:
                'linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDbIPYuA96g7UxoZ3VK1ff9dQ0xeDmbmmV0uSdB024VOKm-Z-I3bfRQn5Cu1ytx5BPU6FBWaCf-C4NT27sneuBY6eM9DE8UO55f3Pjei5SArQh_RyUvVemDRQG5CtjXMUSuguhe02T-f5_m1cA5Tzd9dhqO57Up8cdCuFkiN22ZtV58eqU3lkw0i_QZPpvzJ8FjftGElfWSu54waDJ4r5sCE7uX9V0ONZ3vXjnvHNBtLoOqMuEWR7udwcRc_f9OAiWrXGIWgcG7Nnw")',
            }}
          >
            <div className="flex w-full items-end justify-between gap-4 p-4">
              <div className="flex max-w-[440px] flex-1 flex-col gap-1">
                <p className="text-white text-2xl font-bold leading-tight">
                  I once accidentally sent a love letter to my boss instead of my partner. It was
                  mortifying!
                </p>
                <p className="text-white text-base font-medium leading-normal">Submitted by: Anonymous</p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-4">
          <div
            className="bg-cover bg-center flex flex-col items-stretch justify-end rounded-xl pt-[132px]"
            style={{
              backgroundImage:
                'linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAbBfzAYcyJEB-Ij0T4RTiiiUHXZpUmPt0dkD6wUgjatSED4iC6xMAVOVFA_mhGEwK5ZlCnZ5nQQO2K8cwqLYOXlPMPOEXTSOb4lHt9T67jfnKFCEs1CPSzzneEgLnQX72H0UirW2--_0vEeq6V3WRPFPypjdpoiIjphLbWOCnYmLgu-5ZfS3Qi0aUEfOYY7xtO27z7GPB10PTCWeFurY4RMQjLIReQ45yJ-pLWj-hBiy_ZWbr5XZK1d2Rg7OClI-GXgoZ3LjB66vc")',
            }}
          >
            <div className="flex w-full items-end justify-between gap-4 p-4">
              <div className="flex max-w-[440px] flex-1 flex-col gap-1">
                <p className="text-white text-2xl font-bold leading-tight">
                  I secretly enjoy reality TV shows, even though I pretend to hate them in front of
                  my friends.
                </p>
                <p className="text-white text-base font-medium leading-normal">Submitted by: SecretViewer</p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-4">
          <div
            className="bg-cover bg-center flex flex-col items-stretch justify-end rounded-xl pt-[132px]"
            style={{
              backgroundImage:
                'linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCWXMJ5ddBi3591_l1hG2h9-udOZkcTn0v3RetV9Dmvy_dF028N8eRqGePMRy4NEjSKjs8sw77vg-FdjfMwR0ryHm7CQWejPn2IhlSb02h83hn3Smc1f9O4f0ddbiUy7trn0XK9ApBCkVcb_0A149nrPFzZUuBR-oxRkvC_EO6LmAv0eYniVPIwOwLrcOqtBqjb7qbCm-RigLa1zl8UbMMpOwIqIyuB-gs5Sz_uz7Hz1vRAIfSGrU5F2YTU7jM-roDaz0D4uE2UP0s")',
            }}
          >
            <div className="flex w-full items-end justify-between gap-4 p-4">
              <div className="flex max-w-[440px] flex-1 flex-col gap-1">
                <p className="text-white text-2xl font-bold leading-tight">
                  I have a hidden talent for writing poetry, but I'm too afraid to share it with
                  anyone.
                </p>
                <p className="text-white text-base font-medium leading-normal">Submitted by: ShyPoet</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
    </main>
  )
}

export default Confessions